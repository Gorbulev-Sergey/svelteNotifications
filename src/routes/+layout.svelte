<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap-icons/font/bootstrap-icons.min.css';
	import { addToast, Toast } from '#lib/scripts/storeToasts.svelte.ts';
	import Toaster from '#lib/components/Toaster.svelte';

	let { children } = $props();

	function toggleTheme() {
		let theme = document.querySelector('[data-bs-theme]');
		theme?.setAttribute(
			'data-bs-theme',
			theme.getAttribute('data-bs-theme') == 'light' ? 'dark' : 'light'
		);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="sticky-top w-100 bg-1">
	<div class="d-flex align-items-center p-3">
		<div class="flex-grow-1 d-flex align-self-center justify-content-end">
			<div class="d-flex align-items-center gap-2">
				<div class="d-flex gap-2 align-items-center">
					<button
						class="btn-sm btn-solid theme-success rounded-2"
						onclick={() =>
							addToast({
								title: 'Всем привет!',
								content: 'Новое уведомлениею. Новое уведомлениею.',
								_class: 'bg-info'
							})}>Тост</button
					>
					<button class="btn btn-sm bg-2 rounded-2" onclick={toggleTheme}>Тема</button>
				</div>
				<button
					class="btn btn-sm bg-2 rounded-3"
					type="button"
					data-bs-toggle="menu"
					aria-expanded="false"
				>
					<div>Toggle menu</div>
					<i class="bi bi-chevron-expand"></i>
				</button>
				<div class="menu rounded-3 border-0">
					{#each new Array(5) as item, i}
						<a class="menu-item rounded-3" href="/">Menu item {i + 1}</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container my-4" style="">
	{@render children()}
</div>

<Toaster />

<style>
	/* Настройка цветов фона для светлой и темной темы */
	:global(:root) {
		--bs-bg-body: light-dark(var(--bs-white), var(--bs-pewter-800));
	}
</style>
