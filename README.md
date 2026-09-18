# refolyf — Fotoğraf Portfolyosu

Sinematik, koyu temalı (siyah / altın / lacivert) statik fotoğraf sitesi.  
Canlı adres: **https://psikosun.github.io/refolyf/**

Instagram: [instagram.com/refolyf](https://www.instagram.com/refolyf/)

## İçerik

| Dosya / klasör | Açıklama |
| --- | --- |
| `index.html` | Ana sayfa (Türkçe arayüz) |
| `styles.css` | Tipografi ve düzen |
| `script.js` | Galeri lightbox |
| `images/` | Portfolyo fotoğrafları (`01.jpg` … `09.jpg`) |

## GitHub Pages nasıl çalışır?

Bu depo **GitHub Pages** ile yayınlanır:

1. GitHub’da `psikosun/refolyf` deposuna gidin.
2. **Settings → Pages**.
3. **Source**: Deploy from a branch.
4. **Branch**: `main`, klasör: `/ (root)`.
5. Kaydedin. Birkaç dakika içinde site  
   `https://psikosun.github.io/refolyf/` adresinde açılır.

Değişiklik yaptıktan sonra `main` dalına push etmek yeterlidir; Pages otomatik yenilenir.

## Fotoğrafları değiştirme

1. Yeni görselleri `images/` klasörüne koyun (ör. `01.jpg` … `09.jpg`).
2. Aynı dosya adlarını kullanırsanız `index.html`’i değiştirmeniz gerekmez.
3. Farklı isimler kullanıyorsanız `index.html` içindeki `src` / `data-src` yollarını güncelleyin.
4. Hero arka planı `01.jpg` kullanır; değiştirmek için hero bölümündeki `background-image` yolunu güncelleyin.
5. Önerilen: kare veya dikey fotoğraflar, mümkünse yüksek çözünürlük (en az ~1200px kısa kenar).
6. Commit ve push:

```bash
git add images/ index.html
git commit -m "Fotoğrafları güncelle"
git push origin main
```

## Yerelde önizleme

```bash
cd refolyf-site   # veya bu deponun kökü
python3 -m http.server 8080
```

Tarayıcıda: http://localhost:8080

## İletişim

Sitede e-posta yoktur. İletişim yalnızca Instagram DM: [@refolyf](https://www.instagram.com/refolyf/).

## Lisans

Fotoğraflar ve marka @refolyf’e aittir. Kod bu depoda portfolyo amaçlı paylaşılmıştır.
