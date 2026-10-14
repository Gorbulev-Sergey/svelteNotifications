<script lang="ts">
	import type { IToast } from '#lib/scripts/storeToasts.svelte.ts';
	import { fade } from 'svelte/transition';

	interface IProps {
		toast: IToast;
		toasts: IToast[];
		onClose(id?: string): void;
	}
	let { toast, toasts, onClose }: IProps = $props();
</script>

<div class="bg-1 rounded-3" transition:fade>
	<div class="{toast._class} p-3 rounded-3" style="min-width: 20em;">
		<section class="d-flex align-self-center gap-2">
			<div class="flex-grow-1 d-flex align-self-center ps-1 gap-2">
				<b class="text-uppercase">{toast.title}</b>
			</div>
			<button
				class="btn-icon btn-sm theme-subtle"
				title="Закрыть"
				onclick={() => onClose(toast.id)}
			>
				<i class="bi bi-x-lg"></i>
			</button>
		</section>

		<div class="px-1">
			{@html toast.content}
		</div>
	</div>
</div>
