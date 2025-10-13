import * as Sentry from '@sentry/nextjs';

export default function TestSentry() {
  const throwClientError = () => {
    try {
      throw new Error('This is a test client-side error from Next.js!');
    } catch (error) {
      Sentry.captureException(error);
      alert('Error sent to Sentry! Check your dashboard.');
    }
  };

  const throwUnhandledError = () => {
    // This will trigger an unhandled error
    const obj = null;
    obj.someProperty; // This will throw TypeError
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Sentry Error Testing</h1>
      <p>Test different types of errors to verify Sentry is working:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={throwClientError}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff6b6b',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Throw Captured Error
        </button>

        <button
          onClick={throwUnhandledError}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4ecdc4',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Throw Unhandled Error (Will crash page)
        </button>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Make sure you have configured your SENTRY_DSN in .env.local</li>
          <li>Click "Throw Captured Error" to send a handled error</li>
          <li>Click "Throw Unhandled Error" to trigger a crash</li>
          <li>Check your Sentry dashboard at sentry.io</li>
        </ol>
      </div>
    </div>
  );
}