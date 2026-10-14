let INTERVAL = 20000;

export interface IToast {
	id?: string;
	title?: string;
	content?: string;
	timeout?: number;
	_class?: string;
}

export function Toast(
	title?: string,
	content?: string,
	timeout = INTERVAL,
	_class = 'bg-1'
): IToast {
	return {
		id: crypto.randomUUID(),
		title,
		content,
		timeout,
		_class
	};
}

export let storeToasts = $state<{ toasts: IToast[] }>({ toasts: [] });

let timers = new Map();

export function addToast(toast: IToast) {
	toast.id ??= crypto.randomUUID();
	toast.timeout ??= INTERVAL;

	if (toast.timeout) {
		storeToasts.toasts.push(toast);
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

		let toastIndex = storeToasts.toasts.findIndex((t) => t.id === id);
		storeToasts.toasts.splice(toastIndex, 1);
	}
}
