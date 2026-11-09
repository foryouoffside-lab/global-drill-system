'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const F = (n) => [`F${n}`, `F${n}`];
const K = (c) => [`Key${c}`, c];
const D = (d) => [`Digit${d}`, String(d)];

const MAIN = [
  [['Escape', 'Esc'], 0.5, F(1), F(2), F(3), F(4), 0.5, F(5), F(6), F(7), F(8), 0.5, F(9), F(10), F(11), F(12)],
  [['Backquote', '`'], ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(D), ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace', 2]],
  [['Tab', 'Tab', 1.5], ...'QWERTYUIOP'.split('').map(K), ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\', 1.5]],
  [['CapsLock', 'Caps Lock', 1.75], ...'ASDFGHJKL'.split('').map(K), ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter', 2.25]],
  [['ShiftLeft', 'Shift', 2.25], ...'ZXCVBNM'.split('').map(K), ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ShiftRight', 'Shift', 2.75]],
  [['ControlLeft', 'Ctrl', 1.25], ['MetaLeft', 'Win', 1.25], ['AltLeft', 'Alt', 1.25], ['Space', 'Space', 6.25], ['AltRight', 'Alt', 1.25], ['MetaRight', 'Win', 1.25], ['ContextMenu', 'Menu', 1.25], ['ControlRight', 'Ctrl', 1.25]],
];

const NAV = [
  [['PrintScreen', 'PrtSc'], ['ScrollLock', 'ScrLk'], ['Pause', 'Pause']],
  [['Insert', 'Ins'], ['Home', 'Home'], ['PageUp', 'PgUp']],
  [['Delete', 'Del'], ['End', 'End'], ['PageDown', 'PgDn']],
  [],
  [1, ['ArrowUp', '↑'], 1],
  [['ArrowLeft', '←'], ['ArrowDown', '↓'], ['ArrowRight', '→']],
];

const ALL_CODES = new Set([...MAIN, ...NAV].flat().filter(Array.isArray).map(([code]) => code));
const TOTAL = ALL_CODES.size;
const LOCATIONS = ['Standard', 'Left', 'Right', 'Numpad'];

function Key({ k, pressed, tested, label }) {
  if (!Array.isArray(k)) return <div style={{ width: `calc(var(--u) * ${k})` }} aria-hidden="true" />;
  const [code, text, w = 1] = k;
  const state = pressed.has(code)
    ? 'bg-cyan-400 text-black border-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.7)]'
    : tested.has(code)
      ? 'bg-emerald-500/25 text-emerald-200 border-emerald-400/60'
      : 'bg-white/[0.04] text-slate-400 border-white/10';
  return (
    <div
      data-code={code}
      data-state={pressed.has(code) ? 'pressed' : tested.has(code) ? 'tested' : 'idle'}
      title={code}
      className={`h-[var(--u)] shrink-0 rounded-md border flex items-center justify-center text-[10px] sm:text-xs font-semibold transition-colors duration-75 ${state}`}
      style={{ width: `calc(var(--u) * ${w} + 4px * ${w - 1})` }}
    >
      <span className="truncate px-0.5">{label || text}</span>
    </div>
  );
}

export default function KeyboardTesterClient({ copy = {} }) {
  const boxRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [touchOnly, setTouchOnly] = useState(false);
  const [pressed, setPressed] = useState(() => new Set());
  const [tested, setTested] = useState(() => new Set());
  const [labels, setLabels] = useState({});
  const [maxHeld, setMaxHeld] = useState(0);
  const [last, setLast] = useState(null);

  useEffect(() => {
    setTouchOnly(navigator.maxTouchPoints > 0 && !window.matchMedia('(pointer: fine)').matches);
    boxRef.current?.focus({ preventScroll: true });
  }, []);

  const record = useCallback((e) => {
    e.preventDefault();
    if (ALL_CODES.has(e.code)) setTested((s) => (s.has(e.code) ? s : new Set(s).add(e.code)));
    setLast({ key: e.key, code: e.code || '(empty)', keyCode: e.keyCode, location: LOCATIONS[e.location] ?? e.location, repeat: e.repeat });
    if (e.key && e.key.length === 1 && e.key !== ' ') setLabels((l) => (l[e.code] === e.key.toUpperCase() ? l : { ...l, [e.code]: e.key.toUpperCase() }));
  }, []);

  const onKeyDown = useCallback((e) => {
    record(e);
    setPressed((s) => {
      if (s.has(e.code)) return s;
      const n = new Set(s).add(e.code);
      setMaxHeld((m) => Math.max(m, n.size));
      return n;
    });
  }, [record]);

  const onKeyUp = useCallback((e) => {
    record(e);
    setPressed((s) => {
      if (!s.has(e.code)) return s;
      const n = new Set(s);
      n.delete(e.code);
      return n;
    });
  }, [record]);

  const reset = () => {
    setPressed(new Set());
    setTested(new Set());
    setLabels({});
    setMaxHeld(0);
    setLast(null);
    boxRef.current?.focus({ preventScroll: true });
  };

  const stats = [
    [copy.keysTested || 'Keys tested', `${tested.size} / ${TOTAL}`, 'kbt-tested'],
    [copy.heldNow || 'Held now', pressed.size, 'kbt-held'],
    [copy.maxHeld || 'Max held at once', maxHeld, 'kbt-max'],
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans cursor-default">
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {copy.h1 || 'Keyboard Tester – Test Every Key Online'}
          </h1>
          <p className="text-sm font-semibold text-slate-400 mt-1">
            {copy.subtitle || 'Press any key to check that it registers, then hold several at once to check ghosting and key rollover'}
          </p>
        </div>

        {touchOnly && (
          <p className="rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
            {copy.touchNote || 'This tester needs a physical keyboard. Touch-screen keyboards do not report physical key codes.'}
          </p>
        )}

        <div className="grid grid-cols-3 gap-2">
          {stats.map(([name, value, id]) => (
            <div key={id} className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/5 px-3 py-2">
              <div className="text-[10px] uppercase tracking-wider text-slate-400">{name}</div>
              <div id={id} className="text-xl font-black tabular-nums">{value}</div>
            </div>
          ))}
        </div>

        <div
          ref={boxRef}
          tabIndex={0}
          role="application"
          aria-label={copy.ariaLabel || 'Keyboard tester. Press keys to test them; click outside to release the keyboard.'}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); setPressed(new Set()); }}
          className={`relative rounded-2xl border p-3 sm:p-4 outline-none bg-gradient-to-b from-white/[0.04] to-transparent transition-colors ${focused ? 'border-cyan-400/60' : 'border-white/10'}`}
        >
          <div className="mb-3 flex items-center justify-between gap-3 text-xs">
            <span className={focused ? 'text-cyan-300' : 'text-amber-300'}>
              {focused ? (copy.listening || 'Listening – press any key') : (copy.clickToStart || 'Click the keyboard to start testing')}
            </span>
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-slate-200 hover:bg-white/10 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> {copy.reset || 'Reset'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-4 w-max mx-auto" style={{ '--u': 'clamp(1.6rem, 3.4vw, 2.6rem)' }}>
              {[MAIN, NAV].map((rows, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {rows.map((row, r) => (
                    <div key={r} className={`flex gap-1 ${r === 0 ? 'mb-2' : ''}`} style={{ minHeight: 'var(--u)' }}>
                      {row.map((k, j) => (
                        <Key key={Array.isArray(k) ? k[0] : `gap-${j}`} k={k} pressed={pressed} tested={tested} label={Array.isArray(k) ? labels[k[0]] : undefined} />
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5"><i className="w-3 h-3 rounded bg-cyan-400" /> {copy.legendPressed || 'Pressed'}</span>
            <span className="flex items-center gap-1.5"><i className="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-400/60" /> {copy.legendTested || 'Tested'}</span>
            <span className="flex items-center gap-1.5"><i className="w-3 h-3 rounded bg-white/[0.04] border border-white/10" /> {copy.legendUntested || 'Not pressed yet'}</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <h2 className="text-sm font-bold text-white mb-2">{copy.lastKey || 'Last key event'}</h2>
          {last ? (
            <dl id="kbt-last" className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
              {[['event.key', last.key === ' ' ? '" " (Space)' : last.key], ['event.code', last.code], ['keyCode', last.keyCode], ['location', last.location], ['repeat', String(last.repeat)]].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">{k}</dt>
                  <dd className="font-mono text-cyan-200 break-all">{v}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-sm text-slate-400">{copy.noKeyYet || 'No key pressed yet.'}</p>
          )}
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          {copy.note || 'Keys are matched by their physical position (event.code), so AZERTY, QWERTZ, JIS and other layouts work; each key shows the character your layout produced once you press it. Some keys never reach a web page: the Windows/Command key combos, Fn, many media keys, and shortcuts such as Ctrl+W or Alt+F4 are handled by the operating system or browser first. Print Screen often reports only on release.'}
        </p>
      </div>
    </div>
  );
}
