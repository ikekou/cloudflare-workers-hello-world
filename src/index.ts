export default {
	async fetch(request: Request): Promise<Response> {
	  if (request.method === "POST") {
		const body = await request.text();
		console.log("Webhook received body:", body); // ← このログが出ます
		return new Response("Webhook received");
	  }

	  return new Response("Send a POST request", { status: 405 });
	}
  }
