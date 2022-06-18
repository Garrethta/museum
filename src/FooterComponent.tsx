
export function FooterComponent() {

	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer__items">
						<ul>
							
							<li><a href="#">О нас</a></li>
							<li><a href="#">Контакты</a></li>
							<li><a href="#">Реклама</a></li>
						</ul>
						<ul>
							<li><a href="#">Вакансии</a></li>
							<li><a href="#">Обратная связь</a></li>
						</ul>
						<div style={{display:'flex',gap:'10px', alignSelf:'center'}}>
							<div>YouTube</div>
							<div>VK</div>
							<div>Telegram</div>
						</div>
					</div>
				</div>
			</footer>
		</>)
}