import react from "react";
import "./Menu.css";
import logoDark from "./../../assets/logo_dark.png";
import ContactInfo from "../ContactInfo/ContactInfo";

const Menu = (props) => {
	return (
		<div className="menuModal">
			<div className="logoMenu">
				<img src={logoDark} onClick={props.onClose} />
			</div>

			<div className="menuContainer">
				<div className="flexMenuWrapper">
					<div className="linksMenuWrapper">
						<a className="linkMenu" href="#">
							Главная
						</a>
						<a className="linkMenu" href="#">
							Об агентстве
						</a>
						<a className="linkMenu" href="#">
							Услуги
						</a>
						<a className="linkMenu" href="#">
							Кейсы
						</a>
						<a className="linkMenu" href="#">
							Блог
						</a>
						<a className="linkMenu" href="#">
							Контакты
						</a>
					</div>

					<div className="contactMenuWrapper">
						<ContactInfo
							subtitle={<span>почта</span>}
							link={"#"}
							contact={<span>info@digitalsquad.ru</span>}
						/>

						<ContactInfo
							subtitle={<span>телефон</span>}
							link={"#"}
							contact={<span>8 800 123 45 67</span>}
						/>

						<ContactInfo
							subtitle={<span>instagram</span>}
							link={"#"}
							contact={<span>@dgtlsquad</span>}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
