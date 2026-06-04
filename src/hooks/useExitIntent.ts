import { useEffect, useState } from 'react';

export function useExitIntent(enabled = true): boolean {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (sessionStorage.getItem('exitIntentShown') === '1') return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem('exitIntentShown', '1');
        setTriggered(true);
      }
    };
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, [enabled]);

  return triggered;
}
