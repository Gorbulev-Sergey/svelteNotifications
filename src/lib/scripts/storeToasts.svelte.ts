let INTERVAL = 4000;

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

let timers = new Map();
export let STORE = $state<{ toasts: IToast[] }>({ toasts: [] });

export function addToast(toast: IToast) {
	toast.id ||= crypto.randomUUID();
	toast.timeout ||= INTERVAL;
	STORE.toasts.push(toast);

	if (toast.timeout) {
		timers.set(
			toast.id,
			setInterval(async () => deleteToast(toast?.id), toast.timeout)
		);
	}
}

export function deleteToast(id?: string) {
	const timer = timers.get(id);
	if (timer) {
		STORE.toasts = [...STORE.toasts.filter((t) => t.id !== id)];
		timers.delete(id);
		clearInterval(timer);
	}
}
