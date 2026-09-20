'use client';

import dynamic from 'next/dynamic';

export default dynamic(() => import('./ConcentrationStaminaClient'), {
  ssr: true,
  loading: () => (
    <div className="w-full rounded-2xl aspect-video min-h-[460px] md:min-h-[500px] max-h-[88vh] max-md:aspect-[3/4] max-md:min-h-[420px] max-md:max-h-[76vh] bg-[#080811] border border-white/10 flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading Attention Span Test...</span>
    </div>
  ),
});
