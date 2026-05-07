import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const input = req.nextUrl.searchParams.get('input') || '';
  if (input.length < 3) return NextResponse.json({ predictions: [] });

  const key = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY;
  if (!key) return NextResponse.json({ predictions: [] });

  const url = new URL('https://maps.googleapis.com/maps/api/place/autocomplete/json');
  url.searchParams.set('input', input);
  url.searchParams.set('key', key);
  url.searchParams.set('components', 'country:au|country:nz|country:gb');
  url.searchParams.set('types', 'address');
  url.searchParams.set('language', 'en');

  const res = await fetch(url.toString());
  const data = (await res.json()) as {
    predictions?: Array<{
      place_id: string;
      description: string;
      structured_formatting?: { main_text: string; secondary_text: string };
    }>;
  };

  return NextResponse.json({ predictions: data.predictions || [] });
}
