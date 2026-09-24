export const translations = {
    en: {
        navbar: {
            about: "About",
            experience: "Experience",
            education: "Education",
            research: "Research",
            projects: "Projects",
            publications: "Publications",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I'm",
            title: "MSc Student in Computer Engineering at",
            university: "Istanbul Technical University (İTÜ)",
            bio: "M.Sc. student in Computer Engineering specializing in Bioinformatics. Focused on utilizing experience in system design/development and database management to create innovative solutions in metabolomic data analysis and computational biology.",
            cta_contact: "Get in Touch",
            cta_projects: "View Projects",
            cta_cv: "Download CV",
        },
        experience: {
            title: "Technical Experience",
            items: [
                {
                    role: "Graduate Researcher & Teaching Assistant (Turkcell Scholar)",
                    company: "Istanbul Technical University (İTÜ)",
                    date: "Feb 2026 - Present",
                    description: [
                        "Conducting academic research on bioinformatics and metabolic network analysis under the supervision of Assoc. Prof. Ali Çakmak.",
                        "Assisting undergraduate Computer Engineering courses and laboratory sessions, and supporting grading processes."
                    ]
                },
                {
                    role: "Graduate Student Researcher",
                    company: "TÜBİTAK",
                    date: "Sep 2025 - Feb 2026",
                    description: [
                        "Participated in the project 'Micro(RNA)-Based and Computational Approaches in the Diagnosis, Prognosis, and Treatment of Alzheimer's and Dementia'."
                    ]
                },
                {
                    role: "Intern",
                    company: "COMSIS Bilgisayar Ltd. Şti.",
                    date: "Jul 2025 - Aug 2025",
                    description: []
                },
                {
                    role: "Intern",
                    company: "Haroon Technology",
                    date: "Mar 2025 - May 2025",
                    description: []
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    year: "Sep 2025 - Present",
                    degree: "M.Sc. in Computer Engineering",
                    university: "Istanbul Technical University (İTÜ)",
                    description: "Specializing in Bioinformatics and Computational Biology. GPA: 3.67"
                },
                {
                    year: "Sep 2021 - Aug 2025",
                    degree: "B.Sc. in Computer Engineering",
                    university: "Namık Kemal University",
                    description: "GPA: 3.26"
                },
                {
                    year: "Sep 2021 - Jun 2024",
                    degree: "B.Sc. in Management Information Systems",
                    university: "Anadolu University (Distance Education)",
                    description: "GPA: 3.25"
                }
            ],
            honors: [
                "ALES Score: 91.54 / 100 (2021)",
                "YÖKDİL Score: 91.25 / 100 (2023)"
            ]
        },
        research: {
            title: "Research Interests & Skills",
            interests: [
                {
                    title: "Bioinformatics & Computational Biology",
                    description: "Focusing on Alzheimer's and Dementia diagnosis using (Micro)RNA-based computational approaches and algorithms."
                },
                {
                    title: "Metabolomic Data Analysis",
                    description: "Applying machine learning (Scikit-learn, COBRApy) and data processing techniques (Pandas, NumPy) to analyze complex biological datasets."
                },
                {
                    title: "Computational Data Science",
                    description: "Leveraging strong database and programming fundamentals (Python, SQL) for scalable and efficient biological data processing."
                }
            ]
        },
        projects: {
            title: "Projects",
            awards_title: "Conferences & Workshops",
            items: [
                {
                    category: "Research & High-Performance Computing (HPC)",
                    title: "Metabolomics Data Imputation & ML Pipeline",
                    tech: "Python, PyTorch, VAEs, Scikit-learn",
                    description: "Developed deep learning models (including VAEs) for combining and imputing heterogeneous metabolomics datasets. Managed end-to-end experiment pipelines, status tracking, and automated notifications."
                },
                {
                    category: "Research & High-Performance Computing (HPC)",
                    title: "HPC Cluster Management",
                    tech: "TRUBA, İTÜ UHEM, SLURM, A100/V100 GPUs",
                    description: "Actively utilized national HPC clusters. Wrote SLURM job scripts, managed PyTorch/CUDA version compatibilities, and executed large-scale training jobs on A100/V100 GPUs."
                },
                {
                    category: "Cloud Infrastructure & Self-Hosted Deployments",
                    title: "Production Server Architecture (malierdogan.com)",
                    tech: "Ubuntu, Docker Compose",
                    description: "Migrated and actively maintain all personal and utility web applications on a self-hosted local server infrastructure."
                },
                {
                    category: "Cloud Infrastructure & Self-Hosted Deployments",
                    title: "DevOps & Networking",
                    tech: "Nginx, Certbot, Cloudflare Tunnels, Tailscale",
                    description: "Architected a multi-service containerized environment. Managed network routing and security using an Nginx reverse proxy, automated SSL (Certbot), Cloudflare Tunnels, and Tailscale."
                },
                {
                    category: "Cloud Infrastructure & Self-Hosted Deployments",
                    title: "Database & Monitoring",
                    tech: "PostgreSQL, MongoDB, Glances",
                    description: "Deployed and maintained remote PostgreSQL and MongoDB instances, with real-time system resource monitoring via Glances."
                },
                {
                    category: "Full-Stack Web Development",
                    title: "Customized AI Chatbot (UN.GPT & kuran.stackia)",
                    tech: "React, Next.js, AWS, MySQL, OpenAI API",
                    description: "Designed and developed an end-to-end AI chatbot and web interface utilizing the OpenAI API, operating within a restricted knowledge base."
                },
                {
                    category: "Full-Stack Web Development",
                    title: "Self-Hosted Utility Applications",
                    tech: "React, FastAPI, PostgreSQL, Next.js, MongoDB, JWT",
                    description: "Developed and deployed various web utilities demonstrating diverse tech stacks, including an API-driven data synchronization platform and an interactive matchmaking engine with JWT authentication."
                },
                {
                    category: "Mobile Application Development",
                    title: "Terat - Match Organization Platform",
                    tech: "Flutter, Dart, Firebase",
                    description: "Built a comprehensive mobile application utilizing a real-time database that allows users to form teams and organize matches."
                }
            ],
            awards: [
                {
                    title: "ACM BCB 2026",
                    event: "ACM International Conference on Bioinformatics, Computational Biology, and Health Informatics",
                    year: "2026"
                },
                {
                    title: "HIBIT / RSG 2025",
                    event: "18th International Symposium on Health Informatics and Bioinformatics - Best Presentation Award",
                    year: "2025"
                },
                {
                    title: "TUSEB İzmir Genome Workshop",
                    event: "Dokuz Eylül University",
                    year: "2025"
                }
            ]
        },
        publications: {
            title: "Publications",
            items: [
                {
                    type: "Refereed Journal Publication",
                    authors: "Erdoğan, M. A., & Çakmak, A.",
                    title: "A High-Dimensional Benchmark of Objective Functions and Biological Resolutions for Personalized Metabolic Phenotyping.",
                    venue: "Briefings in Bioinformatics (in press)",
                    year: "2026",
                    doi: "10.1093/bib/bbag528",
                    doiUrl: "https://doi.org/10.1093/bib/bbag528"
                },
                {
                    type: "Refereed Journal Publication",
                    authors: "Çelik, S., Can, B., Erdoğan, M. A., & Çakmak, A.",
                    title: "A Deep Learning Architecture for Combining and Imputing Heterogeneous Metabolomics Datasets.",
                    venue: "BMC Bioinformatics",
                    year: "2026",
                    doi: "10.1186/s12859-026-06560-7",
                    doiUrl: "https://doi.org/10.1186/s12859-026-06560-7"
                },
                {
                    type: "Refereed Conference Publication",
                    authors: "Şahin, A., Erdoğan, M. A., Kaya, U. S., & Çakmak, A.",
                    title: "MetabOmics: Metabolism-Oriented Omics Data Integration.",
                    venue: "ACM BCB - International Conference on Bioinformatics, Computational Biology, and Health Informatics, Rende, Italy",
                    year: "2026",
                    doi: "10.1145/3807503.3819462",
                    doiUrl: "https://doi.org/10.1145/3807503.3819462"
                },
                {
                    type: "Refereed Abstract & Oral Presentation",
                    authors: "Yiğit, E., Çakmak, A., & Erdoğan, M. A.",
                    title: "Benchmarking Metabolic Network-based Biomarker Discovery Methods.",
                    venue: "Acıbadem University Journal of Health Sciences, Vol. 17 (Suppl. 1), Oral Presentations (to appear)",
                    year: "2026",
                    doi: "",
                    doiUrl: ""
                }
            ]
        },
        contact: {
            title: "Get in Touch",
            email_label: "Email:",
            location_label: "Location:",
            form_name: "Name",
            form_name_placeholder: "Your Name",
            form_email: "Email",
            form_email_placeholder: "your@email.com",
            form_message: "Message",
            form_message_placeholder: "Your message...",
            form_button: "Send Message",
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    tr: {
        navbar: {
            about: "Hakkımda",
            experience: "Deneyim",
            education: "Eğitim",
            research: "Araştırma",
            projects: "Projeler",
            publications: "Yayınlar",
            contact: "İletişim",
        },
        hero: {
            greeting: "Merhaba, Ben",
            title: "Bilgisayar Mühendisliği Yüksek Lisans Öğrencisi,",
            university: "İstanbul Teknik Üniversitesi (İTÜ)",
            bio: "Biyoinformatik alanında uzmanlaşan Bilgisayar Mühendisliği Yüksek Lisans öğrencisi. Sistem tasarımı/geliştirme ve veritabanı yönetimi konularındaki deneyimlerini, metabolomik veri analizi ve hesaplamalı biyoloji alanlarında yenilikçi çözümler üretmek için kullanmaya odaklanmaktadır.",
            cta_contact: "İletişime Geç",
            cta_projects: "Projeleri İncele",
            cta_cv: "CV İndir",
        },
        experience: {
            title: "Teknik Deneyim",
            items: [
                {
                    role: "Araştırmacı ve Öğretim Asistanı (Turkcell Bursiyeri)",
                    company: "İstanbul Teknik Üniversitesi (İTÜ)",
                    date: "Şubat 2026 - Devam Ediyor",
                    description: [
                        "Doç. Dr. Ali Çakmak danışmanlığında biyoinformatik ve metabolik ağ analizi üzerine akademik araştırmalar yürütülmektedir.",
                        "Bilgisayar Mühendisliği lisans dersleri ve laboratuvar uygulamalarında öğretim asistanlığı yapılmakta, ödev ve proje değerlendirme süreçlerine destek verilmektedir."
                    ]
                },
                {
                    role: "Yüksek Lisans Proje Araştırmacısı",
                    company: "TÜBİTAK",
                    date: "Eylül 2025 - Şubat 2026",
                    description: [
                        "\"Alzheimer ve Demans Tanısı, Prognozu ve Tedavisinde (Mikro)RNA-Tabanlı ve Hesaplamalı Yaklaşımlar\" projesinde görev alındı."
                    ]
                },
                {
                    role: "Stajyer",
                    company: "COMSIS Bilgisayar Ltd. Şti.",
                    date: "Temmuz 2025 - Ağustos 2025",
                    description: []
                },
                {
                    role: "Stajyer",
                    company: "Haroon Technology",
                    date: "Mart 2025 - Mayıs 2025",
                    description: []
                }
            ]
        },
        education: {
            title: "Eğitim",
            items: [
                {
                    year: "Eylül 2025 - Devam Ediyor",
                    degree: "Bilgisayar Mühendisliği Yüksek Lisans Programı",
                    university: "İstanbul Teknik Üniversitesi",
                    description: "Biyoinformatik ve Hesaplamalı Biyoloji üzerine uzmanlaşma. GPA: 3.67"
                },
                {
                    year: "Eylül 2021 - Ağustos 2025",
                    degree: "Bilgisayar Mühendisliği Lisans Programı",
                    university: "Namık Kemal Üniversitesi",
                    description: "GPA: 3.26"
                },
                {
                    year: "Eylül 2021 - Haziran 2024",
                    degree: "Yönetim Bilişim Sistemleri Lisans Programı",
                    university: "Anadolu Üniversitesi (Uzaktan Eğitim)",
                    description: "GPA: 3.25"
                }
            ],
            honors: [
                "2021 yılında ALES sınavında 91.54 / 100 puan alındı.",
                "2023 yılında YÖKDİL sınavında 91.25 / 100 puan alındı."
            ]
        },
        research: {
            title: "Araştırma İlgi Alanları & Beceriler",
            interests: [
                {
                    title: "Biyoinformatik & Hesaplamalı Biyoloji",
                    description: "Alzheimer ve Demans tanısı için (Mikro)RNA tabanlı hesaplamalı yaklaşımlar ve algoritmalar geliştirmeye odaklanıyorum."
                },
                {
                    title: "Metabolomik Veri Analizi",
                    description: "Karmaşık biyolojik veri setlerini analiz etmek amacıyla Makine Öğrenimi (Scikit-learn, COBRApy) ve veri işleme (Pandas, NumPy) tekniklerini uyguluyorum."
                },
                {
                    title: "Hesaplamalı Bilimler & Veri Analizi",
                    description: "Biyolojik verilerin analizinde güçlü veritabanı ve programlama (Python, SQL) temellerinden faydalanarak yenilikçi çözümler üretiyorum."
                }
            ]
        },
        projects: {
            title: "Projeler",
            awards_title: "Konferans ve Çalıştaylar",
            items: [
                {
                    category: "Araştırma & Yüksek Performanslı Hesaplama (HPC)",
                    title: "Metabolomik Veri Tamamlama (Imputation) & ML İş Akışı",
                    tech: "Python, PyTorch, VAE, Scikit-learn",
                    description: "Heterojen metabolomik veri setlerini birleştirmek ve tamamlamak için derin öğrenme modelleri (VAE'ler dahil) geliştirildi. Uçtan uca deney iş akışları, durum takibi ve otomatik bildirim süreçleri yönetildi."
                },
                {
                    category: "Araştırma & Yüksek Performanslı Hesaplama (HPC)",
                    title: "HPC Küme Yönetimi",
                    tech: "TRUBA, İTÜ UHEM, SLURM, A100/V100 GPU",
                    description: "Ulusal HPC kümeleri aktif olarak kullanıldı. SLURM iş betikleri yazıldı, PyTorch/CUDA sürüm uyumlulukları yönetildi ve A100/V100 GPU'lar üzerinde büyük ölçekli eğitim işleri yürütüldü."
                },
                {
                    category: "Bulut Altyapısı & Bireysel Sunucu (Self-Hosted) Dağıtımları",
                    title: "Üretim Ortamı Sunucu Mimarisi (malierdogan.com)",
                    tech: "Ubuntu, Docker Compose",
                    description: "Tüm kişisel ve yardımcı web uygulamaları, bireysel olarak barındırılan (self-hosted) yerel sunucu altyapısına taşındı ve aktif olarak yönetilmektedir."
                },
                {
                    category: "Bulut Altyapısı & Bireysel Sunucu (Self-Hosted) Dağıtımları",
                    title: "DevOps & Ağ Yönetimi",
                    tech: "Nginx, Certbot, Cloudflare Tunnels, Tailscale",
                    description: "Çok servisli bir konteyner mimarisi tasarlandı. Nginx reverse proxy, otomatik SSL (Certbot), Cloudflare Tunnels ve Tailscale kullanılarak ağ yönlendirmesi ve güvenliği sağlandı."
                },
                {
                    category: "Bulut Altyapısı & Bireysel Sunucu (Self-Hosted) Dağıtımları",
                    title: "Veritabanı & İzleme",
                    tech: "PostgreSQL, MongoDB, Glances",
                    description: "Uzak PostgreSQL ve MongoDB veritabanları kuruldu ve bakımları yapıldı; Glances aracılığıyla gerçek zamanlı sistem kaynak izleme entegre edildi."
                },
                {
                    category: "Full-Stack Web Geliştirme",
                    title: "Özelleştirilmiş AI Chatbot (UN.GPT & kuran.stackia)",
                    tech: "React, Next.js, AWS, MySQL, OpenAI API",
                    description: "Sınırlandırılmış bir bilgi tabanı içerisinde çalışan, OpenAI API tabanlı uçtan uca bir yapay zeka sohbet botu ve web arayüzü tasarlandı ve geliştirildi."
                },
                {
                    category: "Full-Stack Web Geliştirme",
                    title: "Bireysel Barındırılan (Self-Hosted) Yardımcı Uygulamalar",
                    tech: "React, FastAPI, PostgreSQL, Next.js, MongoDB, JWT",
                    description: "Farklı teknoloji yığınlarını sergileyen çeşitli web araçları geliştirildi ve yayına alındı; API odaklı bir veri senkronizasyon platformu ve JWT kimlik doğrulamalı interaktif bir eşleştirme motoru bunlar arasındadır."
                },
                {
                    category: "Mobil Uygulama Geliştirme",
                    title: "Terat - Maç Organizasyon Platformu",
                    tech: "Flutter, Dart, Firebase",
                    description: "Kullanıcıların takım kurup maç organize etmelerini sağlayan, gerçek zamanlı veritabanı kullanan kapsamlı bir mobil uygulama geliştirildi."
                }
            ],
            awards: [
                {
                    title: "ACM BCB 2026",
                    event: "ACM Uluslararası Biyoinformatik, Hesaplamalı Biyoloji ve Sağlık Bilişimi Konferansı",
                    year: "2026"
                },
                {
                    title: "HIBIT / RSG 2025",
                    event: "18. Uluslararası Sağlık Bilişimi ve Biyoinformatik Sempozyumu - En İyi Sunum Ödülü",
                    year: "2025"
                },
                {
                    title: "TUSEB İzmir Genom Çalıştayı",
                    event: "Dokuz Eylül Üniversitesi",
                    year: "2025"
                }
            ]
        },
        publications: {
            title: "Akademik Yayınlar",
            items: [
                {
                    type: "Hakemli Dergi Yayını",
                    authors: "Erdoğan, M. A. ve Çakmak, A.",
                    title: "A High-Dimensional Benchmark of Objective Functions and Biological Resolutions for Personalized Metabolic Phenotyping.",
                    venue: "Briefings in Bioinformatics (basım aşamasında)",
                    year: "2026",
                    doi: "10.1093/bib/bbag528",
                    doiUrl: "https://doi.org/10.1093/bib/bbag528"
                },
                {
                    type: "Hakemli Dergi Yayını",
                    authors: "Çelik, S., Can, B., Erdoğan, M. A. ve Çakmak, A.",
                    title: "A Deep Learning Architecture for Combining and Imputing Heterogeneous Metabolomics Datasets.",
                    venue: "BMC Bioinformatics",
                    year: "2026",
                    doi: "10.1186/s12859-026-06560-7",
                    doiUrl: "https://doi.org/10.1186/s12859-026-06560-7"
                },
                {
                    type: "Hakemli Konferans Bildirisi",
                    authors: "Şahin, A., Erdoğan, M. A., Kaya, U. S. ve Çakmak, A.",
                    title: "MetabOmics: Metabolism-Oriented Omics Data Integration.",
                    venue: "ACM BCB - Uluslararası Biyoinformatik, Hesaplamalı Biyoloji ve Sağlık Bilişimi Konferansı, Rende, İtalya",
                    year: "2026",
                    doi: "10.1145/3807503.3819462",
                    doiUrl: "https://doi.org/10.1145/3807503.3819462"
                },
                {
                    type: "Hakemli Özet ve Sözlü Sunum",
                    authors: "Yiğit, E., Çakmak, A. ve Erdoğan, M. A.",
                    title: "Benchmarking Metabolic Network-based Biomarker Discovery Methods.",
                    venue: "Acıbadem Üniversitesi Sağlık Bilimleri Dergisi, Cilt 17 (Ek 1), Sözlü Sunumlar (basım aşamasında)",
                    year: "2026",
                    doi: "",
                    doiUrl: ""
                }
            ]
        },
        contact: {
            title: "İletişime Geç",
            email_label: "E-posta:",
            location_label: "Konum:",
            form_name: "İsim Soyisim",
            form_name_placeholder: "Adınız Soyadınız",
            form_email: "E-posta",
            form_email_placeholder: "ornek@email.com",
            form_message: "Mesaj",
            form_message_placeholder: "Mesajınız...",
            form_button: "Gönder",
        },
        footer: {
            rights: "Tüm hakları saklıdır."
        }
    }
};
