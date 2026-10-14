<script lang="ts">
	import { toastsStore } from '#lib/scripts/myToastsStore.svelte.ts';
</script>

<div
	class="position-absolute d-flex flex-column-reverse gap-3 bottom-0 start-0 end-0 p-5"
	style="z-index: 3000;"
>
	{#each toastsStore.toasts as toast, i}
		<div class="d-flex justify-content-center">
			<div class="bg-2 p-3 rounded-3" style="min-width: 16em;">
				<section class="d-flex align-self-center gap-2">
					<div class="flex-grow-1 d-flex align-self-center ps-1 gap-2">
						<small class="badge bg-white badge-subtle rounded-3">{toast.id}</small>
						<b class="text-uppercase">{toast.title}</b>
					</div>
					<button
						class="btn-icon btn-sm"
						title="Закрыть"
						onclick={async () => {
							toastsStore.toasts = [...toastsStore.toasts.filter((t) => t.id !== toast.id)];
						}}
					>
						<i class="bi bi-x-lg"></i>
					</button>
				</section>

				<div class="px-1">{@html toast.content}</div>
			</div>
		</div>
	{/each}
</div>
