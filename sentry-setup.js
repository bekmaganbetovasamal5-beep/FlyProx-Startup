// Скрипт для автоматической настройки Sentry
import { execSync } from 'child_process';

console.log('🚀 Начинаю настройку Sentry...');

try {
  // Запускаем wizard с предустановленными ответами
  const answers = Buffer.from('n\nn\ny\ny\ny\n');

  const result = execSync('npx @sentry/wizard@latest -i nextjs --saas --org flyprox --project javascript-nextjs --no-telemetry', {
    input: answers,
    stdio: 'inherit'
  });

  console.log('\n✅ Sentry успешно настроен!');
} catch (error) {
  console.error('\n❌ Ошибка при настройке Sentry:', error.message);
}