// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://d42b6b8fc5d73070b7726f30b097ba00@o4510160514121728.ingest.us.sentry.io/4510160521330688",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events

    integrations: [Sentry.mongooseIntegration()],

  sendDefaultPii: true,
});