# Portfolio chatbot integration

This change replaces the portfolio's third-party n8n chat panel with a custom, responsive assistant styled to match the site's burgundy/neon identity. It calls a Vercel serverless function so the model credential stays server-side.

## Enable the AI endpoint

1. Create or use a Gemini API key in Google AI Studio.
2. In the Vercel project connected to this portfolio, open **Settings → Environment Variables**.
3. Add `GEMINI_API_KEY` with the key as its value for the deploy contexts where the assistant should answer.
4. Optionally set `GEMINI_MODEL`; the default is `gemini-2.5-flash`.
5. Save the variable and redeploy. Never put the key in React code, a `VITE_*` variable, a committed `.env` file, or a browser request.

The key is a prerequisite: without it, the UI remains usable but the API responds that the assistant is not configured. Gemini usage is billed/limited by the Google account and its project settings; check the applicable Google AI Studio terms and quotas.

If a key was shared in chat, committed, or otherwise exposed, revoke it in Google AI Studio and create a replacement before configuring Vercel.

## What the agent can answer

The server prompt is grounded in the public portfolio: Subhan's profile, listed services, skills, featured work, published availability, and public contact links. It is instructed to refuse unrelated requests, follow the visitor's language (including English, Urdu, and Roman Urdu), and not invent prices or delivery schedules that the site does not publish.

Chat messages are sent to `/api/chat` and forwarded to Gemini from the Vercel Function in `api/chat.js`. The function validates requests, caps chat history and per-message length, applies same-origin checking when an Origin header is present, and never returns the provider's raw error body.

For local function testing, run `vercel dev` (requires the Vercel CLI and a linked project). Vite's `npm run dev` can be used alongside it: Vite proxies `/api` requests to `http://localhost:3000`.

## Apply / deploy

Vercel detects the function directly at `api/chat.js`; there is no Netlify function dependency. Configure `GEMINI_API_KEY` in Vercel before deploying if you want AI responses; without it, the chatbot interface still loads and displays a configuration error when a visitor sends a message.
