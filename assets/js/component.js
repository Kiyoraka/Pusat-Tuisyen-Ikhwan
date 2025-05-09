// Component for the navigation bar
const Navbar = {
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary-custom">
            <div class="container">
                <a class="navbar-brand" href="#">Pusat Tuisyen Ikhwan</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Laman Utama</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/tentang">Tentang Kami</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/program">Program</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/hubungi">Hubungi Kami</router-link>
                        </li>
                        <li class="nav-item" v-if="!isLoggedIn">
                            <router-link class="nav-link" to="/login">Log Masuk</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                            <a class="nav-link" href="#" @click.prevent="logout">Log Keluar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
    computed: {
        isLoggedIn() {
            return localStorage.getItem('user') !== null;
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('user');
            this.$router.push('/');
        }
    }
};

// Component for the image slider
const ImageSlider = {
    template: `
        <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" style="background-image: url('assets/img/slider1.jpg')">
                    <div class="carousel-caption">
                        <h2>Pendidikan Berkualiti</h2>
                        <p>Kami menyediakan pendidikan berkualiti tinggi untuk masa depan cerah.</p>
                    </div>
                </div>
                <div class="carousel-item" style="background-image: url('assets/img/slider2.jpg')">
                    <div class="carousel-caption">
                        <h2>Tenaga Pengajar Berpengalaman</h2>
                        <p>Guru-guru kami mempunyai pengalaman luas dalam bidang pendidikan.</p>
                    </div>
                </div>
                <div class="carousel-item" style="background-image: url('assets/img/slider3.jpg')">
                    <div class="carousel-caption">
                        <h2>Persekitaran Pembelajaran Kondusif</h2>
                        <p>Pusat kami menyediakan persekitaran yang selesa untuk pembelajaran optimum.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Sebelumnya</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Seterusnya</span>
            </button>
        </div>
    `
};

// Component for the footer
const Footer = {
    template: `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h5>Pusat Tuisyen Ikhwan</h5>
                        <p>Menyediakan pendidikan berkualiti untuk masa depan yang lebih cerah.</p>
                        <div class="social-icons mt-3">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h5>Pautan Berguna</h5>
                        <ul class="footer-links">
                            <li><router-link to="/">Laman Utama</router-link></li>
                            <li><router-link to="/tentang">Tentang Kami</router-link></li>
                            <li><router-link to="/program">Program Kami</router-link></li>
                            <li><router-link to="/hubungi">Hubungi Kami</router-link></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Hubungi Kami</h5>
                        <ul class="footer-links">
                            <li><i class="fas fa-map-marker-alt me-2"></i> Jalan Bunga Raya, Taman Ikhwan, 43000 Kajang, Selangor</li>
                            <li><i class="fas fa-phone me-2"></i> 03-8888 9999</li>
                            <li><i class="fas fa-envelope me-2"></i> info@ikhwan.edu.my</li>
                        </ul>
                    </div>
                </div>
                <hr class="mt-4 mb-4" style="border-color: rgba(255,255,255,0.1);">
                <div class="text-center">
                    <p class="mb-0">&copy; 2025 Pusat Tuisyen Ikhwan. Hak Cipta Terpelihara.</p>
                </div>
            </div>
        </footer>
    `
};

// Component for the home page
const HomePage = {
    template: `
        <div>
            <image-slider></image-slider>
            
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="container">
                    <h1>Selamat Datang ke Pusat Tuisyen Ikhwan</h1>
                    <p>Kami memberi tumpuan kepada perkembangan pelajar secara menyeluruh melalui pendekatan pengajaran inovatif dan berpusatkan pelajar.</p>
                    <router-link to="/hubungi" class="btn btn-lg bg-secondary-custom text-white mt-3">Daftar Sekarang</router-link>
                </div>
            </section>
            
            <!-- Features Section -->
            <section class="py-5">
                <div class="container">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold text-primary-custom">Mengapa Memilih Kami?</h2>
                        <p class="lead">Kami menyediakan pengalaman pembelajaran terbaik untuk anak anda</p>
                    </div>
                    
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="feature-box shadow">
                                <div class="feature-icon"><i class="fas fa-user-graduate"></i></div>
                                <h3>Pengajar Berpengalaman</h3>
                                <p>Tenaga pengajar kami terdiri daripada guru-guru berpengalaman dan berkelayakan tinggi.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-box shadow">
                                <div class="feature-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                                <h3>Kelas Bersaiz Kecil</h3>
                                <p>Kelas bersaiz kecil memastikan setiap pelajar mendapat perhatian individu yang mencukupi.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-box shadow">
                                <div class="feature-icon"><i class="fas fa-book-open"></i></div>
                                <h3>Sukatan Pelajaran Terkini</h3>
                                <p>Kami sentiasa mengikuti sukatan pelajaran terkini dan teknik peperiksaan terbaru.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Programs Section -->
            <section class="py-5 bg-light">
                <div class="container">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold text-primary-custom">Program Kami</h2>
                        <p class="lead">Menawarkan pelbagai program tuisyen untuk semua peringkat</p>
                    </div>
                    
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="program-card">
                                <div class="program-img" style="background-image: url('assets/img/primary.jpg');"></div>
                                <div class="card-body p-4">
                                    <h4>Program Sekolah Rendah</h4>
                                    <p>Untuk pelajar Tahun 1 hingga Tahun 6, memfokuskan kepada mata pelajaran teras seperti Bahasa Melayu, Bahasa Inggeris, Matematik dan Sains.</p>
                                    <router-link to="/program" class="btn btn-sm btn-outline-primary">Ketahui Lebih Lanjut</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="program-card">
                                <div class="program-img" style="background-image: url('assets/img/secondary.jpg');"></div>
                                <div class="card-body p-4">
                                    <h4>Program Sekolah Menengah</h4>
                                    <p>Untuk pelajar Tingkatan 1 hingga Tingkatan 5, memfokuskan kepada persiapan PT3 dan SPM dengan pendekatan pembelajaran komprehensif.</p>
                                    <router-link to="/program" class="btn btn-sm btn-outline-primary">Ketahui Lebih Lanjut</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="program-card">
                                <div class="program-img" style="background-image: url('assets/img/special.jpg');"></div>
                                <div class="card-body p-4">
                                    <h4>Program Intensif</h4>
                                    <p>Program khas untuk persediaan peperiksaan dalam tempoh singkat, dengan teknik menjawab soalan dan latihan intensif.</p>
                                    <router-link to="/program" class="btn btn-sm btn-outline-primary">Ketahui Lebih Lanjut</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Testimonials Section -->
            <section class="py-5">
                <div class="container">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold text-primary-custom">Testimoni Ibu Bapa & Pelajar</h2>
                        <p class="lead">Apa kata mereka tentang kami</p>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="testimonial-card">
                                <p class="mb-4">"Anak saya telah menunjukkan peningkatan yang ketara dalam prestasi akademiknya sejak menyertai Pusat Tuisyen Ikhwan. Guru-guru di sini sangat berdedikasi dan prihatin terhadap perkembangan pelajar."</p>
                                <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                        <h5 class="mb-0">Puan Faridah</h5>
                                        <p class="text-muted mb-0">Ibu kepada Amirah, Pelajar Tahun 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="testimonial-card">
                                <p class="mb-4">"Kaedah pengajaran di Pusat Tuisyen Ikhwan sangat berkesan. Guru-guru sentiasa membantu saya memahami topik-topik yang sukar dengan pendekatan yang mudah difahami. Saya sangat bersyukur memilih pusat tuisyen ini."</p>
                                <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                        <h5 class="mb-0">Ahmad Syafiq</h5>
                                        <p class="text-muted mb-0">Pelajar Tingkatan 5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    components: {
        'image-slider': ImageSlider
    }
};

// Component for the about page
const AboutPage = {
    template: `
        <div>
            <div class="bg-primary-custom text-white py-4 mb-5">
                <div class="container">
                    <h2 class="fw-bold">Tentang Kami</h2>
                </div>
            </div>
            
            <div class="container py-4">
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src="assets/img/about-us.jpg" alt="Tentang Pusat Tuisyen Ikhwan" class="img-fluid rounded shadow">
                    </div>
                    <div class="col-lg-6">
                        <h2 class="fw-bold text-primary-custom mb-4">Cerita Kami</h2>
                        <p>Pusat Tuisyen Ikhwan ditubuhkan pada tahun 2010 dengan tujuan menyediakan pendidikan berkualiti tinggi untuk pelajar di sekitar Kajang, Selangor. Bermula dengan hanya dua bilik darjah dan tiga orang guru, kami kini telah berkembang menjadi salah satu pusat tuisyen terkemuka di daerah ini.</p>
                        <p>Kami percaya bahawa setiap pelajar mempunyai potensi untuk cemerlang, dan misi kami adalah untuk membantu mereka mencapai potensi tersebut melalui pendekatan pengajaran yang disesuaikan dengan keperluan individu mereka.</p>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <h2 class="fw-bold text-primary-custom mb-4">Visi & Misi</h2>
                    </div>
                    <div class="col-md-6 mb-4 mb-md-0">
                        <div class="card h-100 shadow">
                            <div class="card-body p-4 text-center">
                                <i class="fas fa-eye text-primary-custom mb-3" style="font-size: 3rem;"></i>
                                <h3 class="fw-bold">Visi Kami</h3>
                                <p>Menjadi pusat tuisyen terkemuka yang diiktiraf untuk kecemerlangan akademik dan pembangunan pelajar secara holistik.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 shadow">
                            <div class="card-body p-4 text-center">
                                <i class="fas fa-bullseye text-primary-custom mb-3" style="font-size: 3rem;"></i>
                                <h3 class="fw-bold">Misi Kami</h3>
                                <p>Menyediakan persekitaran pembelajaran yang dinamik dan inovatif yang memupuk intelektual pelajar, kemahiran dan perkembangan moral.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12 text-center mb-4">
                        <h2 class="fw-bold text-primary-custom">Tenaga Pengajar Kami</h2>
                        <p class="lead">Guru-guru berpengalaman dan berkebolehan</p>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card h-100 shadow">
                            <img src="assets/img/teacher1.jpg" class="card-img-top" alt="Cikgu Zamri">
                            <div class="card-body text-center">
                                <h5 class="card-title">Cikgu Zamri</h5>
                                <p class="card-text text-muted">Pengetua & Guru Matematik</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card h-100 shadow">
                            <img src="assets/img/teacher2.jpg" class="card-img-top" alt="Cikgu Noraini">
                            <div class="card-body text-center">
                                <h5 class="card-title">Cikgu Noraini</h5>
                                <p class="card-text text-muted">Guru Bahasa Melayu</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card h-100 shadow">
                            <img src="assets/img/teacher3.jpg" class="card-img-top" alt="Cikgu Chong">
                            <div class="card-body text-center">
                                <h5 class="card-title">Cikgu Chong</h5>
                                <p class="card-text text-muted">Guru Sains</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card h-100 shadow">
                            <img src="assets/img/teacher4.jpg" class="card-img-top" alt="Cikgu Sarah">
                            <div class="card-body text-center">
                                <h5 class="card-title">Cikgu Sarah</h5>
                                <p class="card-text text-muted">Guru Bahasa Inggeris</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Component for the programs page
const ProgramsPage = {
    template: `
        <div>
            <div class="bg-primary-custom text-white py-4 mb-5">
                <div class="container">
                    <h2 class="fw-bold">Program Kami</h2>
                </div>
            </div>
            
            <div class="container py-4">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="fw-bold text-primary-custom mb-3">Program Pendidikan Berkualiti</h2>
                        <p class="lead">Kami menawarkan pelbagai program tuisyen yang direka untuk memenuhi keperluan pelajar dari pelbagai tahap pendidikan.</p>
                    </div>
                </div>
                
                <!-- Primary School Programs -->
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-body p-4">
                                <div class="row align-items-center">
                                    <div class="col-md-4 mb-4 mb-md-0">
                                        <img src="assets/img/primary-large.jpg" alt="Program Sekolah Rendah" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="fw-bold text-primary-custom mb-3">Program Sekolah Rendah (Tahun 1-6)</h3>
                                        <p>Program ini direka khas untuk pelajar sekolah rendah untuk membina asas yang kukuh dalam mata pelajaran teras. Kami memberi tumpuan kepada pembelajaran interaktif dan aktiviti yang menyeronokkan untuk menarik minat pelajar.</p>
                                        
                                        <h5 class="mt-4">Mata Pelajaran:</h5>
                                        <ul>
                                            <li>Bahasa Melayu</li>
                                            <li>Bahasa Inggeris</li>
                                            <li>Matematik</li>
                                            <li>Sains</li>
                                        </ul>
                                        
                                        <h5 class="mt-4">Jadual Kelas:</h5>
                                        <p>Isnin - Jumaat: 2 petang - 6 petang<br>Sabtu: 9 pagi - 1 petang</p>
                                        
                                        <a href="#" class="btn bg-secondary-custom text-white mt-3">Daftar Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Secondary School Programs -->
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-body p-4">
                                <div class="row align-items-center">
                                    <div class="col-md-4 mb-4 mb-md-0">
                                        <img src="assets/img/secondary-large.jpg" alt="Program Sekolah Menengah" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="fw-bold text-primary-custom mb-3">Program Sekolah Menengah (Tingkatan 1-5)</h3>
                                        <p>Program ini direka khas untuk membantu pelajar sekolah menengah menghadapi cabaran akademik yang semakin meningkat. Kami menawarkan kaedah pembelajaran komprehensif yang memfokuskan kepada pemahaman konsep dan teknik menjawab soalan peperiksaan.</p>
                                        
                                        <h5 class="mt-4">Mata Pelajaran:</h5>
                                        <ul>
                                            <li>Bahasa Melayu</li>
                                            <li>Bahasa Inggeris</li>
                                            <li>Matematik</li>
                                            <li>Matematik Tambahan</li>
                                            <li>Sains (Fizik, Kimia, Biologi)</li>
                                            <li>Sejarah</li>
                                            <li>Geografi</li>
                                        </ul>
                                        
                                        <h5 class="mt-4">Jadual Kelas:</h5>
                                        <p>Isnin - Jumaat: 4 petang - 8 malam<br>Sabtu & Ahad: 9 pagi - 4 petang</p>
                                        
                                        <a href="#" class="btn bg-secondary-custom text-white mt-3">Daftar Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Intensive Program -->
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-body p-4">
                                <div class="row align-items-center">
                                    <div class="col-md-4 mb-4 mb-md-0">
                                        <img src="assets/img/special-large.jpg" alt="Program Intensif" class="img-fluid rounded">
                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="fw-bold text-primary-custom mb-3">Program Intensif Peperiksaan</h3>
                                        <p>Program intensif ini direka khas untuk pelajar yang akan menghadapi peperiksaan UPSR, PT3, dan SPM. Program ini menawarkan latihan intensif, teknik menjawab soalan, dan ujian berkala untuk memastikan pelajar bersedia sepenuhnya untuk peperiksaan mereka.</p>
                                        
                                        <h5 class="mt-4">Ciri-ciri Program:</h5>
                                        <ul>
                                            <li>Kelas bersaiz kecil (maksimum 10 pelajar)</li>
                                            <li>Tenaga pengajar berpengalaman dalam peperiksaan awam</li>
                                            <li>Bahan rujukan eksklusif</li>
                                            <li>Latihan soalan tahun-tahun lepas</li>
                                            <li>Sesi konsultasi individu</li>
                                        </ul>
                                        
                                        <h5 class="mt-4">Tempoh Program:</h5>
                                        <p>3 bulan sebelum peperiksaan awam<br>Kelas dijalankan pada hujung minggu</p>
                                        
                                        <a href="#" class="btn bg-secondary-custom text-white mt-3">Daftar Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Fee Structure -->
                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-body p-4">
                                <h3 class="fw-bold text-primary-custom mb-4 text-center">Struktur Yuran</h3>
                                
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead class="bg-primary-custom text-white">
                                            <tr>
                                                <th>Program</th>
                                                <th>Yuran Bulanan</th>
                                                <th>Yuran Pendaftaran</th>
                                                <th>Bahan Pembelajaran</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sekolah Rendah (Tahun 1-3)</td>
                                                <td>RM120 / mata pelajaran</td>
                                                <td>RM50 (sekali sahaja)</td>
                                                <td>RM80 / tahun</td>
                                            </tr>
                                            <tr>
                                                <td>Sekolah Rendah (Tahun 4-6)</td>
                                                <td>RM150 / mata pelajaran</td>
                                                <td>RM50 (sekali sahaja)</td>
                                                <td>RM100 / tahun</td>
                                            </tr>
                                            <tr>
                                                <td>Sekolah Menengah (Tingkatan 1-3)</td>
                                                <td>RM180 / mata pelajaran</td>
                                                <td>RM80 (sekali sahaja)</td>
                                                <td>RM120 / tahun</td>
                                            </tr>
                                            <tr>
                                                <td>Sekolah Menengah (Tingkatan 4-5)</td>
                                                <td>RM200 / mata pelajaran</td>
                                                <td>RM80 (sekali sahaja)</td>
                                                <td>RM150 / tahun</td>
                                            </tr>
                                            <tr>
                                                <td>Program Intensif Peperiksaan</td>
                                                <td>RM1,200 (pakej 3 bulan)</td>
                                                <td>RM100 (sekali sahaja)</td>
                                                <td>Termasuk dalam pakej</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="alert alert-info mt-4">
                                    <p class="mb-0"><strong>Nota:</strong> Diskaun sebanyak 10% ditawarkan untuk pendaftaran melebihi 3 mata pelajaran. Diskaun sebanyak 5% ditawarkan untuk adik-beradik.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Component for the contact page
const ContactPage = {
    template: `
        <div>
            <div class="bg-primary-custom text-white py-4 mb-5">
                <div class="container">
                    <h2 class="fw-bold">Hubungi Kami</h2>
                </div>
            </div>
            
            <div class="container py-4">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center mb-5">
                        <h2 class="fw-bold text-primary-custom mb-3">Sila Hubungi Kami</h2>
                        <p class="lead">Kami sedia membantu anda dengan sebarang pertanyaan</p>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <div class="card shadow h-100">
                            <div class="card-body p-4">
                                <h3 class="text-primary-custom mb-4">Maklumat Hubungan</h3>
                                
                                <div class="d-flex mb-4">
                                    <div class="me-3">
                                        <i class="fas fa-map-marker-alt text-primary-custom" style="font-size: 1.5rem;"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">Alamat</h5>
                                        <p class="mb-0">Jalan Bunga Raya, Taman Ikhwan,<br>43000 Kajang, Selangor</p>
                                    </div>
                                </div>
                                
                                <div class="d-flex mb-4">
                                    <div class="me-3">
                                        <i class="fas fa-phone text-primary-custom" style="font-size: 1.5rem;"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">Telefon</h5>
                                        <p class="mb-0">03-8888 9999</p>
                                    </div>
                                </div>
                                
                                <div class="d-flex mb-4">
                                    <div class="me-3">
                                        <i class="fas fa-envelope text-primary-custom" style="font-size: 1.5rem;"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">Emel</h5>
                                        <p class="mb-0">info@ikhwan.edu.my</p>
                                    </div>
                                </div>
                                
                                <div class="d-flex">
                                    <div class="me-3">
                                        <i class="fas fa-clock text-primary-custom" style="font-size: 1.5rem;"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-1">Waktu Operasi</h5>
                                        <p class="mb-0">Isnin - Jumaat: 9 pagi - 9 malam<br>Sabtu & Ahad: 9 pagi - 5 petang</p>
                                    </div>
                                </div>
                                
                                <div class="mt-4">
                                    <h5 class="mb-3">Ikuti Kami</h5>
                                    <div class="social-icons">
                                        <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="me-2"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="card shadow h-100">
                            <div class="card-body p-4">
                                <h3 class="text-primary-custom mb-4">Hantar Pertanyaan</h3>
                                
                                <form @submit.prevent="submitForm">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Nama Penuh</label>
                                        <input type="text" class="form-control" id="name" v-model="contactForm.name" required>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Emel</label>
                                        <input type="email" class="form-control" id="email" v-model="contactForm.email" required>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">No. Telefon</label>
                                        <input type="tel" class="form-control" id="phone" v-model="contactForm.phone" required>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Subjek</label>
                                        <input type="text" class="form-control" id="subject" v-model="contactForm.subject" required>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Mesej</label>
                                        <textarea class="form-control" id="message" rows="5" v-model="contactForm.message" required></textarea>
                                    </div>
                                    
                                    <button type="submit" class="btn bg-primary-custom text-white">Hantar Mesej</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-body p-0">
                                <!-- Map placeholder - Replace with actual Google Maps embed in production -->
                                <div style="width: 100%; height: 400px; background-color: #e9ecef; display: flex; align-items: center; justify-content: center;">
                                    <div class="text-center">
                                        <i class="fas fa-map-marked-alt" style="font-size: 4rem; color: #1e88e5;"></i>
                                        <h4 class="mt-3">Peta Lokasi</h4>
                                        <p class="mb-0">Lokasi interaktif akan dipaparkan di sini.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            contactForm: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            formSubmitted: false
        }
    },
    methods: {
        submitForm() {
            // Demo submission handling
            alert('Terima kasih! Mesej anda telah dihantar. Kami akan menghubungi anda dalam masa terdekat.');
            this.formSubmitted = true;
            this.contactForm = {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            };
        }
    }
};

// Component for the login page
const LoginPage = {
    template: `
        <div class="container py-5">
            <div class="auth-container">
                <h2>Log Masuk</h2>
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Emel</label>
                        <input type="email" class="form-control" id="email" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Kata Laluan</label>
                        <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="remember">
                        <label class="form-check-label" for="remember">Ingat saya</label>
                    </div>
                    <button type="submit" class="btn bg-primary-custom text-white w-100">Log Masuk</button>
                </form>
                <div class="text-center mt-3">
                    <a href="#" @click.prevent="showRegister">Belum mempunyai akaun? Daftar sekarang</a>
                </div>
            </div>
            
            <div v-if="showRegisterForm" class="auth-container mt-4">
                <h2>Daftar Akaun</h2>
                <div v-if="registerError" class="alert alert-danger">{{ registerError }}</div>
                <div v-if="registerSuccess" class="alert alert-success">{{ registerSuccess }}</div>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="register-name" class="form-label">Nama Penuh</label>
                        <input type="text" class="form-control" id="register-name" v-model="registerForm.name" required>
                    </div>
                    <div class="mb-3">
                        <label for="register-email" class="form-label">Emel</label>
                        <input type="email" class="form-control" id="register-email" v-model="registerForm.email" required>
                    </div>
                    <div class="mb-3">
                        <label for="register-phone" class="form-label">No. Telefon</label>
                        <input type="tel" class="form-control" id="register-phone" v-model="registerForm.phone" required>
                    </div>
                    <div class="mb-3">
                        <label for="register-password" class="form-label">Kata Laluan</label>
                        <input type="password" class="form-control" id="register-password" v-model="registerForm.password" required>
                    </div>
                    <div class="mb-3">
                        <label for="register-confirm-password" class="form-label">Sahkan Kata Laluan</label>
                        <input type="password" class="form-control" id="register-confirm-password" v-model="registerForm.confirmPassword" required>
                    </div>
                    <button type="submit" class="btn bg-primary-custom text-white w-100">Daftar</button>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            email: '',
            password: '',
            error: '',
            showRegisterForm: false,
            registerForm: {
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            },
            registerError: '',
            registerSuccess: ''
        }
    },
    methods: {
        login() {
            // Demo login - in a real app, you would call an API
            if (this.email === 'demo@example.com' && this.password === 'password') {
                localStorage.setItem('user', JSON.stringify({
                    id: 1,
                    name: 'Demo User',
                    email: this.email,
                    role: 'student'
                }));
                this.$router.push('/dashboard');
            } else {
                this.error = 'Emel atau kata laluan tidak sah.';
            }
        },
        showRegister() {
            this.showRegisterForm = true;
        },
        register() {
            // Validate passwords match
            if (this.registerForm.password !== this.registerForm.confirmPassword) {
                this.registerError = 'Kata laluan tidak sepadan.';
                return;
            }
            
            // Demo registration - in a real app, you would call an API
            this.registerSuccess = 'Pendaftaran berjaya! Sila log masuk dengan akaun anda.';
            this.registerError = '';
            
            // Reset form
            this.registerForm = {
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            };
            
            // Hide register form after successful registration
            setTimeout(() => {
                this.showRegisterForm = false;
                this.registerSuccess = '';
            }, 3000);
        }
    }
};

// Component for the dashboard
const DashboardPage = {
    template: `
        <div class="container-fluid">
            <div class="row">
                <!-- Sidebar -->
                <div class="col-md-3 col-lg-2 dashboard-sidebar">
                    <h3 class="mb-4 ps-3">Dashboard</h3>
                    <ul class="sidebar-menu">
                        <li><a href="#" class="active"><i class="fas fa-home"></i> Utama</a></li>
                        <li><a href="#"><i class="fas fa-book"></i> Kelas Saya</a></li>
                        <li><a href="#"><i class="fas fa-calendar-alt"></i> Jadual</a></li>
                        <li><a href="#"><i class="fas fa-file-alt"></i> Tugasan</a></li>
                        <li><a href="#"><i class="fas fa-chart-line"></i> Prestasi</a></li>
                        <li><a href="#"><i class="fas fa-credit-card"></i> Pembayaran</a></li>
                        <li><a href="#"><i class="fas fa-user-cog"></i> Profil</a></li>
                    </ul>
                </div>
                
                <!-- Main content -->
                <div class="col-md-9 col-lg-10 dashboard-main">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h2>Selamat Datang, {{ user.name }}</h2>
                        <span class="badge bg-primary-custom">{{ user.role === 'student' ? 'Pelajar' : 'Guru' }}</span>
                    </div>
                    
                    <!-- Stats -->
                    <div class="row mb-4">
                        <div class="col-md-3 mb-3 mb-md-0">
                            <div class="dashboard-card stat-card">
                                <h3>Kelas</h3>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h2 class="mb-0">4</h2>
                                    <i class="fas fa-book text-primary-custom" style="font-size: 2rem;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3 mb-md-0">
                            <div class="dashboard-card stat-card">
                                <h3>Tugasan</h3>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h2 class="mb-0">7</h2>
                                    <i class="fas fa-tasks text-warning" style="font-size: 2rem;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3 mb-md-0">
                            <div class="dashboard-card stat-card">
                                <h3>Kehadiran</h3>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h2 class="mb-0">90%</h2>
                                    <i class="fas fa-calendar-check text-success" style="font-size: 2rem;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="dashboard-card stat-card">
                                <h3>Purata Markah</h3>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h2 class="mb-0">85</h2>
                                    <i class="fas fa-chart-line text-danger" style="font-size: 2rem;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Upcoming Classes -->
                    <div class="row mb-4">
                        <div class="col-12">
                            <div class="dashboard-card">
                                <h3 class="mb-4">Kelas Akan Datang</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Mata Pelajaran</th>
                                                <th>Tarikh</th>
                                                <th>Masa</th>
                                                <th>Guru</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Matematik</td>
                                                <td>10 Mei 2025</td>
                                                <td>2:00 PM - 4:00 PM</td>
                                                <td>Cikgu Zamri</td>
                                                <td><span class="badge bg-success">Dijadualkan</span></td>
                                            </tr>
                                            <tr>
                                                <td>Bahasa Inggeris</td>
                                                <td>11 Mei 2025</td>
                                                <td>10:00 AM - 12:00 PM</td>
                                                <td>Cikgu Sarah</td>
                                                <td><span class="badge bg-success">Dijadualkan</span></td>
                                            </tr>
                                            <tr>
                                                <td>Sains</td>
                                                <td>12 Mei 2025</td>
                                                <td>2:00 PM - 4:00 PM</td>
                                                <td>Cikgu Chong</td>
                                                <td><span class="badge bg-success">Dijadualkan</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <!-- Recent Assignments -->
                        <div class="col-md-6 mb-4 mb-md-0">
                            <div class="dashboard-card h-100">
                                <h3 class="mb-4">Tugasan Terbaru</h3>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 class="mb-1">Latihan Matematik - Bab 5</h6>
                                            <small class="text-muted">Tarikh Akhir: 12 Mei 2025</small>
                                        </div>
                                        <span class="badge bg-warning text-dark">Belum Siap</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 class="mb-1">Karangan Bahasa Melayu</h6>
                                            <small class="text-muted">Tarikh Akhir: 14 Mei 2025</small>
                                        </div>
                                        <span class="badge bg-warning text-dark">Belum Siap</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 class="mb-1">Kuiz Sains - Daya dan Gerakan</h6>
                                            <small class="text-muted">Tarikh Akhir: 8 Mei 2025</small>
                                        </div>
                                        <span class="badge bg-success">Siap</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 class="mb-1">Latihan Bahasa Inggeris</h6>
                                            <small class="text-muted">Tarikh Akhir: 7 Mei 2025</small>
                                        </div>
                                        <span class="badge bg-success">Siap</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- Announcements -->
                        <div class="col-md-6">
                            <div class="dashboard-card h-100">
                                <h3 class="mb-4">Pengumuman</h3>
                                <div class="alert alert-info">
                                    <h6 class="alert-heading">Penutupan Sempena Cuti Umum</h6>
                                    <p class="mb-0">Pusat Tuisyen Ikhwan akan ditutup pada 20 Mei 2025 sempena Hari Raya Aidilfitri. Kelas akan disambung pada 25 Mei 2025.</p>
                                    <small class="text-muted">9 Mei 2025</small>
                                </div>
                                <div class="alert alert-warning">
                                    <h6 class="alert-heading">Ujian Bulanan Mei</h6>
                                    <p class="mb-0">Ujian bulanan akan diadakan pada minggu ketiga bulan Mei. Sila pastikan anda bersedia.</p>
                                    <small class="text-muted">5 Mei 2025</small>
                                </div>
                                <div class="alert alert-success">
                                    <h6 class="alert-heading">Program Motivasi</h6>
                                    <p class="mb-0">Program motivasi untuk pelajar SPM akan diadakan pada 30 Mei 2025. Kehadiran adalah wajib.</p>
                                    <small class="text-muted">1 Mei 2025</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            user: {
                name: 'Demo User',
                role: 'student'
            }
        }
    },
    created() {
        // Get user from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            this.user = JSON.parse(storedUser);
        } else {
            // Redirect to login if not logged in
            this.$router.push('/login');
        }
    }
};

// Component for the 404 page
const NotFoundPage = {
    template: `
        <div class="container py-5 text-center">
            <h1 class="display-1 text-primary-custom">404</h1>
            <h2 class="mb-4">Halaman Tidak Dijumpai</h2>
            <p class="lead mb-4">Maaf, halaman yang anda cari tidak wujud.</p>
            <router-link to="/" class="btn bg-primary-custom text-white">Kembali ke Laman Utama</router-link>
        </div>
    `
};