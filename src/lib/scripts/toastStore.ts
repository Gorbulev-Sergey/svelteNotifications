import { writable } from 'svelte/store';

const timers = new Map();
export const toasts = writable<any[]>([]);

export function addToast(toast: any) {
	const id = crypto.randomUUID();
	const defaults = { id, type: 'info', dismissible: true, timeout: 3000 };
	const t = { ...defaults, ...toast };

	toasts.update((all) => [t, ...all]);

	if (t.timeout) {
		timers.set(
			id,
			setTimeout(() => dismissToast(id), t.timeout)
		);
	}

	return id;
}

export function dismissToast(id: string) {
	const timer = timers.get(id);
	if (timer) {
		clearTimeout(timer);
		timers.delete(id);
	}
	toasts.update((all) => all.filter((t) => t.id !== id));
}
