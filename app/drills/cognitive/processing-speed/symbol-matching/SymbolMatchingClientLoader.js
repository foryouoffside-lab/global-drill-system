'use client';

import dynamic from 'next/dynamic';

export default dynamic(() => import('./SymbolMatchingClient'), {
  ssr: true,
  loading: () => (
    <div className="w-full max-w-4xl mx-auto my-4 sm:my-6 rounded-2xl bg-[#080811] border border-white/10 flex items-center justify-center aspect-[4/3] sm:aspect-[16/9] min-h-[400px]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin" />
        <span className="text-xs font-mono tracking-widest uppercase text-gray-500">
          Loading Drill...
        </span>
      </div>
    </div>
  ),
});
