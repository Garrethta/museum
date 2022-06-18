<script lang="ts">
	// export let materialRoute: string;
	export let mode: "new" | "old";

	type Material = {
		createdTime: string;
		id: string;
		fields: {
			Deploy: boolean;
			Name: string;
			Text: string;
			Attachments?: string[];
			ID: number;
		};
	};

	let fetchMaterial = async () => {
		let res = await fetch(
			`https://api.airtable.com/v0/appOUfEIThjJfxZ4q/${mode}?api_key=keyYi2iEDJGoFI90C`
		);
		let result = (await res.json()) as Material;
		console.log(result, "result");
		return result;
	};
</script>

<svelte:head>
	<title>Material</title>
</svelte:head>

<div>
	{#await fetchMaterial()}
		<div style="text-align: center; padding: 20px 0;">
			<span style="font-size: 25px;">ЗАГРУЗКА...</span>
		</div>
	{:then result}
		<div class="container">
			<h1 style="text-align:center;">
				{result.fields.Name}
			</h1>
			<div style="display:flex; gap: 20px;">
				{#if result.fields.Attachments && result.fields.Attachments.length > 0}
					{#each result.fields.Attachments as img}
						<img src={img} alt="" />
					{/each}
				{/if}
			</div>
			<div
				style="width:100%; display:flex; justify-content: center; text-align: center;"
			>
				<div style="padding: 0 15px;">
					{#each result.fields.Text.split("|") as t}
						<p>{t}</p>
					{/each}
				</div>
			</div>
		</div>
	{/await}
</div>
