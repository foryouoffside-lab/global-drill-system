'use client';

import { useTranslation } from '@/lib/i18n/useTranslation';

/**
 * Grade labels come out of lib/scoringEngine.js in English ('Keep Going',
 * 'LEGENDARY', ...). This maps them onto the shared `ui.grade*` dictionary
 * keys so localized drill pages show native labels on the end screen.
 * Unknown labels fall back to the original string.
 *
 *   const gradeLabel = useGradeLabel();
 *   <div>{gradeLabel(analytics.grade?.label)}</div>
 */
export function gradeLabelKey(label) {
  if (!label) return null;
  return 'ui.grade' + String(label).toLowerCase().replace(/(^|\s+)(\w)/g, (_, __, c) => c.toUpperCase());
}

export function useGradeLabel() {
  const { t } = useTranslation();
  return (label) => {
    const key = gradeLabelKey(label);
    return key ? t(key, label) : label;
  };
}
