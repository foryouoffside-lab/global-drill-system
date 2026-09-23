'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ChevronRight, Target, X } from 'lucide-react';
import { searchDrills } from '@/lib/searchDrills';
import { DRILLS } from '@/lib/drillsRegistry';
import { getDrillTagline } from '@/lib/drillCatalog';
import SiteFooter from '@/components/SiteFooter';

// useSearchParams() opts its whole subtree out of static rendering, so when it
// sat at the top of the page the prerendered HTML was nothing but the loading
// spinner -- no heading, no input, no drill list, until JS hydrated. Isolating
// it here keeps the entire page static and lets ?q= arrive a moment later.
function QueryParamSync({ onQuery }) {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  useEffect(() => {
    if (q) onQuery(q);
  }, [q, onQuery]);
  return null;
}

function SearchResultsContent() {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const results = useMemo(() => {
    const matched = query.trim() ? searchDrills(query) : DRILLS;
    return categoryFilter === 'all'
      ? matched
      : matched.filter((drill) => drill.category === categoryFilter);
  }, [query, categoryFilter]);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'fps', label: 'FPS Training' },
    { id: 'cognitive', label: 'Cognitive' },
    { id: 'memory', label: 'Memory' },
    { id: 'motor', label: 'Motor Skills' },
    { id: 'physical', label: 'Physical' },
    { id: 'visual', label: 'Visual' },
    { id: 'visual-tracking', label: 'Visual Tracking' },
    { id: 'reaction-speed', label: 'Reaction Speed' },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans flex flex-col">
      <Suspense fallback={null}>
        <QueryParamSync onQuery={setQuery} />
      </Suspense>
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 w-full">

        {/* Page Header */}
        <div className="mb-5 sm:mb-7 w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Drills</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Search through {DRILLS.length}+ browser-native drills by name, category, or target skill.
          </p>

          {/* Search Input Box */}
          <div className="relative mt-4 sm:mt-5 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search drills by keyword (e.g. flick, memory, reaction)..."
              className="w-full pl-12 pr-11 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-base transition-all"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-5 flex w-full snap-x items-center gap-2 overflow-x-auto pb-2 overscroll-x-contain scrollbar-none sm:mb-7">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              aria-pressed={categoryFilter === cat.id}
              className={`snap-start px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                categoryFilter === cat.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-white/10 text-xs text-gray-400">
          <span>
            Showing <strong className="text-white">{results.length}</strong> {results.length === 1 ? 'drill' : 'drills'}
            {query.trim() ? <> for &ldquo;<span className="text-blue-400">{query}</span>&rdquo;</> : ''}
          </span>
          <span className="shrink-0 font-mono text-gray-500"><span className="hidden sm:inline">{DRILLS.length} Total Registry Items</span><span className="sm:hidden">{DRILLS.length} total</span></span>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 mb-16">
            {results.map((drill) => (
              <Link
                key={drill.id}
                href={drill.href}
                className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl h-full flex flex-col justify-between"
              >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                        {drill.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-gray-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                        {drill.difficulty}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {drill.name}
                    </h2>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                      {getDrillTagline(drill.href, drill.description)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                    <span>{drill.duration}</span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                      Start Drill <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 mb-16">
            <Target className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No Drills Found</h3>
            <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
              We couldn&apos;t find any drills matching &ldquo;{query}&rdquo;. Try searching for &ldquo;flick&rdquo;, &ldquo;memory&rdquo;, &ldquo;reaction&rdquo;, or browse categories above.
            </p>
            <button
              onClick={() => { setQuery(''); setCategoryFilter('all'); }}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

export default function SearchPage() {
  return <SearchResultsContent />;
}
