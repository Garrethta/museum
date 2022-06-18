<script lang="ts">
	import { Router, Route, Link } from "svelte-navigator";

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
	type Materials = Material[];

	let loader = true;
	let fetchOlds = async () => {
		let res = await fetch(
			"https://api.airtable.com/v0/appOUfEIThjJfxZ4q/Old?api_key=keyYi2iEDJGoFI90C&filterByFormula=(%7BDeploy%7D%20%3D1)"
		);
		let result = (await res.json()).records as Materials;
		console.log(result, "result");
		loader = false;
		return result;
	};
	let fetchNews = async () => {
		let res = await fetch(
			"https://api.airtable.com/v0/appOUfEIThjJfxZ4q/New?api_key=keyYi2iEDJGoFI90C&filterByFormula=(%7BDeploy%7D%20%3D1)"
		);
		let result = (await res.json()).records as Materials;
		console.log(result, "result");
		loader = false;
		return result;
	};
</script>

<section class={`advantages ${loader ? "loading" : ""}`}>
	<div class="container">
		<div class="advantages__title title">АВАНГАРД</div>
		{#await fetchOlds()}
			<span style="font-size: 25px;">ЗАГРУЗКА...</span>
		{:then result}
			<div
				style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"
			>
				{#each result as e}
					<Link to={`material/${"old"}/${e.id}`}>
						<div
							style="display: flex; flex-direction:column; align-items: center"
						>
							{#if !e.fields.Attachments}
								<div
									style="width: 300px;height: 300px;background-color: #000;display: flex;justify-content: center;align-items: center;color: #fff;"
								>
									НЕТ ИЗОБРАЖЕНИЯ
								</div>
							{:else}
								<img
									src={e.fields.Attachments[0]}
									alt=""
									style="border: 3px solid #000"
								/>
							{/if}

							<span style="margin-top:20px; font-size:25px;"
								>{e.fields.Name}</span
							>
						</div>
					</Link>
				{/each}
			</div>
		{/await}
	</div>
</section>

<section class={`advantages noAfter ${loader ? "loading" : ""}`}>
	<div class="container">
		<div class="advantages__title title">НАШИ СОВРЕМЕННИЦЫ</div>
		{#await fetchNews()}
			<span style="font-size: 25px;">ЗАГРУЗКА...</span>
		{:then result}
			<div
				style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"
			>
				{#each result as e}
					<Link to={`material/${"new"}/${e.id}`}>
						<div
							style="display: flex; flex-direction:column;align-items: center"
						>
							{#if !e.fields.Attachments}
								<div
									style="width: 300px;height: 300px;background-color: #000;display: flex;justify-content: center;align-items: center;color: #fff;"
								>
									НЕТ ИЗОБРАЖЕНИЯ
								</div>
							{:else}
								<img
									src={e.fields.Attachments[0]}
									alt=""
									style="border: 3px solid #000"
								/>
							{/if}

							<span style="margin-top:20px; font-size:25px;"
								>{e.fields.Name}</span
							>
						</div>
					</Link>
				{/each}
			</div>
		{/await}
	</div>
</section>

<!-- <section class={`advantages noAfter ${!old ? 'loading' : ''}`}>
	<div class="container">
	  <div class="advantages__title title" style={{color: '#fff'}}>
		НАШИ СОВРЕМЕННИЦЫ
	  </div>
	  {news && <div style={{display:'flex', justifyContent:'center'}}>
		{news.map((e) => {
		  return (
			<Link to={`/new/${e.id}`}>
			  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{!e.fields.Attachments &&
				  <div style={{
					width: '300px',
					height: '300px',
					backgroundColor: '#000',
					display:'flex',
					justifyContent:'center',
					alignItems:'center',
					color:'#fff'
				  }}>
					НЕТ ИЗОБРАЖЕНИЯ
				  </div>}
				{e.fields.Attachments && <img src={e.fields.Attachments[0]} alt="" style={{border:'3px solid #000'}}/>}
				<span style={{marginTop:'20px', fontSize:'25px'}}>{e.fields.Name}</span>
			  </div>
			</Link>
		  )
		})}
	  </div>}
	  {!news && <span style={{fontSize:'25px'}}>ЗАГРУЗКА...</span>}
	</div>
  </section> -->
<style lang="scss">
	.advantages {
		&.loading {
			&::after {
				display: none !important;
			}
		}
		&.noAfter {
			margin-top: 30px;
			&::after {
				display: none !important;
			}
		}
		margin-top: 50px;
		text-align: center;
		position: relative;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			height: 250px;
			bottom: -150px;
			background-color: #aa0000;
			z-index: -1;
		}
		&__title {
			font-weight: bold;
			margin: 0 auto 20px auto;
			max-width: 740px;
		}
		&__text {
			max-width: 730px;
			margin: 0 auto 70px auto;
		}
		&__items {
			display: flex;
			justify-content: space-between;
			margin-bottom: 55px;
		}
		&__btn {
			display: inline-block;
			padding: 14px 50px;
			background-color: #4985ff;
			box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
			border-radius: 30px;
			color: #fff;
			text-align: center;
			margin-bottom: 120px;
		}
		@media (max-width: 850px) {
			margin-top: 60px;
			&__items {
				flex-wrap: wrap;
			}
		}
		@media (max-width: 450px) {
			&__btn {
				margin-bottom: 55px;
			}
		}
	}
</style>
