<script lang="ts">
	import { addToast } from '#lib/scripts/storeToasts.svelte.ts';
	import Column from './../lib/components/Column.svelte';
	let photos = $state([
		'https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/fdxdTRYsVwvVxCgEbUDtc-miqcvwzEVl/qhFrPxvsDQzBbf57BZ5N9xraeRaH9Urm/eH-MqZgC1fy4sZduosL_bQ.jpg',
		'https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/VwtA-FfEADI0vERLvfmj3mD936Svx7Ju/wV_6PA87X4MuICEuqLv6o9ZvhMgEDCHX/xQnx8-oSK8xQblXMxDhmQQ.jpg',
		'https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/aJmx5Tja3c5B_g5xAsUanTP6m7gtItes/H68eZAAxEqWCuVUnKelCI-4b0liEydpX/JxNkOHLS95ZxUz7CO70mPw.jpg',
		'https://avatars.mds.yandex.net/i?id=47443de053bf87260fd51cddefbe4302_l-5221595-images-thumbs&n=13',
		'https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/ACusMOUWH51eglmVNdCuH004h8v97nbn/-zhLpsqY6qt_h5PLo1JiwI_tqOYaTwz6/TbEl0HixSgH_nmGbD-fnFA.jpg',
		'https://i.pinimg.com/736x/48/b4/45/48b445754bd89723ac8ad3dc4c1d6f9c.jpg',
		'https://sun9-70.userapi.com/impg/QUSdah18e1NvZRkeKqNEHGoen10Rf5v_MtdknQ/GdAfXYgoWOs.jpg?size=1500x1001&quality=95&sign=b01ef5c031ff00a77d3b47dc0fab8508&type=album',
		'https://c1.35photo.ru/photobank/4/20955.jpg'
	]);
</script>

<Column>
	<div>
		<h1>Welcome to SvelteKit</h1>

		<div>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</div>
	</div>

	<div class="row xl:row-cols-4 row-cols-1 g-4">
		{#each photos as photo}
			<div class="col h-100">
				<div class="position-relative">
					<img
						class="img-fluid object-fit-cover w-100 rounded-3 hover-lift"
						style="height: 14em;"
						src={photo}
						alt=""
						loading="lazy"
					/>
					<button
						class="btn-icon btn-sm bg-1 bg-20 position-absolute z-3"
						style="top:.2em; right:.2em"
						title="Удалить"
						onclick={() => {
							photos = [...photos.filter((ph) => ph !== photo)];
							addToast({
								title: 'Фотография удалена',
								content: `<img class="img-fluid object-fit-cover w-100 rounded-3" style="height: 10em;" src='${photo}'/>`
							});
						}}
					>
						<i class="bi bi-x-lg"></i>
					</button>
				</div>
			</div>
		{/each}
	</div>
</Column>
