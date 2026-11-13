import { useTranslation } from '@/lib/i18n/useTranslation';

const LABELS = {
  en: {
    sessionComplete: 'SESSION COMPLETE',
    calibrated: 'Pointer tracking summary',
    timeOnTarget: 'Time on target',
    meanError: 'Mean distance error',
    rmsError: 'RMS distance error',
    ofRadius: 'of target radius',
    metricsNote: 'Pointer distance to the target centre, time-weighted. Eye position is not recorded.',
    metricsNotePhases: 'Pointer distance to the target centre, time-weighted, reported separately for the visible and covered phases. Eye position is not recorded.',
    visiblePhase: 'Visible',
    coveredPhase: 'Covered',
  },
  ko: {
    sessionComplete: '세션 완료',
    calibrated: '포인터 추적 요약',
    timeOnTarget: '표적 위에 머문 시간',
    meanError: '평균 거리 오차',
    rmsError: 'RMS 거리 오차',
    ofRadius: '(표적 반지름 대비)',
    metricsNote: '포인터와 표적 중심 사이의 거리를 시간 가중으로 계산했습니다. 눈의 위치는 기록하지 않습니다.',
    metricsNotePhases: '포인터와 표적 중심 사이의 거리를 시간 가중으로 계산해, 보이는 구간과 가려진 구간을 따로 표시합니다. 눈의 위치는 기록하지 않습니다.',
    visiblePhase: '보이는 구간',
    coveredPhase: '가려진 구간',
  },
  ja: {
    sessionComplete: 'セッション完了',
    calibrated: 'ポインター追従のまとめ',
    timeOnTarget: '標的に重なっていた時間',
    meanError: '平均距離誤差',
    rmsError: 'RMS距離誤差',
    ofRadius: '(標的半径比)',
    metricsNote: 'ポインターと標的中心の距離を時間加重で計算しています。視線の位置は記録しません。',
    metricsNotePhases: 'ポインターと標的中心の距離を時間加重で計算し、見えている区間と隠れている区間に分けて表示します。視線の位置は記録しません。',
    visiblePhase: '表示中',
    coveredPhase: '遮蔽中',
  },
  de: {
    sessionComplete: 'SESSION ABGESCHLOSSEN',
    calibrated: 'Zusammenfassung der Zeigerverfolgung',
    timeOnTarget: 'Zeit auf dem Ziel',
    meanError: 'Mittlerer Abstandsfehler',
    rmsError: 'RMS-Abstandsfehler',
    ofRadius: 'des Zielradius',
    metricsNote: 'Zeitgewichteter Abstand des Zeigers zur Zielmitte. Die Augenposition wird nicht aufgezeichnet.',
    metricsNotePhases: 'Zeitgewichteter Abstand des Zeigers zur Zielmitte, getrennt für sichtbare und verdeckte Phasen. Die Augenposition wird nicht aufgezeichnet.',
    visiblePhase: 'Sichtbar',
    coveredPhase: 'Verdeckt',
  },
  fr: {
    sessionComplete: 'SÉANCE TERMINÉE',
    calibrated: 'Résumé du suivi au pointeur',
    timeOnTarget: 'Temps sur la cible',
    meanError: 'Écart moyen de distance',
    rmsError: 'Écart RMS de distance',
    ofRadius: 'du rayon de la cible',
    metricsNote: "Distance du pointeur au centre de la cible, pondérée par le temps. La position des yeux n'est pas enregistrée.",
    metricsNotePhases: "Distance du pointeur au centre de la cible, pondérée par le temps, mesurée séparément pendant les phases visible et masquée. La position des yeux n'est pas enregistrée.",
    visiblePhase: 'Visible',
    coveredPhase: 'Masquée',
  },
  pt: {
    sessionComplete: 'SESSÃO CONCLUÍDA',
    calibrated: 'Resumo do acompanhamento com o ponteiro',
    timeOnTarget: 'Tempo no alvo',
    meanError: 'Erro médio de distância',
    rmsError: 'Erro RMS de distância',
    ofRadius: 'do raio do alvo',
    metricsNote: 'Distância do ponteiro ao centro do alvo, ponderada pelo tempo. A posição dos olhos não é registrada.',
    metricsNotePhases: 'Distância do ponteiro ao centro do alvo, ponderada pelo tempo, mostrada separadamente nas fases visível e oculta. A posição dos olhos não é registrada.',
    visiblePhase: 'Visível',
    coveredPhase: 'Oculta',
  },
  es: {
    sessionComplete: 'SESIÓN COMPLETADA',
    calibrated: 'Resumen del seguimiento con el puntero',
    timeOnTarget: 'Tiempo sobre el objetivo',
    meanError: 'Error medio de distancia',
    rmsError: 'Error RMS de distancia',
    ofRadius: 'del radio del objetivo',
    metricsNote: 'Distancia del puntero al centro del objetivo, ponderada por tiempo. No se registra la posición de los ojos.',
    metricsNotePhases: 'Distancia del puntero al centro del objetivo, ponderada por tiempo, mostrada por separado en las fases visible y oculta. No se registra la posición de los ojos.',
    visiblePhase: 'Visible',
    coveredPhase: 'Oculta',
  },
};

export function getPursuitMetricsLabels(locale = 'en') {
  return LABELS[locale] || LABELS.en;
}

export function usePursuitMetricsLabels() {
  return getPursuitMetricsLabels(useTranslation().locale);
}
