import { DRILLS } from './drillsRegistry';
import { getDrillTagline } from './drillCatalog';

const normalize = (value = '') => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const indexedDrills = new WeakMap();

function getSearchIndex(drills) {
  if (indexedDrills.has(drills)) return indexedDrills.get(drills);

  const index = drills.map((drill, position) => {
    const name = normalize(drill.name);
    const keywords = (drill.keywords || []).map(normalize);
    const currentDescription = getDrillTagline(drill.href, drill.description);
    return {
      drill,
      position,
      name,
      nameWords: name.split(/\s+/),
      keywords,
      searchableText: normalize([
        drill.name,
        drill.folderName,
        drill.category,
        drill.categoryLabel,
        drill.subcategory,
        currentDescription,
        drill.description,
        ...keywords,
      ].filter(Boolean).join(' ')),
    };
  });

  indexedDrills.set(drills, index);
  return index;
}

export function searchDrills(query, drills = DRILLS) {
  if (!query || typeof query !== 'string') return [];
  const q = normalize(query.trim());
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  return getSearchIndex(drills)
    .map((item) => {
      if (!terms.every((term) => item.searchableText.includes(term))) return null;
      let score = item.name === q ? 100 : item.name.startsWith(q) ? 70 : item.name.includes(q) ? 50 : 0;
      score += terms.reduce((total, term) => total
        + (item.nameWords.some((word) => word.startsWith(term)) ? 12 : 0)
        + (item.keywords.some((keyword) => keyword.startsWith(term)) ? 6 : 0), 0);
      return { ...item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.position - b.position)
    .map(({ drill }) => drill);
}
