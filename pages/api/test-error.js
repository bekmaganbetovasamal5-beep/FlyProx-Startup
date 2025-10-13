// This will configure Sentry for server-side errors
import '../../sentry.server.config.js';

export default function handler(req, res) {
  try {
    // Simulate different types of errors based on query parameter
    const { type } = req.query;

    switch (type) {
      case 'throw':
        throw new Error('This is a test server-side error from API route!');

      case 'async':
        // Simulate async error
        setTimeout(() => {
          throw new Error('Async error in API route');
        }, 100);
        break;

      case 'promise':
        // Promise rejection
        Promise.reject(new Error('Unhandled promise rejection in API'));
        break;

      default:
        res.status(200).json({
          message: 'Error testing API endpoint',
          usage: 'Add ?type=throw|async|promise to test different errors'
        });
    }
  } catch (error) {
    // Sentry will automatically capture this error
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
      sentToSentry: true
    });
  }
}