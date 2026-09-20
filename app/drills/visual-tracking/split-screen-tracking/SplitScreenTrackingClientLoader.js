'use client';

import dynamic from 'next/dynamic';

export default dynamic(() => import('./SplitScreenTrackingClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video min-h-[460px] md:min-h-[500px] max-h-[88vh] max-md:aspect-[3/4] max-md:min-h-[420px] max-md:max-h-[76vh] bg-[#080811] rounded-2xl border border-white/10 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
    </div>
  ),
});
