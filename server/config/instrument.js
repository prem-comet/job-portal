import * as Sentry from "@sentry/node";
// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://a6f25fb0e17077d9fd5089476e192271@o4510193126473728.ingest.us.sentry.io/4510193132699648",

  integrations: [Sentry.mongooseIntegration()],

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});