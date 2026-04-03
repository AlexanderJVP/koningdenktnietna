/**
 * Centrale lijst van Liv's boeken.
 * Pas prijs, beschrijving en stripePrice aan naar jouw Stripe-instellingen.
 */
export const boeken = [
  {
    id: 'abra-kaka-dabra',
    titel: 'Abracadabra',
    ondertitel: 'Een verhaal van Koning Denktnietna en Tovenaar Welslim',
    leeftijd: 'Voorleesboek voor kleuters (3de kleuterklas), eerste en tweede leerjaar',
    beschrijving:
      'Elk jaar is er een groot geheim toverfeest. Koning Denktnietna mag helaas niet mee. Om toch mee te kunnen gaan, heeft de Koning iets stout gedaan. Het loopt dan ook helemaal mis op het grote toverfeest. Gelukkig kan Tovenaar Welslim zorgen voor een goed einde…',
    prijs: 17.50,
    cover: '/covers/abra-kaka-dabra.png',
    achterkant: '/covers/abra-kaka-dabra-achterkant.png',
    stripePrice: process.env.STRIPE_PRICE_ABRA,
  },
  {
    id: 'hocus-pocus-op-het-veld',
    titel: 'Hocus pocus op het veld',
    ondertitel: 'Een verhaal van Koning Denktnietna en Tovenaar Welslim',
    leeftijd: 'Een grappig voorleesverhaal vol actie, vriendschap en knotsgekke momenten.',
    beschrijving:
      'Vlak bij het dorp, in een groot kasteel vol geheimen, wonen Koning Denktnietna en zijn slimme beste vriend Tovenaar Welslim. Dit keer beleven ze een avontuur vol humor en magie tijdens een spannende voetbalwedstrijd. Wanneer het gele team van de Koning het opneemt tegen de mysterieuze Groenen, loopt niets zoals gepland. Spelers botsen, trappen missen hun doel en de moed zakt weg. Winnen lijkt onmogelijk. Net wanneer iedereen de hoop verliest, grijpt Tovenaar Welslim in. Het spel krijgt een hilarische draai die niemand zag aankomen.',
    prijs: 17.50,
    cover: '/covers/hocus-pocus-op-het-veld.jpg',
    achterkant: '/covers/hocus-pocus-op-het-veld-achterkant.jpg',
    stripePrice: process.env.STRIPE_PRICE_HOCUS,
  },
];
