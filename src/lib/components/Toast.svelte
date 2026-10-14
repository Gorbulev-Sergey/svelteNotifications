<script lang="ts">
	interface IProps {
		title: string;
	}
	let { title }: IProps = $props();
</script>

<div class="bg-1 p-4 rounded-3 shadow-sm" style="width: 50em">
	<b class="text-uppercase">{title}</b>
	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi praesentium libero tempora
		adipisci voluptatibus consequatur, est incidunt hic commodi dignissimos corporis quasi,
		necessitatibus neque quidem officiis atque nihil ducimus.
	</div>
</div>
