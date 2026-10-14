<script lang="ts">
	let { children } = $props();
</script>

<div class="d-flex flex-column gap-4">
	{@render children?.()}
</div>
