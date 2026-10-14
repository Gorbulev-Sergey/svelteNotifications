<script lang="ts">
	import { storeToasts, type IToast } from '#lib/scripts/storeToasts.svelte.ts';
	import { fade } from 'svelte/transition';
</script>

{#snippet toastSnippet(toast: IToast)}
	<div class="{toast._class} p-3 rounded-3" style="min-width: 16em;" transition:fade>
		<section class="d-flex align-self-center gap-2">
			<div class="flex-grow-1 d-flex align-self-center ps-1 gap-2">
				<small class="badge bg-white badge-subtle rounded-3"
					>{new Date().toLocaleTimeString()}</small
				>
				<b class="text-uppercase">{toast.title}</b>
			</div>
			<button
				class="btn-icon btn-sm theme-subtle"
				title="Закрыть"
				onclick={async () => {
					storeToasts.toasts = [...storeToasts.toasts.filter((t) => t.id !== toast.id)];
				}}
			>
				<i class="bi bi-x-lg"></i>
			</button>
		</section>

		<div class="px-1">{@html toast.content}</div>
	</div>
{/snippet}

<div
	class="position-absolute d-flex flex-column-reverse gap-3 bottom-0 start-50 p-5"
	style="z-index: 3000; transform: translateX(-50%);"
>
	{#each storeToasts.toasts as toast}
		{@render toastSnippet?.(toast)}
	{/each}
</div>
