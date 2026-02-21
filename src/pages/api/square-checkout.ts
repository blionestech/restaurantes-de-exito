export const prerender = false;

const paymentOptions = {
  full: {
    amount: 500000,
    name: "Paquete Restaurante de Éxito - Pago de contado",
  },
  reserve: {
    amount: 50000,
    name: "Reserva Paquete Restaurante de Éxito",
  },
};

export async function POST({ request }: { request: Request }) {
  const body = await request.json().catch(() => ({}));
  const type = body?.type === "reserve" ? "reserve" : "full";
  const accessToken = import.meta.env.SQUARE_ACCESS_TOKEN;
  const locationId = import.meta.env.SQUARE_LOCATION_ID;
  const baseUrl = import.meta.env.SQUARE_BASE_URL;

  if (!accessToken || !locationId || !baseUrl) {
    return new Response(JSON.stringify({ error: "Square no configurado" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  const option = paymentOptions[type];
  const response = await fetch(`${baseUrl}/v2/checkout/${locationId}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
      "square-version": "2024-01-17",
    },
    body: JSON.stringify({
      idempotency_key: crypto.randomUUID(),
      order: {
        location_id: locationId,
        line_items: [
          {
            name: option.name,
            quantity: "1",
            base_price_money: {
              amount: option.amount,
              currency: "USD",
            },
          },
        ],
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    return new Response(
      JSON.stringify({
        error: "Error creando el checkout",
        details: errorBody,
      }),
      {
        status: response.status,
        headers: { "content-type": "application/json" },
      },
    );
  }

  const data = await response.json();
  const url = data?.checkout?.checkout_page_url;

  if (!url) {
    return new Response(JSON.stringify({ error: "Checkout inválido" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ url }), {
    headers: { "content-type": "application/json" },
  });
}
