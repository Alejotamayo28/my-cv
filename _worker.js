import { createRequestHandler } from '@cloudflare/next-on-pages'
export default {
  async fetch(request, env) {
    return createRequestHandler({
      // Asegúrate de que coincida con tu estructura
      buildId: 'wbjqH9YlwVC-kRjH9Qc6r', // Revisa en .next/BUILD_ID
    })(request)
  }
}
