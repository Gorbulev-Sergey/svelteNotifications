<script lang="ts">
	import type { IToast } from '#lib/scripts/storeToasts.svelte.ts';
	import { fade } from 'svelte/transition';

	interface IProps {
		toast: IToast;
		onClose(id?: string): void;
	}
	let { toast, onClose }: IProps = $props();
</script>

<div class="bg-1 rounded-3" style="min-width: 21em; max-width: 40vw;" transition:fade>
	<div class="{toast._class} d-flex flex-column gap-1 p-3 rounded-3">
		<section class="d-flex align-items-center gap-2">
			<div class="flex-grow-1 d-flex align-items-center ps-1 gap-2">
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
