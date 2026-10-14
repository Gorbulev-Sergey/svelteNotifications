<script lang="ts">
	import { deleteToast, STORE } from '#lib/scripts/storeToasts.svelte.ts';
	import Toast from './Toast.svelte';
</script>

<div
	class="position-absolute d-flex flex-column-reverse align-items-center gap-3 bottom-0 start-50 p-5"
	style="z-index: 10000; transform: translateX(-50%);"
>
	{#each STORE.toasts as toast}
		<Toast {toast} onClose={() => deleteToast(toast.id)} />
	{/each}
</div>
