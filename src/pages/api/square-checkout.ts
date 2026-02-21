import type { APIContext } from "astro";

export const prerender = false;

const paymentOptions = {
  full: {
    amount: 500000,
    name: "Paquete Restaurante de Éxito - Pago Unico",
  },
  reserve: {
    amount: 50000,
    name: "Reserva Paquete Restaurante de Éxito",
  },
};

export async function POST({ request, locals }: APIContext) {
  const body = await request.json().catch(() => ({}));
  const type = body?.type === "reserve" ? "reserve" : "full";
  const runtimeEnv = (locals as any)?.runtime?.env;
  const accessToken =
    runtimeEnv?.SQUARE_ACCESS_TOKEN ?? import.meta.env.SQUARE_ACCESS_TOKEN;
  const locationId =
    runtimeEnv?.SQUARE_LOCATION_ID ?? import.meta.env.SQUARE_LOCATION_ID;
  const baseUrl =
    runtimeEnv?.SQUARE_BASE_URL ?? import.meta.env.SQUARE_BASE_URL;

  const missing = [];
  if (!accessToken) missing.push("SQUARE_ACCESS_TOKEN");
  if (!locationId) missing.push("SQUARE_LOCATION_ID");
  if (!baseUrl) missing.push("SQUARE_BASE_URL");

  if (missing.length > 0) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Square no configurado",
        missing,
      }),
      {
        headers: { "content-type": "application/json" },
      },
    );
  }

  const option = paymentOptions[type];
  const lineItems = [
    {
      name: option.name,
      quantity: "1",
      base_price_money: {
        amount: option.amount,
        currency: "USD",
      },
    },
  ];

  if (type === "full") {
    lineItems.push({
      name: "Costo de envío",
      quantity: "1",
      base_price_money: {
        amount: 9900,
        currency: "USD",
      },
    });
  }
  const response = await fetch(
    `${baseUrl}/v2/online-checkout/payment-links`,
    {
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
          line_items: lineItems,
        },
    }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Error creando el checkout",
        details: errorBody,
        status: response.status,
      }),
      {
        headers: { "content-type": "application/json" },
      },
    );
  }

  const data = await response.json();
  const url = data?.payment_link?.url;

  if (!url) {
    return new Response(
      JSON.stringify({ ok: false, error: "Checkout inválido" }),
      {
        headers: { "content-type": "application/json" },
      },
    );
  }

  return new Response(JSON.stringify({ ok: true, url }), {
    headers: { "content-type": "application/json" },
  });
}
