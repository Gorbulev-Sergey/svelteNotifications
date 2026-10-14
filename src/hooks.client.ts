import type { HandleClientError } from '@sveltejs/kit/hooks';

// Оставь пустым
export const handleClientError: HandleClientError = async () => {};

// Подключаем Bootstrap JS только на клиенте
if (typeof window !== 'undefined') {
	const defaultTheme = 'light';
	let theme = (await cookieStore.get('theme'))?.value;
	if (!theme) {
		cookieStore.set('theme', defaultTheme);
	}
	document.querySelector('[data-bs-theme]')?.setAttribute('data-bs-theme', theme || defaultTheme);
	import('bootstrap').catch(console.error);
}
