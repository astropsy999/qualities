import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

function init() {
  Sentry.init({
    dsn: 'https://43a10abff9ab403dbc417ebc8b97290d@o1375419.ingest.sentry.io/6683797',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

const logger = {
  init,
  log,
};

export default logger;
