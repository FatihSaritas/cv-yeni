'use client';

import Image from "next/image";
import CertificateItem from "./components/CertificateItem";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./context/LanguageContext";

const certificates = [
  {
    title: "Sıfırdan İleri Seviye Javascript",
    institution: "Udemy",
    date: "Şubat 2025",
    imageUrl: "/certificates/Sıfırdan-İleri-Seviye-JS.jpeg",
    pdfUrl: "/certificates/Sıfırdan-İleri-Seviye-JS.jpeg"
  },
  {
    title: "İleri Seviye NodeJs",
    institution: "Udemy",
    date: "Mart 2025",
    imageUrl: "/certificates/NodeJs.jpeg",
    pdfUrl: "/certificates/NodeJs.jpeg"
  },
  {
    title: "Sıfırdan İleri Seviye React",
    institution: "Udemy",
    date: "Ekim 2024",
    imageUrl: "/certificates/Sıfırdan-İleri-Seviye-React.jpeg",
    pdfUrl: "/certificates/Sıfırdan-İleri-Seviye-React.jpeg"
  },
  {
    title: "Admin Panelli React Projesi",
    institution: "Udemy",
    date: "Ekim 2024",
    imageUrl: "/certificates/Admin-Panelli-React.jpeg",
    pdfUrl: "/certificates/Admin-Panelli-React.jpeg"
  },
  {
    title: "HTML, CSS, JS ile E-Ticaret Sitesi",
    institution: "Udemy",
    date: "Ağustos 2024",
    imageUrl: "/certificates/HTML-CSS-JS-E-ticaret-Sitesi.jpeg",
    pdfUrl: "/certificates/HTML-CSS-JS-E-ticaret-Sitesi.jpeg"
  },
  {
    title: "Beginner Frontend Web",
    institution: "Patika",
    date: "Haziran 2024",
    imageUrl: "/certificates/Beginner-frontend-Patika.jpeg",
    pdfUrl: "/certificates/Beginner-frontend-Patika.jpeg"
  },
  {
    title: "CSS Temelleri",
    institution: "BTK Akademi",
    date: "Mayıs 2024",
    imageUrl: "/certificates/Css-Temelleri.jpeg",
    pdfUrl: "/certificates/Css-Temelleri.jpeg"
  },
  {
    title: "HTML5 ve CSS",
    institution: "BTK Akademi",
    date: "Nisan 2024",
    imageUrl: "/certificates/HTML5-CSS.jpeg",
    pdfUrl: "/certificates/HTML5-CSS.jpeg"
  },
  {
    title: "HTML5 ile Web Geliştirme",
    institution: "BTK Akademi",
    date: "Nisan 2024",
    imageUrl: "/certificates/HTML5-Web.jpeg",
    pdfUrl: "/certificates/HTML5-Web.jpeg"
  },
  {
    title: "Javascript Temelleri",
    institution: "BTK Akademi",
    date: "Nisan 2024",
    imageUrl: "/certificates/Javascript-Temelleri.png",
    pdfUrl: "/certificates/Javascript-Temelleri.png"
  },
  {
    title: "Uygulamalarla SQL Öğreniyorum",
    institution: "BTK Akademi",
    date: "Ocak 2024",
    imageUrl: "/certificates/Uygulamalarla-Sql.jpeg",
    pdfUrl: "/certificates/Uygulamalarla-Sql.jpeg"
  },
  {
    title: "Sıfırdan İleri Seviye Python",
    institution: "BTK Akademi",
    date: "Ocak 2024",
    imageUrl: "/certificates/Sifirdan-İleri-Python.png",
    pdfUrl: "/certificates/Sifirdan-İleri-Python.png"
  },
  {
    title: "Django İle Web Tabanlı Uygulamalar",
    institution: "BTK Akademi",
    date: "Şubat 2023",
    imageUrl: "/certificates/Django-İle-Web.jpeg",
    pdfUrl: "/certificates/Django-İle-Web.jpeg"
  }
];

export default function Home() {
  const { translations } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <LanguageToggle />
      
      {/* Header Section */}
      <header className="text-center mb-12">
        <div className="relative w-100 h-100 mx-auto mb-4">
          <Image
            src="/fatihprofil.jpeg"
            alt="Profil Fotoğrafı"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">{translations.header.title}</h1>
        <p className="text-xl text-gray-400">{translations.header.role}</p>
      </header>

      {/* About Section */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-red-600">{translations.about.title}</h2>
        <p className="text-gray-700">
          {translations.about.content}
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-red-600">{translations.experience.title}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-red-600">{translations.experience.amata.title}</h3>
            <br />
            <p className="text-gray-600">{translations.experience.amata.role} • {translations.experience.amata.date}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {translations.experience.amata.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
              <br />
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">{translations.experience.tiktak.title}</h3>
            <br />
            <p className="text-gray-600">{translations.experience.tiktak.role} • {translations.experience.tiktak.date}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {translations.experience.tiktak.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">{translations.experience.zara.title}</h3>
            <br />
            <p className="text-gray-600">{translations.experience.zara.role} • {translations.experience.zara.date}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {translations.experience.zara.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      

      {/* Skills Section */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-red-600">{translations.skills.title}</h2>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', "Python", "MsSQL", "Django İle Web Geliştirme", "HTML-CSS", "CSS 3", "Web Yazılım", "Jquery", "Web Hizmetleri API", "Microsoft Word", "Veri Tabanı Sistemleri", "Nesneye Yönelik Programlama", "BootStrap", "SqLite", "Azure", "Web Arayüz Geliştirme", "Docker", "MongoDB", "MySqL", "HTML5", "Bootsrap 4", "Next.js", "Tailwind CSS", "Veritabanı Analizi", "Vuejs", "Git"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      {/* Certificates Section */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-red-600">{translations.certificates.title}</h2>
        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-6 px-2">
              {certificates.map((cert, index) => (
                <div key={index} className="flex-none w-[320px]">
                  <CertificateItem
                    title={cert.title}
                    institution={cert.institution}
                    date={cert.date}
                    imageUrl={cert.imageUrl}
                    pdfUrl={cert.pdfUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-1 text-red-600">{translations.education.title}</h2>
        <div>
          <h3 className="text-xl font-semibold text-red-600">{translations.education.sisli.school}</h3>
          <p className="text-gray-600">{translations.education.sisli.date}</p>
          <p className="text-gray-600">{translations.education.sisli.faculty}</p>
          <p className="text-gray-600">{translations.education.sisli.department}</p>
        </div>
      </section>
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-1 text-red-600">{translations.education.title}</h2>
        <div>
          <h3 className="text-xl font-semibold text-red-600">{translations.education.anadolu.school}</h3>
          <p className="text-gray-600">{translations.education.anadolu.date}</p>
          <p className="text-gray-600">{translations.education.anadolu.faculty}</p>
          <p className="text-gray-600">{translations.education.anadolu.department}</p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-red-600">{translations.contact.title}</h2>
        <div className="space-y-2">
          <p className="text-gray-700">📧 fatihq1810@gmail.com</p>
          <p className="text-gray-700">🔗 LinkedIn: www.linkedin.com/in/fatih-sarıtaş-b93306287 </p>
          <p className="text-gray-700">💻 GitHub: https://github.com/FatihSaritas </p>
        </div>
      </section>
    </div>
  );
}


