# Sentry Integration Guide

## 🚀 Quick Start

### 1. Get Your DSN from Sentry.io

1. Go to [sentry.io](https://sentry.io) and log in
2. Go to Settings → Organizations → flyprox → Projects → javascript-nextjs
3. Copy your **DSN** (Data Source Name)
4. It looks like: `https://[public-key]@sentry.io/[project-id]`

### 2. Configure Your DSN

Edit `.env.local` and replace the placeholder DSN:

```bash
# Get your actual DSN from Sentry.io
SENTRY_DSN=https://your-actual-dsn@o0.ingest.sentry.io/0
NEXT_PUBLIC_SENTRY_DSN=https://your-actual-dsn@o0.ingest.sentry.io/0
```

### 3. Test Sentry Integration

#### Client-side Errors:
Visit: `http://localhost:3000/test-sentry`

- Click "Throw Captured Error" - sends error to Sentry
- Click "Throw Unhandled Error" - crashes page and sends to Sentry

#### Server-side Errors:
Visit these URLs in your browser:

- `http://localhost:3000/api/test-error?type=throw`
- `http://localhost:3000/api/test-error?type=async`
- `http://localhost:3000/api/test-error?type=promise`

## 📁 Files Created

| File | Purpose |
|------|---------|
| `sentry.client.config.js` | Client-side Sentry configuration |
| `sentry.server.config.js` | Server-side Sentry configuration |
| `sentry.properties` | Sentry CLI configuration |
| `next.config.js` | Next.js with Sentry webpack config |
| `pages/test-sentry.js` | Test page for client errors |
| `pages/api/test-error.js` | Test API for server errors |
| `.env.local` | Environment variables (DSN) |

## 🛠️ Available Scripts

```bash
# Build with Sentry source maps
npm run sentry:build

# Build and start production server
npm run sentry:test

# Upload source maps (requires SENTRY_AUTH_TOKEN)
npm run sentry:emit
```

## 🔧 Advanced Configuration

### Source Maps
For production deployments, upload source maps:

1. Create auth token at: https://sentry.io/settings/account/api/auth-tokens/
2. Add to `.env.local`:
   ```
   SENTRY_AUTH_TOKEN=your-token-here
   ```
3. Run: `npm run build`
4. Source maps are automatically uploaded

### Custom Context
Add custom context to errors:

```javascript
import * as Sentry from '@sentry/nextjs';

Sentry.setUser({
  id: 'user123',
  email: 'user@example.com',
  username: 'johndoe'
});

Sentry.setTag('page', 'homepage');
Sentry.setExtra('data', { userId: 123 });
```

### Performance Monitoring
Monitor API response times and page loads:

```javascript
// In your API routes
const transaction = Sentry.startTransaction({
  name: 'API Request',
  op: 'http.server'
});

// Your code here

transaction.finish();
```

## 📊 Check Your Dashboard

After triggering errors:
1. Go to [sentry.io](https://sentry.io)
2. Navigate to your project: flyprox/javascript-nextjs
3. You should see errors appearing in Issues tab
4. Check Performance tab for timing data

## ⚡ Common Issues

### No errors appearing?
- Check your DSN is correct in `.env.local`
- Restart your development server
- Check browser console for configuration errors

### Source maps not working?
- Ensure `SENTRY_AUTH_TOKEN` is set
- Run `npm run build` not `npm run dev`
- Check webpack logs for upload status

### Want to filter errors?
Add filters in `sentry.client.config.js`:

```javascript
Sentry.init({
  // ... other config
  beforeSend(event) {
    // Filter out certain errors
    if (event.exception?.values?.[0]?.type === 'ChunkLoadError') {
      return null;
    }
    return event;
  }
});
```

## 🎯 Production Checklist

- [ ] Set real DSN in production environment variables
- [ ] Enable source maps for production builds
- [ ] Set up alerts for error thresholds
- [ ] Configure release tracking
- [ ] Add user context for better debugging
- [ ] Set up performance monitoring budgets
- [ ] Test error reporting in production

## 📚 Need Help?

- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Help Center](https://help.sentry.io)
- [Next.js Documentation](https://nextjs.org/docs)