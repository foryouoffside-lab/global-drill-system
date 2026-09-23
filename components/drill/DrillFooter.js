'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '@/lib/i18n/useTranslation';

const FOOTER_COPY = {
  en: 'Found a bug or have feedback? Message us on social with the drill name — we read every one.',
  pt: 'Encontrou um erro ou quer enviar feedback? Fale conosco nas redes sociais e informe o nome do treino — lemos todas as mensagens.',
  es: '¿Encontraste un error o quieres enviar comentarios? Escríbenos en redes sociales con el nombre del ejercicio; leemos todos los mensajes.',
  ja: '不具合やご意見がありましたら、ドリル名を添えてSNSからお知らせください。すべて確認しています。',
  de: 'Einen Fehler gefunden oder Feedback? Schreib uns über die sozialen Netzwerke mit dem Namen des Drills — wir lesen jede Nachricht.',
  ko: '오류를 발견했거나 의견이 있나요? 훈련 이름과 함께 소셜 채널로 알려 주세요. 모든 메시지를 확인합니다.',
  fr: 'Un bug ou une remarque ? Écrivez-nous sur les réseaux avec le nom de l’exercice — nous lisons chaque message.',
};

export default function DrillFooter() {
  const { locale } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [footerRoot, setFooterRoot] = useState(null);

  useEffect(() => {
    setFooterRoot(document.getElementById('drill-footer-root'));
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/skilldrills.online/?__pwa=1',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61590093843779',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@skilldrills.online',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'X',
      url: 'https://x.com/skilldrillss',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const footer = (
    <footer className="mt-12 py-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-center text-sm text-gray-400">
      <p className="text-xs text-gray-500 max-w-md px-4">
        {FOOTER_COPY[locale] || FOOTER_COPY.en}
      </p>
      <div className="flex items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/5"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} SkillDrills. All rights reserved.
      </p>
    </footer>
  );

  if (!mounted || !footerRoot) return null;
  return createPortal(footer, footerRoot);
}
