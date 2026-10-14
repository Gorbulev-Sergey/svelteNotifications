import type { HandleClientError } from '@sveltejs/kit/hooks';

export const handleClientError: HandleClientError = async () => {
	// ничего не делаем — это просто для создания файла, если нужен
};

// Подключаем Bootstrap JS только на клиенте
if (typeof window !== 'undefined') {
	import('bootstrap').catch(console.error);
}
