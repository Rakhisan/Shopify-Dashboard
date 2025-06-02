export async function POST(request) {
  const body = await request.json();
  console.log("Received login data:", body);

  // Dummy check
  if (body.password === "Test@123") {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: "Wrong Password" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
