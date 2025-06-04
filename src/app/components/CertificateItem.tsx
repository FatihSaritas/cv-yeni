'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

interface CertificateItemProps {
  title: string;
  institution: string;
  date: string;
  imageUrl: string;
  pdfUrl: string;
}

export default function CertificateItem({ title, institution, date, imageUrl, pdfUrl }: CertificateItemProps) {
  const { translations } = useLanguage();
  
  return (
    <div className="certificate-item h-[400px] flex flex-col bg-white p-4 rounded-lg">
      <div className="min-h-[80px]">
        <h3 className="text-lg font-semibold text-red-600 mb-2 line-clamp-2 h-[56px]">{title}</h3>
        <p className="text-gray-600 text-sm">{institution} • {date}</p>
      </div>
      <div className="flex-grow flex flex-col justify-between mt-4">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} Sertifikası`}
            fill
            sizes="(max-width: 350px) 100vw, 350px"
            className="object-contain rounded-lg shadow-sm"
            priority
          />
        </div>
        <a 
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded text-center hover:bg-red-700 transition-colors"
        >
          {translations.certificates.viewButton}
        </a>
      </div>
    </div>
  );
} 