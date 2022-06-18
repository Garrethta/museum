<script lang="ts">
	let nav = false;
	const logo = require("../../public/logo.png").default;

	const bg = require("../../public/header-bg.jpg").default;
</script>

<header class="header">
	<div class="header__top" style={`background-image:url(${bg});`}>
		<div class="container">
			<div class="header__top-top">
				<nav class="menu">
					<div class="menu__btn" on:click={() => (nav = !nav)}>
						<span />
					</div>
					<ul class="menu__list">
						<a href="/">
							<img src={logo} alt="" />
						</a>
						<li class="menu__item"><a href="/">Аллея памяти</a></li>
						<li class="menu__item"><a href="/">Личности</a></li>
						<li class="menu__item"><a href="/">Воспоминания</a></li>
						<li class="menu__item">
							<a href="/">Современный взгляд</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<a class="logoButton" href="/">.</a>
	</div>
	{#if nav}
		<div class="header__mobile-nav">
			<ul>
				<li><a href="/">Аллея памяти</a></li>
				<li><a href="/">Личности</a></li>
				<li><a href="/">Воспоминания</a></li>
				<li><a href="/">Современный взгляд</a></li>
			</ul>
		</div>
	{/if}
</header>

<style lang="scss">
	.header {
		// background-image: url(../img/header_bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		// height: 100vh;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: white;
		&__top {
			// background-image: url(`{require('../../public/logo.png')});
			background-color: #aa0000;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center right;
			height: 230px;
			border-bottom: 1px solid rgba(161, 161, 161, 0.5);
			// margin-bottom: 260px;
			position: relative;
			.logoButton {
				display: none;
				width: 230px;
				height: 100%;
				position: absolute;
				z-index: 5;
				right: 0;
				top: 0;
				cursor: pointer;
			}
		}
		@media (max-width: 600px) {
			&__top {
				height: 140px;
				.logoButton {
					display: block;
				}
			}
			&__mobile-nav {
				position: absolute;
				width: 100%;
				background-color: #000;
				padding: 20px;
				z-index: 50;
				ul {
					list-style: none;
					margin: 0;
					padding: 0;
					display: flex;
					flex-direction: column;
					gap: 10px;
					li {
						margin: 0;
						padding: 0;
					}
				}
			}
			.menu {
				&__list {
					display: none;
					position: absolute;
					text-align: center;
					width: 100%;
					top: 75px;
					left: 0;
				}
				&__item {
					height: 40px;
					&:hover {
						border: none;
						text-decoration: underline 1px solid white;
					}
				}
				&__item + &__item {
					margin-left: 0;
				}
				&__list li + li {
					padding-left: 0;
				}
				&__btn {
					// margin-left: auto;
					top: 50px;
					width: 30px;
					height: 30px;
					position: relative;
					cursor: pointer;
					span {
						width: 100%;
						height: 3px;
						background-color: white;
						top: 14px;
						position: absolute;
					}
					&::after,
					&::before {
						content: "";
						width: 100%;
						height: 3px;
						background-color: white;
						position: absolute;
					}
					&::after {
						top: 0;
					}
					&::before {
						bottom: 0;
					}
				}
			}
		}
		@media (max-width: 450px) {
			&__top {
				height: 110px;
				.logoButton {
					width: 170px;
				}
			}
		}
	}
	.menu {
		&__list {
			list-style: none;
			margin: 0 0;
			display: flex;
			justify-content: flex-start;
			margin-top: 0;
			padding-top: 150px;
			position: relative;
			img {
				position: absolute;
				width: 300px;
				top: 0px;
			}
		}
		&__item {
			height: 23px;
			&:hover {
				border-bottom: 2px solid white;
			}
		}
		&__item + &__item {
			margin-left: 40px;
		}
		@media (max-width: 450px) {
			&__btn {
				top: 40px;
			}
		}
	}
</style>
