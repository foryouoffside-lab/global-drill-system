'use client';

import dynamic from 'next/dynamic';

const ConcentrationGridClient = dynamic(() => import('./ConcentrationGridClient'), {
  ssr: true,
  loading: () => (
    <div className="w-full max-w-4xl mx-auto aspect-[16/10] bg-[#080811] rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
      <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
    </div>
  ),
});

export default ConcentrationGridClient;
