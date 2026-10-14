let INTERVAL = 5000;

export interface IToast {
	id?: string;
	title?: string;
	content?: string;
	timeout?: number;
}

export function Toast(title?: string, content?: string, timeout = INTERVAL): IToast {
	return {
		id: crypto.randomUUID(),
		title,
		content,
		timeout
	};
}

export let storeToasts = $state<{ toasts: IToast[] }>({ toasts: [] });

let timers = $state(new Map());

export function addToast(toast: IToast) {
	toast.id ||= crypto.randomUUID();
	toast.timeout ||= INTERVAL;
	storeToasts.toasts.push(toast);

	if (toast.timeout) {
		timers.set(
			toast.id,
			setInterval(async () => dismissToast(toast?.id), toast.timeout)
		);
	}
}

export function dismissToast(id?: string) {
	const timer = timers.get(id);
	if (timer) {
		clearInterval(timer);
		timers.delete(id);
	}
	storeToasts.toasts = [...storeToasts.toasts.filter((t) => t.id !== id)];
}
