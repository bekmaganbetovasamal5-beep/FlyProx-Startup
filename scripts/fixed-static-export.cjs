#!/usr/bin/env node

/**
 * Fixed Static Export Script for Next.js + GitHub Pages
 * Generates proper HTML files with React hydration
 */

const fs = require('fs');
const path = require('path');

// HTML template with proper React scripts and hydration
function createHtmlTemplate(page, jsFiles, cssFiles) {
  const jsTags = jsFiles.map(file => `<script defer src="${file}"></script>`).join('\n    ');
  const cssTags = cssFiles.map(file => `<link rel="stylesheet" href="${file}">`).join('\n    ');

  return `<!DOCTYPE html>
<html lang="en" className="dark">
<head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <meta name="keywords" content="AI voice agents, sales automation, B2B outbound, lead generation, FlyProx AI" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  ${cssTags}
  <style>
    * {
      font-family: 'Inter', sans-serif;
    }
    body {
      margin: 0;
      background-color: #111827;
      color: white;
    }
    #__next {
      min-height: 100vh;
    }
  </style>
</head>
<body>
  <div id="__next">
    <!-- Static content will be injected here -->
    <div class="static-content-placeholder"></div>
  </div>

  <!-- React Runtime and Hydration -->
  ${jsTags}

  <script>
    // React hydration will happen automatically when scripts load
    console.log('FlyProx AI - Static Export with React Hydration');
  </script>
</body>
</html>`;
}

// Read generated static content
function readStaticContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract content between div#__next
    const match = content.match(/<div id="__next">(.+?)<\/div><\/body><\/html>$/s);
    if (match) {
      return match[1];
    }
    return content;
  } catch (error) {
    console.error('Error reading static content:', error);
    return '';
  }
}

// Main generation process
function generateStaticExport() {
  const outDir = path.join(__dirname, '..', 'out');

  if (!fs.existsSync(outDir)) {
    console.error('out directory not found. Run npm run build first.');
    process.exit(1);
  }

  // Get static files
  const staticDir = path.join(outDir, '_next', 'static');
  const jsDir = path.join(staticDir, 'chunks');
  const cssDir = path.join(staticDir, 'css');

  // Find JS and CSS files
  let jsFiles = [];
  let cssFiles = [];

  if (fs.existsSync(jsDir)) {
    jsFiles = fs.readdirSync(jsDir)
      .filter(file => file.endsWith('.js'))
      .map(file => `/_next/static/chunks/${file}`);
  }

  if (fs.existsSync(cssDir)) {
    cssFiles = fs.readdirSync(cssDir)
      .filter(file => file.endsWith('.css'))
      .map(file => `/_next/static/css/${file}`);
  }

  console.log('Found JavaScript files:', jsFiles);
  console.log('Found CSS files:', cssFiles);

  // Pages configuration
  const pages = [
    { name: 'index', title: 'FlyProx AI - Increase Your Sales Meetings by 32%', description: 'AI-powered outbound calling that delivers 32% more booked meetings' },
    { name: 'pricing', title: 'Pricing - FlyProx AI', description: 'Transparent pricing for AI voice agents' },
    { name: 'sign-in', title: 'Sign In - FlyProx AI', description: 'Sign in to your FlyProx AI account' },
    { name: 'thank-you', title: 'Thank You - FlyProx AI', description: 'Thank you for signing up with FlyProx AI' },
    { name: 'help-center', title: 'Help Center - FlyProx AI', description: 'Get help with FlyProx AI voice agents' }
  ];

  // Generate HTML files
  pages.forEach(page => {
    const staticFilePath = path.join(outDir, page.name + '.html');
    const staticContent = readStaticContent(staticFilePath);

    const htmlTemplate = createHtmlTemplate(page, jsFiles, cssFiles);
    const finalHtml = htmlTemplate.replace(
      '<div class="static-content-placeholder"></div>',
      staticContent || '<div>Loading...</div>'
    );

    const outputPath = path.join(outDir, page.name === 'index' ? 'index.html' : `${page.name}.html`);
    fs.writeFileSync(outputPath, finalHtml, 'utf8');
    console.log(`Generated: ${outputPath}`);
  });

  // Copy _next directory
  const targetNextDir = path.join(outDir, '_next');
  if (!fs.existsSync(targetNextDir)) {
    const sourceNextDir = path.join(__dirname, '..', '.next', 'static');
    if (fs.existsSync(sourceNextDir)) {
      // Copy directory recursively
      copyRecursiveSync(sourceNextDir, targetNextDir);
    }
  }

  console.log('\\n✅ Static export completed with React hydration!');
  console.log('📁 Generated files:');
  pages.forEach(page => {
    const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
    console.log(`   - ${fileName}`);
  });
  console.log('\\n🚀 Ready for GitHub Pages deployment with full React functionality!');
}

// Helper function to copy directories recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Run the generation
generateStaticExport();