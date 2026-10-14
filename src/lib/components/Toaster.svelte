<script lang="ts">
	import { fade } from 'svelte/transition';
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
				return 'top:0; left:0;';
			case Position.topCenter:
				return 'top:0; left:50%; transform: translateX(-50%);';
			case Position.topRight:
				return 'top:0; right:0;';
			case Position.bottomLeft:
				return 'bottom:0; left:0;';
			case Position.bottomCenter:
				return 'bottom:0; left:50%; transform: translateX(-50%);';
			case Position.bottomRight:
				return 'bottom:0; right:0;';
		}
	});

	let alignItems = $derived.by(() => {
		switch (position) {
			case (Position.topLeft, Position.bottomLeft): {
				return 'start';
			}
			case (Position.topCenter, Position.bottomCenter): {
				return 'center';
			}
			case (Position.topRight, Position.bottomRight): {
				return 'end';
			}
		}
	});

	let { position = Position.bottomCenter }: IProps = $props();
</script>

<div
	class="position-absolute d-flex flex-column-reverse align-items-{alignItems} gap-3 p-5"
	transition:fade
	style="z-index: 10000; {positionStyle}"
>
	{#each STORE.toasts as toast}
		<Toast {toast} onClose={() => deleteToast(toast.id)} />
	{/each}
</div>
