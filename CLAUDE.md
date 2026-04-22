# CLAUDE.md — Portfolio (Ana Site)

## Proje Özeti
Ana portfolio sitesi. `malierdogan.com` adresinde yayınlanır.
- **Subdomain:** malierdogan.com (root domain)
- **GitHub Org:** github.com/malierdogancom/portfolio
- **Firebase Hosting:** `portfolio-mali-erdogan` projesi, default hosting site (target yok)

## Tech Stack
- **Framework:** Next.js 16.0.5 (static export)
- **React:** 19.2.0
- **TypeScript:** Evet
- **Styling:** Tailwind CSS 4
- **Build output:** `out/` (static HTML/CSS/JS)
- **Node:** 20

## Firebase Yapısı
- **Project ID:** `portfolio-mali-erdogan`
- **Hosting:** Default site (`.firebaserc`'de target yok)
- **Firestore:** Evet (email extension için)
- **Firebase Extension:** `firestore-send-email@0.2.4` — iletişim formundan gelen e-postaları Firestore üzerinden gönderir

## Firebase Config (env vars ile)
`src/lib/firebase.ts` dosyası şu env varları kullanır:
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```
Bu değerler `.env.local`'de saklanır ve GitHub Secrets olarak da tanımlanmalıdır.

## CI/CD Süreci
- **Trigger:** `main` branch'e push → production deploy, PR → preview channel deploy
- **Workflow:** `.github/workflows/firebase-deploy.yml`
- **Build:** `npm ci` → `npm run build` (output: `out/`)
- **Deploy tool:** `FirebaseExtended/action-hosting-deploy@v0`
- **Secrets gerekli:**
  - `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_MALI_ERDOGAN` (org secret — tüm repolarda kullanılabilir)
  - `NEXT_PUBLIC_FIREBASE_*` (repo secrets — build sırasında inject edilir)

## Build & Deploy Detayları
```bash
npm ci
npm run build      # → out/ klasörü oluşur
firebase deploy --only hosting --project portfolio-mali-erdogan
```

## Iletişim Formu
- `src/components/ContactSection.tsx` — Formspree veya Firebase üzerinden e-posta gönderimi
- `nodemailer` bağımlılığı mevcut

## Bilinen Kısıtlar
- `output: 'export'` kullanıldığı için server-side rendering yok
- Firebase SDK yalnızca Firestore erişimi için kullanılıyor (email extension entegrasyonu)

---

## Yeni Subdomain Ekleme Rehberi

Yeni bir subdomain/site eklemek için:

### 1. Firebase: Yeni Hosting Site Oluştur
```bash
firebase hosting:sites:create <yeni-site-adi> --project portfolio-mali-erdogan
```
Yeni sitenin `firebase.json` ve `.firebaserc` dosyalarına hosting target ekle.

### 2. Cloudflare: CNAME Kaydı
- Type: CNAME
- Name: `<subdomain>`
- Target: `<yeni-site-adi>.web.app`
- Proxy: ON (turuncu bulut)

### 3. Firebase: Custom Domain Bağla
Firebase Console → Hosting → yeni site → "Add custom domain"
(Domain doğrulama için Firebase Console gerekiyor — bu adım manuel)

### 4. GitHub: Yeni Repo Oluştur
```
github.com/malierdogancom → New repository (private)
Repo adı: <subdomain>
```

### 5. Kod + Workflow
Mevcut bir siteyi şablon olarak kopyala:
- `.github/workflows/firebase-deploy.yml` → `target:` değerini güncelle
- `CLAUDE.md` → bu siteye özel doldur
- `firebase.json` → yeni hosting target ekle
- `.firebaserc` → yeni site eşlemesini ekle

### 6. Push
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:malierdogancom/<repo-adi>.git
git push -u origin main
```
GitHub Actions otomatik devreye girer → Firebase'e deploy eder.

### Org-Level Secret (tekrar ayarlamak gerekmez)
`FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_MALI_ERDOGAN` tüm org repolarında otomatik kullanılabilir.
Yalnızca repo-specific env varlar (NEXT_PUBLIC_*) için yeni repo secret eklemek gerekir.
