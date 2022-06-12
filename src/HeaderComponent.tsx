import { useState } from "react"

const logo = require('./assets/logo.png')

export function HeaderComponent() {

	const [nav, setNav] = useState(false)

	return (
		<>
			<header className="header">
				<div className="header__top">
					<div className="container">
						<div className="header__top-top">
							<nav className="menu">
								<div className="menu__btn" onClick={() => setNav(!nav)}>
									<span></span>
								</div>
								<ul className="menu__list">
									<a href="/">
										<img src={logo} alt="" />
									</a>
									{/* <li className="menu__item"><a href="#">Новости</a></li> */}
									<li className="menu__item"><a href="#">Аллея памяти</a></li>
									<li className="menu__item"><a href="#">Личности</a></li>
									<li className="menu__item"><a href="#">Воспоминания</a></li>
									<li className="menu__item"><a href="#">Современный взгляд</a></li>
								</ul>
							</nav>
						</div>
					</div>
					<a className='logoButton' href='/' />
				</div>
				{nav && <div className="header__mobile-nav">
					<ul>
						<li><a href="#">Аллея памяти</a></li>
						<li><a href="#">Личности</a></li>
						<li><a href="#">Воспоминания</a></li>
						<li><a href="#">Современный взгляд</a></li>
					</ul>
				</div>}
			</header>
		</>)
}


