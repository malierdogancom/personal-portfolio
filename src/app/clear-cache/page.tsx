'use client';
import { useEffect, useState } from 'react';

export default function ClearCache() {
  const [status, setStatus] = useState('Temizleniyor...');

  useEffect(() => {
    async function clear() {
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const reg of regs) await reg.unregister();

        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));

        setStatus(`✓ Tamamlandı. ${regs.length} service worker, ${keys.length} cache silindi. Anasayfaya yönlendiriliyorsunuz...`);
        setTimeout(() => window.location.href = '/', 2000);
      } catch (e) {
        setStatus('Hata: ' + e);
      }
    }
    clear();
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <p>{status}</p>
    </div>
  );
}
