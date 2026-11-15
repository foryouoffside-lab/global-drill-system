import { DICTIONARIES } from '@/lib/i18n/dictionaries';

const EXTRA = {
  'Drill Instructions & Scoring System': { pt: 'Instruções e pontuação', es: 'Instrucciones y puntuación', ja: 'ルールとスコア', de: 'Anleitung und Punktesystem', ko: '규칙과 점수', fr: 'Consignes et score' },
  'Drill Instructions & Settings': { pt: 'Instruções e configurações', es: 'Instrucciones y ajustes', ja: 'ルールと設定', de: 'Anleitung und Einstellungen', ko: '규칙과 설정', fr: 'Consignes et réglages' },
  'Drill Setup': { pt: 'Configuração do treino', es: 'Configuración del ejercicio', ja: 'ドリル設定', de: 'Drill-Einstellungen', ko: '훈련 설정', fr: 'Réglages de l’exercice' },
  'Session Time': { pt: 'Duração da sessão', es: 'Duración de la sesión', ja: 'セッション時間', de: 'Sitzungsdauer', ko: '세션 시간', fr: 'Durée de la session' },
  'Target Speed': { pt: 'Velocidade do alvo', es: 'Velocidad del objetivo', ja: 'ターゲット速度', de: 'Zieltempo', ko: '표적 속도', fr: 'Vitesse de la cible' },
  'Size': { pt: 'Tamanho', es: 'Tamaño', ja: 'サイズ', de: 'Größe', ko: '크기', fr: 'Taille' },
  'Color': { pt: 'Cor', es: 'Color', ja: '色', de: 'Farbe', ko: '색상', fr: 'Couleur' },
  'Status': { pt: 'Status', es: 'Estado', ja: '状態', de: 'Status', ko: '상태', fr: 'État' },
  'Speed': { pt: 'Velocidade', es: 'Velocidad', ja: '速度', de: 'Tempo', ko: '속도', fr: 'Vitesse' },
  'Sessions': { pt: 'Sessões', es: 'Sesiones', ja: 'セッション', de: 'Sitzungen', ko: '세션', fr: 'Sessions' },
  'Sessions Completed': { pt: 'Sessões concluídas', es: 'Sesiones completadas', ja: '完了セッション', de: 'Abgeschlossene Sitzungen', ko: '완료한 세션', fr: 'Sessions terminées' },
  'Base Speed': { pt: 'Velocidade base', es: 'Velocidad base', ja: '基本速度', de: 'Grundtempo', ko: '기본 속도', fr: 'Vitesse de base' },
  'Speed Acceleration': { pt: 'Aceleração', es: 'Aceleración', ja: '加速', de: 'Beschleunigung', ko: '가속', fr: 'Accélération' },
  'TRACKING': { pt: 'RASTREANDO', es: 'SIGUIENDO', ja: '追跡中', de: 'TRACKING', ko: '추적 중', fr: 'SUIVI' },
  'COMPLETE': { pt: 'CONCLUÍDO', es: 'COMPLETADO', ja: '完了', de: 'FERTIG', ko: '완료', fr: 'TERMINÉ' },
  'STANDBY': { pt: 'EM ESPERA', es: 'EN ESPERA', ja: '待機中', de: 'BEREIT', ko: '대기', fr: 'EN ATTENTE' },
  'Share Drill Link': { pt: 'Compartilhar link do treino', es: 'Compartir enlace del ejercicio', ja: 'ドリルのリンクを共有', de: 'Drill-Link teilen', ko: '훈련 링크 공유', fr: 'Partager le lien de l’exercice' },
  'Return to Options': { pt: 'Voltar às opções', es: 'Volver a las opciones', ja: '設定に戻る', de: 'Zurück zu den Optionen', ko: '옵션으로 돌아가기', fr: 'Retour aux options' },
  'RULE:': { pt: 'REGRA:', es: 'REGLA:', ja: 'ルール:', de: 'REGEL:', ko: '규칙:', fr: 'RÈGLE :' },
  'TAP RED TARGET': { pt: 'TOQUE NO ALVO VERMELHO', es: 'TOCA EL OBJETIVO ROJO', ja: '赤をタップ', de: 'ROTES ZIEL TIPPEN', ko: '빨간 표적 탭', fr: 'TOUCHEZ LA CIBLE ROUGE' },
  'TAP BLUE TARGET': { pt: 'TOQUE NO ALVO AZUL', es: 'TOCA EL OBJETIVO AZUL', ja: '青をタップ', de: 'BLAUES ZIEL TIPPEN', ko: '파란 표적 탭', fr: 'TOUCHEZ LA CIBLE BLEUE' },
  'TARGET WORD:': { pt: 'PALAVRA-ALVO:', es: 'PALABRA OBJETIVO:', ja: 'ターゲット語:', de: 'ZIELWORT:', ko: '목표 단어:', fr: 'MOT CIBLE :' },
  'TARGET DETECTED': { pt: 'ALVO ENCONTRADO', es: 'OBJETIVO DETECTADO', ja: 'ターゲット発見', de: 'ZIEL ERKANNT', ko: '목표 발견', fr: 'CIBLE DÉTECTÉE' },
  'TARGET SYMBOL': { pt: 'SÍMBOLO-ALVO', es: 'SÍMBOLO OBJETIVO', ja: 'ターゲット記号', de: 'ZIELSYMBOL', ko: '목표 기호', fr: 'SYMBOLE CIBLE' },
  'Hide Line': { pt: 'Ocultar linha', es: 'Ocultar línea', ja: 'ライン非表示', de: 'Linie ausblenden', ko: '선 숨기기', fr: 'Masquer la ligne' },
  'Random Speed': { pt: 'Velocidade aleatória', es: 'Velocidad aleatoria', ja: 'ランダム速度', de: 'Zufallstempo', ko: '무작위 속도', fr: 'Vitesse aléatoire' },
  'Gaze Trail': { pt: 'Rastro do olhar', es: 'Estela de la mirada', ja: '視線の軌跡', de: 'Blickspur', ko: '시선 궤적', fr: 'Traînée du regard' },
  'Neon Glow': { pt: 'Brilho neon', es: 'Brillo neón', ja: 'ネオン発光', de: 'Neonleuchten', ko: '네온 효과', fr: 'Lueur néon' },
  'Scanlines': { pt: 'Linhas de varredura', es: 'Líneas de escaneo', ja: '走査線', de: 'Scanlines', ko: '스캔라인', fr: 'Lignes de balayage' },
  'Day Mode': { pt: 'Modo claro', es: 'Modo día', ja: 'デイモード', de: 'Tagmodus', ko: '주간 모드', fr: 'Mode jour' },
  'Rotate mobile for a better experience': { pt: 'Gire o celular para uma experiência melhor', es: 'Gira el móvil para una mejor experiencia', ja: 'スマホを横向きにすると快適です', de: 'Handy drehen für ein besseres Erlebnis', ko: '휴대폰을 가로로 돌리면 더 편합니다', fr: 'Tournez votre mobile pour un meilleur confort' },
};

const UI_KEY_BY_EN = Object.fromEntries(Object.entries(DICTIONARIES.en.ui).map(([k, v]) => [v, k]));

export function phrase(locale, text) {
  if (!locale || locale === 'en' || typeof text !== 'string') return text;
  return EXTRA[text]?.[locale] || DICTIONARIES[locale]?.ui?.[UI_KEY_BY_EN[text]] || text;
}
