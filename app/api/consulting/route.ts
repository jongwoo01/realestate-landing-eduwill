type ConsultingPayload = {
  name?: unknown;
  phone?: unknown;
  transactionType?: unknown;
  propertyType?: unknown;
  location?: unknown;
  details?: unknown;
  privacyAgreed?: unknown;
};

const successfulWebhookStatuses = new Set([200, 201, 302]);

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isPrivacyAgreed(value: unknown) {
  return value === true || value === "true" || value === "on";
}

export async function POST(request: Request) {
  let body: ConsultingPayload;

  try {
    body = (await request.json()) as ConsultingPayload;
  } catch {
    return Response.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const payload = {
    name: asTrimmedString(body.name),
    phone: asTrimmedString(body.phone),
    transactionType: asTrimmedString(body.transactionType),
    propertyType: asTrimmedString(body.propertyType),
    location: asTrimmedString(body.location),
    details: asTrimmedString(body.details),
    privacyAgreed: isPrivacyAgreed(body.privacyAgreed),
  };

  if (!payload.privacyAgreed) {
    return Response.json({ message: "Privacy agreement is required" }, { status: 400 });
  }

  if (
    !payload.name ||
    !payload.phone ||
    !payload.transactionType ||
    !payload.propertyType ||
    !payload.location
  ) {
    return Response.json({ message: "Required fields are missing" }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json({ message: "Webhook URL is not configured" }, { status: 500 });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        createdAt: new Date().toISOString(),
      }),
      redirect: "manual",
    });

    if (successfulWebhookStatuses.has(webhookResponse.status)) {
      return Response.json({ ok: true }, { status: 200 });
    }

    return Response.json({ message: "Webhook submission failed" }, { status: 502 });
  } catch {
    return Response.json({ message: "Webhook request failed" }, { status: 502 });
  }
}
