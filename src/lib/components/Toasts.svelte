<script lang="ts">
	import { dismissToast, toasts } from '#lib/scripts/toastStore.ts';
	import Toast1 from './Toast1.svelte';
</script>

<div class="toast-container" role="region" aria-live="polite" aria-label="Notifications">
	{#each $toasts as toast (toast.id)}
		<Toast1 {...toast} ondismiss={() => dismissToast(toast.id)} />
	{/each}
</div>

<style>
	.toast-container {
		position: fixed;
		top: 1rem;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		z-index: 1000;
		pointer-events: none;
	}
</style>
