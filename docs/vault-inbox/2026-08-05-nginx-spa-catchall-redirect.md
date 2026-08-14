---
type: source
title: "Nginx: SPA'da bilinmeyen tüm yolları köke redirect ederken asset/api'yi koruma"
created: 2026-08-05
tags: [portfolio, nginx, devops]
source: "repo: ~/apps/personal-portfolio + /etc/nginx/sites-available/portfolio.conf"
---

# Nginx SPA catch-all redirect kalıbı

Tek sayfalık bir sitede (`malierdogan.com`) "ana sayfa dışındaki her yolu köke yönlendir"
isteğini, siteyi bozmadan çözmenin yolu **location öncelik sırasını** kullanmaktır.

Nginx location eşleşme önceliği: `=` (tam) > `^~` (prefix, regex'i durdurur) > regex (`~`,`~*`) > düz prefix.
Bu sıra sayesinde gerçek yolları whitelist'e alıp geri kalanı tek bir catch-all ile redirect edebiliriz:

```nginx
location = /            { proxy_pass http://localhost:3001; }   # ana sayfa
location ^~ /_next/     { proxy_pass http://localhost:3001; }   # Next.js asset/runtime
location ^~ /api/       { proxy_pass http://localhost:3001; }   # form/API
location = /clear-cache { proxy_pass http://localhost:3001; }   # gerçek sayfa
location ~* \.(pdf|ico|png|jpe?g|webp|svg|gif|txt|xml|json|js|css|map|woff2?|ttf)$ {
    proxy_pass http://localhost:3001;                           # statik dosyalar (CV PDF'leri dahil)
}
location / { return 301 https://malierdogan.com/; }             # geri kalan HER yol köke
```

Kritik / aşikar olmayan noktalar:
- `location = /` olmadan catch-all `location /` ana sayfayı da redirect eder → sonsuz döngü.
- `^~ /_next/`, regex'ten önce geldiği için asset'ler catch-all'a düşmez; `^~` olmazsa
  uzantısı olmayan Next runtime yolları (`/_next/image` vb.) redirect'e takılır.
- Statik dosyaları uzantı regex'i ile yakalamak, `public/` altındaki CV PDF indirmesini korur.
- Doğrulama: `curl -sk -H "Host: malierdogan.com" --resolve malierdogan.com:443:127.0.0.1 ...`
  (sunucu İTÜ ağında, dış DNS'e çıkamıyor). `/` ve `/CV_*.pdf` → 200, bilinmeyen yol → 301.

Trafik Cloudflare Tunnel → `https://localhost:443` üzerinden geldiği için kural 443 server
bloğuna yazılır; port 80 harici erişimde kullanılmıyor.
