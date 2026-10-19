# Zakovat Ensiklopediya — Veb-sayt

Bu loyiha Murod Nazarovning **Zakovat Ensiklopediya** (I tom, 124 sahifa) asosida yaratilgan interaktiv veb-saytdir.

**Jami: 857 ta fakt** (A–Z + raqamlar)

## Imkoniyatlar

- **Alifbo bo‘yicha navigatsiya** (A–Z va #)
- **Tez qidiruv** — istalgan so‘z yoki faktni topish
- **Viktorina** — 10 / 20 / 30 / 50 savollik testlar (faktlardan avtomatik tuziladi)
- **Oson yangilash** — yangi fakt qo‘shish uchun faqat `data.js` faylini tahrirlash kifoya

## Qanday ishga tushirish

### 1. Lokalda ko‘rish
Fayllarni brauzerda oching:
```
index.html
```

### 2. GitHub Pages orqali bepul joylash

1. [GitHub](https://github.com) da yangi repository yarating (masalan: `zakovat-ensiklopediya`)
2. Ushbu papkadagi barcha fayllarni yuklang (`index.html`, `data.js`, `README.md`)
3. Repository Settings → Pages → Source: `main` branch, `/ (root)` ni tanlang
4. Bir necha daqiqadan keyin saytingiz ishlaydi:
   `https://SIZNING-USERNAME.github.io/zakovat-ensiklopediya`

## Yangi fakt qo‘shish

`data.js` faylini oching va massivga yangi obyekt qo‘shing:

```js
{
  letter: "M",
  title: "Yangi fakt nomi",
  text: "Faktning to‘liq matni shu yerga yoziladi..."
}
```

Keyin GitHubga push qiling — sayt avtomatik yangilanadi.

## Fayllar

- `index.html` — asosiy interfeys (qidiruv, alifbo, viktorina)
- `data.js` — barcha 857 ta fakt (yangi faktlar shu yerga qo‘shiladi)
- `README.md` — ushbu qo‘llanma

---

Muallif: Murod Nazarov  
Sayt yaratuvchisi: Grok yordamida
