import Stripe from 'stripe';
import { boeken } from '@/lib/boeken';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { boekId } = await request.json();

    const boek = boeken.find((b) => b.id === boekId);
    if (!boek) {
      return Response.json({ fout: 'Boek niet gevonden.' }, { status: 404 });
    }

    if (!boek.stripePrice || boek.stripePrice.startsWith('price_VERVANG')) {
      return Response.json(
        { fout: 'Dit boek is nog niet klaar om te bestellen. Neem contact op met Liv.' },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: boek.stripePrice,
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['BE', 'NL', 'LU', 'DE', 'FR'],
      },
      success_url: `${siteUrl}/winkel/succes`,
      cancel_url: `${siteUrl}/winkel/geannuleerd`,
      locale: 'nl',
      metadata: {
        boekId: boek.id,
        boekTitel: boek.titel,
      },
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('Stripe fout:', err);
    return Response.json(
      { fout: 'Er ging iets mis bij de betaling. Probeer opnieuw.' },
      { status: 500 }
    );
  }
}
