<script lang="ts">
	import Footer from "src/components/Footer.svelte";

	import Header from "src/components/Header.svelte";
	import Main from "src/components/Main.svelte";
	import { Router, Route, Link } from "svelte-navigator";
	import Material from "./material/Material.svelte";
</script>

<svelte:head>
	<title>Museum</title>
</svelte:head>

<Router>
	<main style="display:flex;flex-direction:column;height:100%">
		<Header />

		<Route path="/">
			<Main />
		</Route>

		<Route path="/material/*mode/*materialRoute" component={Material}>
		</Route>

		<Footer />
	</main>
</Router>
