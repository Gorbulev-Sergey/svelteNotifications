<!-- src/lib/Toast.svelte (Svelte 5) -->
<script>
	import { fade } from 'svelte/transition';
	let { message = 'Не работает', type = 'info', dismissible = true, ondismiss } = $props();
</script>

<div class="toast {type}" transition:fade>
	<p>{message}</p>
	{#if dismissible}
		<button class="close" onclick={() => ondismiss?.()} aria-label="Dismiss notification">×</button>
	{/if}
</div>

<style>
	.toast {
		display: flex;
		gap: 1rem;
		width: 20rem;
		padding: 0.75rem 1.25rem;
		border-radius: 0.25rem;
		color: white;
		pointer-events: auto;
	}
	.info {
		background: SteelBlue;
	}
	.success {
		background: SeaGreen;
	}
	.error {
		background: IndianRed;
	}
	.close {
		margin-left: auto;
		background: none;
		border: 0;
		color: inherit;
		font-size: 1.25rem;
		cursor: pointer;
	}
</style>
