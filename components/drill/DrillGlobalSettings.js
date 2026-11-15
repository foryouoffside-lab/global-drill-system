'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Zap, ZapOff, Timer, TimerOff, MousePointer2 } from 'lucide-react';
import { drillAudio } from '@/lib/drillAudio';
import { drillFlash } from '@/lib/drillFlash';
import { drillTimeout } from '@/lib/drillTimeout';
import { drillSensitivity, cmPer360, SENS_MIN, SENS_MAX, SENS_STEP, SENS_DEFAULT } from '@/lib/drillSensitivity';
import { useTranslation } from '@/lib/i18n/useTranslation';

const SETTINGS_COPY = {
  en: { title: 'Session Settings', sound: 'Sound Effects', soundDesc: 'Hit, miss & countdown cues', flash: 'Red Flash', flashDesc: 'Screen flash on wrong click', timeout: 'Target Timeouts', timeoutDesc: 'Targets expire if not clicked in time', sens: 'Mouse Sensitivity', sensDesc: 'Cursor speed in every mouse-aimed drill' },
  pt: { title: 'Configurações da sessão', sound: 'Efeitos sonoros', soundDesc: 'Sons de acerto, erro e contagem', flash: 'Flash vermelho', flashDesc: 'A tela pisca ao clicar errado', timeout: 'Tempo dos alvos', timeoutDesc: 'Alvos somem se não forem clicados a tempo', sens: 'Sensibilidade do mouse', sensDesc: 'Velocidade do cursor nos treinos de mira com mouse' },
  es: { title: 'Ajustes de la sesión', sound: 'Efectos de sonido', soundDesc: 'Sonidos de acierto, fallo y cuenta atrás', flash: 'Destello rojo', flashDesc: 'La pantalla destella al fallar un clic', timeout: 'Tiempo de los objetivos', timeoutDesc: 'Los objetivos desaparecen si no haces clic a tiempo', sens: 'Sensibilidad del ratón', sensDesc: 'Velocidad del cursor en los ejercicios de puntería' },
  ja: { title: 'セッション設定', sound: '効果音', soundDesc: 'ヒット・ミス・カウントダウンの音', flash: '赤フラッシュ', flashDesc: '誤クリック時に画面が点滅', timeout: 'ターゲットの時間切れ', timeoutDesc: '時間内にクリックしないとターゲットが消える', sens: 'マウス感度', sensDesc: 'マウス照準ドリル共通のカーソル速度' },
  de: { title: 'Sitzungseinstellungen', sound: 'Soundeffekte', soundDesc: 'Töne für Treffer, Fehler und Countdown', flash: 'Roter Blitz', flashDesc: 'Bildschirm blinkt bei Fehlklick', timeout: 'Ziel-Zeitlimit', timeoutDesc: 'Ziele verschwinden, wenn sie nicht rechtzeitig geklickt werden', sens: 'Mausempfindlichkeit', sensDesc: 'Cursortempo in allen Maus-Aim-Drills' },
  ko: { title: '세션 설정', sound: '효과음', soundDesc: '명중, 실수, 카운트다운 소리', flash: '빨간 화면 깜빡임', flashDesc: '잘못 클릭하면 화면이 깜빡임', timeout: '표적 시간 제한', timeoutDesc: '제때 클릭하지 않으면 표적이 사라짐', sens: '마우스 감도', sensDesc: '마우스 조준 훈련 전체의 커서 속도' },
  fr: { title: 'Réglages de session', sound: 'Effets sonores', soundDesc: 'Sons de touche, d’erreur et de décompte', flash: 'Flash rouge', flashDesc: 'L’écran clignote sur un mauvais clic', timeout: 'Délai des cibles', timeoutDesc: 'Les cibles disparaissent si vous ne cliquez pas à temps', sens: 'Sensibilité de la souris', sensDesc: 'Vitesse du curseur dans les exercices de visée à la souris' },
};

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
        checked ? 'bg-blue-600' : 'bg-surface-2 border border-hairline-2'
      }`}
    >
      <span
        className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-[22px]' : 'translate-x-[3px]'
        }`}
      />
    </button>
  );
}

function SettingRow({ icon: OnIcon, offIcon: OffIcon, label, description, checked, onChange }) {
  const Icon = checked ? OnIcon : OffIcon;
  return (
    <div className="flex items-center gap-3 py-3 px-4 flex-1 min-w-0">
      <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${checked ? 'bg-blue-500/10 text-blue-400' : 'bg-surface-2 text-ink-3'}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold text-ink-1">{label}</div>
        <div className="text-2xs text-ink-3 truncate">{description}</div>
      </div>
      <ToggleSwitch checked={checked} onChange={onChange} label={label} />
    </div>
  );
}

export default function DrillGlobalSettings() {
  const { locale } = useTranslation();
  const copy = SETTINGS_COPY[locale] || SETTINGS_COPY.en;
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [flashEnabled, setFlashEnabled] = useState(true);
  const [timeoutEnabled, setTimeoutEnabled] = useState(true);
  const [sens, setSens] = useState(SENS_DEFAULT);
  // Touch-only devices tap the target directly — there is no cursor to speed up,
  // so the slider never renders for them. Same test the drills use to decide
  // whether a pointer-lock drill is playable at all.
  const [hasMousePointer, setHasMousePointer] = useState(false);

  useEffect(() => {
    setSoundEnabled(drillAudio.isEnabled());
    setFlashEnabled(drillFlash.isEnabled());
    setTimeoutEnabled(drillTimeout.isEnabled());
    setSens(drillSensitivity.get());
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setHasMousePointer(!(isTouchCapable && !hasFinePointer));
  }, []);

  return (
    <div className="rounded-2xl border border-hairline bg-surface-1/80 backdrop-blur-xl overflow-hidden">
      <div className="px-4 pt-3 pb-1">
        <span className="text-2xs font-mono font-bold text-ink-3 uppercase tracking-wider">{copy.title}</span>
      </div>
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-hairline">
        <SettingRow
          icon={Volume2}
          offIcon={VolumeX}
          label={copy.sound}
          description={copy.soundDesc}
          checked={soundEnabled}
          onChange={(v) => { setSoundEnabled(v); drillAudio.setEnabled(v); }}
        />
        <SettingRow
          icon={Zap}
          offIcon={ZapOff}
          label={copy.flash}
          description={copy.flashDesc}
          checked={flashEnabled}
          onChange={(v) => { setFlashEnabled(v); drillFlash.setEnabled(v); }}
        />
        <SettingRow
          icon={Timer}
          offIcon={TimerOff}
          label={copy.timeout}
          description={copy.timeoutDesc}
          checked={timeoutEnabled}
          onChange={(v) => { setTimeoutEnabled(v); drillTimeout.setEnabled(v); }}
        />
      </div>

      {hasMousePointer && (
        <div className="flex items-center gap-3 py-3 px-4 border-t border-hairline">
          <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <MousePointer2 className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="min-w-0">
                <div className="text-xs font-semibold text-ink-1">{copy.sens}</div>
                <div className="text-2xs text-ink-3 truncate">{copy.sensDesc}</div>
              </div>
              <span className="shrink-0 font-mono text-2xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md px-2 py-0.5">
                {sens.toFixed(2)}x <span className="text-ink-3 font-normal">({cmPer360(sens)} cm/360)</span>
              </span>
            </div>
            <input
              type="range"
              min={SENS_MIN}
              max={SENS_MAX}
              step={SENS_STEP}
              value={sens}
              aria-label={copy.sens}
              onChange={(e) => { const v = parseFloat(e.target.value); setSens(v); drillSensitivity.set(v); }}
              className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
