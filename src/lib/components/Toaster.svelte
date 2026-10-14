<script lang="ts">
	import { deleteToast, STORE } from '#lib/scripts/storeToasts.svelte.ts';
	import Toast from './Toast.svelte';
</script>

<div
	class="position-absolute d-flex flex-column-reverse gap-3 bottom-0 start-50 p-5"
	style="z-index: 3000; transform: translateX(-50%);"
>
	{#each STORE.toasts as toast}
		<Toast {toast} toasts={STORE.toasts} onClose={() => deleteToast(toast.id)} />
	{/each}
</div>
