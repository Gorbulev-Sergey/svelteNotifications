export interface IToast {
	id: string;
	title?: string;
	content?: string;
}

export function Toast(title?: string, content?: string): IToast {
	return {
		id: crypto.randomUUID(),
		title,
		content
	};
}

export let toastsStore = $state<{ toasts: IToast[] }>({ toasts: [] });
