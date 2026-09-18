# refolyf — Fotoğraf Portfolyosu

Sinematik, koyu temalı statik fotoğraf sitesi.  
Canlı adres: **https://psikosun.github.io/refolyf/**

Instagram: [instagram.com/refolyf](https://www.instagram.com/refolyf/)

> «Işık düşer, şehir durur; bir kare tarih olur.»

## Seriler (79 kare)

| Seri | Kare | Dosya |
| --- | --- | --- |
| Deniz & Işık | 25 | `seriler/deniz-isik.html` |
| Sokak & İnsan | 14 | `seriler/sokak-insan.html` |
| Gece | 11 | `seriler/gece.html` |
| Orman | 17 | `seriler/orman.html` |
| Taş & Yapı | 12 | `seriler/tas-yapi.html` |

## Yapı

| Dosya / klasör | Açıklama |
| --- | --- |
| `index.html` | Ana sayfa (hero, hikâye, seri kartları) |
| `seriler/` | Beş seri galeri sayfası (lightbox) |
| `styles.css` | Tipografi ve düzen |
| `script.js` | Menü + lightbox |
| `images/web/` | Web için optimize edilmiş JPEG’ler (max ~2000px) |
| `manifest.json` | Seri hikâyeleri ve Türkçe altyazılar |

## GitHub Pages

1. Depo: `psikosun/refolyf`
2. **Settings → Pages** → Source: Deploy from a branch
3. Branch: `main`, klasör: `/ (root)`
4. Adres: `https://psikosun.github.io/refolyf/`

`main` dalına push yeterli; Pages otomatik yenilenir.

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
