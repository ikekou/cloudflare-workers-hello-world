export default {
	async fetch(): Promise<Response> {
		const now = new Date().toISOString();

		// ログに出す（tail で見える）
		console.log("Current time:", now);

		// クライアントには JSON を返す
		return Response.json({ now });
	}
}
