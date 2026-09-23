'use client';

// Shared row for a drill's "Instructions & Scoring System" accordion.
// Extracted from the light-reaction reference implementation.
export default function DrillRuleItem({ num, text, highlight = '', result, title, detail }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 bg-black px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/10 shadow-sm font-sans min-w-0">
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs sm:text-sm font-black shadow flex-shrink-0">{num}</div>
      <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
        <p className="text-xs sm:text-sm font-medium text-gray-200 font-sans truncate">
          {title ? (
            <>
              <span className="font-black font-sans text-white">{title}</span>
              {detail && <span className="text-gray-300"> — {detail}</span>}
            </>
          ) : (
            <>{text}{highlight && <span className="font-black font-sans text-white"> {highlight}</span>}</>
          )}
        </p>
        {result && (
          <div className="text-[11px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#050811] border border-white/10 text-white whitespace-nowrap shadow-inner tracking-wide flex-shrink-0">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
