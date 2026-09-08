import { useEffect, useState } from 'react';

const QUERY = '(max-width: 719px)';

/**
 * The phone is not a narrow desktop. It gets its own composition, so the
 * layout has to actually know which one it is.
 */
export function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    const update = () => setIsPhone(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return isPhone;
}