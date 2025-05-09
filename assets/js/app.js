// Define routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/tentang', component: AboutPage },
    { path: '/program', component: ProgramsPage },
    { path: '/hubungi', component: ContactPage },
    { path: '/login', component: LoginPage },
    { path: '/dashboard', component: DashboardPage, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', component: NotFoundPage }
];

// Create the router instance
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior() {
        // Always scroll to top
        return { top: 0 }
    }
});

// Navigation guard
router.beforeEach((to, from, next) => {
    // Check if the route requires authentication
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if user is logged in
        if (!localStorage.getItem('user')) {
            // Redirect to login page if not logged in
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

// Create the Vue app
const app = Vue.createApp({
    components: {
        'navbar-component': Navbar,
        'footer-component': Footer
    },
    template: `
        <div>
            <navbar-component></navbar-component>
            <router-view class="main-content"></router-view>
            <footer-component></footer-component>
        </div>
    `
});

// Use the router
app.use(router);

// Mount the app
app.mount('#app');