<script lang="ts">
	import { deleteToast, STORE } from '#lib/scripts/storeToasts.svelte.ts';
	import Toast from './Toast.svelte';

	interface IProps {
		position: number;
	}

	export const Position = {
		topLeft: 1,
		topCenter: 2,
		topRight: 3,
		bottomLeft: 4,
		bottomCenter: 5,
		bottomRight: 6
	} as const;

	let positionStyle = $derived.by(() => {
		switch (position) {
			case Position.topLeft:
				return 'top:0; left:0; align-items:flex-start;';
			case Position.topCenter:
				return 'top:0; left:50%; transform:translateX(-50%); align-items:center;';
			case Position.topRight:
				return 'top:0; right:0; align-items:flex-end;';
			case Position.bottomLeft:
				return 'bottom:0; left:0; align-items:flex-start;';
			case Position.bottomCenter:
				return 'bottom:0; left:50%; transform: translateX(-50%); align-items:center;';
			case Position.bottomRight:
				return 'bottom:0; right:0; align-items:flex-end;';
		}
	});

	let { position = Position.bottomCenter }: IProps = $props();
</script>

<div
	class="position-absolute d-flex flex-column-reverse gap-3 p-5"
	style="z-index: 10000; {positionStyle}"
>
	{#each STORE.toasts as toast}
		<Toast {toast} onClose={() => deleteToast(toast.id)} />
	{/each}
</div>
