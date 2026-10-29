import { drillSensitivity } from './drillSensitivity';

let virtualTarget: Element | null = null;

function install(): void {
  if (typeof window === 'undefined' || typeof Element.prototype.requestPointerLock !== 'function') return;
  const flagged = window as Window & { __skilldrillsLockFallback?: boolean };
  if (flagged.__skilldrillsLockFallback) return;

  const nativeGetter = Object.getOwnPropertyDescriptor(Document.prototype, 'pointerLockElement')?.get;
  if (!nativeGetter) return;
  flagged.__skilldrillsLockFallback = true;

  const nativeRequest = Element.prototype.requestPointerLock;
  const nativeExit = Document.prototype.exitPointerLock;
  const deferred = new WeakSet<Element>();
  const realLock = () => nativeGetter.call(document) as Element | null;
  const notify = () => setTimeout(() => document.dispatchEvent(new Event('pointerlockchange')), 0);

  Object.defineProperty(document, 'pointerLockElement', {
    configurable: true,
    get: () => realLock() || (virtualTarget && virtualTarget.isConnected ? virtualTarget : null),
  });

  const fallBack = (target: Element, error: unknown, wasFullscreen: boolean) => {
    if (realLock() || virtualTarget || !target.isConnected) return;
    const name = (error as DOMException | undefined)?.name;
    if (name === 'NotAllowedError' && !wasFullscreen && !deferred.has(target)) {
      deferred.add(target);
      return;
    }
    virtualTarget = target;
    notify();
  };

  Element.prototype.requestPointerLock = function (this: Element, ...args: unknown[]) {
    const wasFullscreen = Boolean(document.fullscreenElement);
    let result: unknown;
    try {
      result = (nativeRequest as (...a: unknown[]) => unknown).apply(this, args);
    } catch (error) {
      fallBack(this, error, wasFullscreen);
      return Promise.resolve();
    }
    if (result && typeof (result as Promise<void>).then === 'function') {
      return (result as Promise<void>).then(
        () => { deferred.delete(this); },
        (error) => { fallBack(this, error, wasFullscreen); },
      );
    }
    return result as Promise<void>;
  } as typeof Element.prototype.requestPointerLock;

  window.addEventListener('mousemove', (event) => {
    if (!event.isTrusted || !virtualTarget || realLock() || !virtualTarget.isConnected) return;
    event.stopImmediatePropagation();
    const rect = virtualTarget.getBoundingClientRect();
    const sens = drillSensitivity.get() || 1;
    const relay = (movementX: number, movementY: number) => {
      (event.target || document).dispatchEvent(new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        clientX: event.clientX,
        clientY: event.clientY,
        screenX: event.screenX,
        screenY: event.screenY,
        buttons: event.buttons,
        movementX,
        movementY,
      }));
    };
    relay(-1e7, -1e7);
    relay((event.clientX - rect.left) / sens, (event.clientY - rect.top) / sens);
  }, true);

  Document.prototype.exitPointerLock = function (this: Document) {
    if (virtualTarget && !realLock()) {
      virtualTarget = null;
      notify();
      return;
    }
    virtualTarget = null;
    return nativeExit.call(this);
  };
}

install();

export {};
