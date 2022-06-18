<footer class="footer">
	<div class="container">
		<div class="footer__items">
			<ul>
				<li><a href="/">О нас</a></li>
				<li><a href="/">Контакты</a></li>
				<li><a href="/">Реклама</a></li>
			</ul>
			<ul>
				<li><a href="/">Вакансии</a></li>
				<li><a href="/">Обратная связь</a></li>
			</ul>
			<div style="display:flex;gap:10px;align-self:center;">
				<div>djvjd</div>
				<div>djvjd</div>
				<div>djvjd</div>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		margin-top: 30px;
		background-color: #000;
		&__items {
			display: flex;
			justify-content: space-between;
			padding: 70px 0;
			// border-bottom: 1px solid #E0E0E0;
			color: #fff;

			ul {
				list-style: none;
				margin: 0;
				padding: 0;
			}
		}
		@media (max-width: 690px) {
			&__items {
				flex-wrap: wrap;
				justify-content: space-around;
			}
		}
		@media (max-width: 500px) {
			&__items {
				padding: 20px 0;
			}
		}
		@media (max-width: 478px) {
			&__items {
				flex-direction: column;
				text-align: center;
			}
		}
	}
</style>
