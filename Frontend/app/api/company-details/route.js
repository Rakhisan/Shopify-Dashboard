// ✅ No "useRouter" here
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received company profile:", body);

    // Logic to store data...

    return new Response(JSON.stringify({ message: "Saved successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
