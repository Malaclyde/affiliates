'use client';

import { useEffect } from 'react';

export default function HomeRedirect() {
  useEffect(() => {
    // GeoIP detection via browser language and timezone
    const userLang = navigator.language || (navigator as any).userLanguage || '';
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    // European German-speaking regions
    const deRegions = ['Europe/Berlin', 'Europe/Vienna', 'Europe/Zurich', 'Europe/Luxembourg'];
    const deLangs = ['de', 'de-DE', 'de-AT', 'de-CH', 'de-LU'];

    const isGermanLang = deLangs.some(l => userLang.startsWith(l));
    const isGermanTZ = deRegions.includes(timeZone);

    const targetLocale = (isGermanLang || isGermanTZ) ? '/de' : '/en';
    window.location.replace(targetLocale);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      color: '#666',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <p>Redirecting...</p>
    </div>
  );
}
