// app/api/signup/route.js

export async function POST(request) {
  const body = await request.json();
  console.log("Received dummy sign-up data:", body);

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Response(
    JSON.stringify({ success: true, message: "User registered successfully!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
