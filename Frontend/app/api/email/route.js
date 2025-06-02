export async function POST(request) {
  const body = await request.json();
  console.log("Received login data:", body);

  // Dummy check
  if (body.email === "test@example.com") {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: "Email not found" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
