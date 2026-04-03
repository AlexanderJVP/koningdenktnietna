# Website van Liv — opstartgids

## 1. Installeer de benodigdheden

Zorg dat je **Node.js** hebt geïnstalleerd: https://nodejs.org (kies de LTS-versie).

Open een terminal in deze map en typ:

```
npm install
```

---

## 2. Stel Stripe in

### Stap A – Producten aanmaken in Stripe
1. Ga naar https://dashboard.stripe.com/products
2. Klik op **+ Product toevoegen**
3. Maak een product aan voor **Abra kaka dabra** (stel de prijs in, bijv. €18,50)
4. Doe hetzelfde voor **Hocus pocus op het veld**
5. Kopieer de **Price ID** van elk product (begint met `price_...`)

### Stap B – Formspree instellen (voor e-mails)
1. Ga naar https://formspree.io en maak een gratis account
2. Maak een **nieuw formulier** aan
3. Kopieer de ID (bijv. `mijnformulier`)
4. Voeg deze toe aan `.env.local` als `NEXT_PUBLIC_FORMSPREE_ID`

### Stap C – .env.local aanmaken
Kopieer het voorbeeldbestand:

```
cp .env.local.example .env.local
```

Open `.env.local` en vul in:
- `STRIPE_SECRET_KEY` → vind je op https://dashboard.stripe.com/apikeys (gebruik de **geheime** sleutel)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → de **publiceerbare** sleutel van dezelfde pagina
- `STRIPE_PRICE_ABRA` → de Price ID van "Abra kaka dabra"
- `STRIPE_PRICE_HOCUS` → de Price ID van "Hocus pocus op het veld"
- `NEXT_PUBLIC_FORMSPREE_ID` → je Formspree formulier-ID

---

## 3. Start de website lokaal

```
npm run dev
```

Open dan http://localhost:3000 in je browser.

---

## 4. Afbeeldingen toevoegen

Zet afbeeldingen in de `public/` map:

| Bestand                              | Gebruik                          |
|--------------------------------------|----------------------------------|
| `public/logo.png`                    | Logo in de navigatiebalk         |
| `public/covers/abra-kaka-dabra.jpg`  | Boekomslag "Abra kaka dabra"     |
| `public/covers/hocus-pocus-op-het-veld.jpg` | Boekomslag "Hocus pocus" |
| `public/menu-overzicht.png` enz.     | Getekende menu-items             |

Zoek daarna in de code naar `{/* Vervang */}` — daar staan instructies hoe je de placeholders vervangt door echte afbeeldingen.

---

## 5. Online zetten (gratis)

De makkelijkste optie is **Vercel**:
1. Maak een account op https://vercel.com
2. Klik op **Add New Project** en koppel je map (of upload via Git)
3. Voeg dezelfde omgevingsvariabelen uit `.env.local` toe in de Vercel-instellingen
4. Klaar — je krijgt een gratis `*.vercel.app` URL

---

## 6. Echte e-mails voor het contactformulier en adresformulier

Beide formulieren gebruiken **Formspree** (je hebt dat al ingesteld bij stap 2B).

Je ontvangt:
- **Adresformulieren** wanneer iemand een boek koopt (met naam, adres, e-mail, welk boek)
- **Contactberichten** van mensen die vragen hebben via de contactpagina
