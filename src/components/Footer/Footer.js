import react from "react";
import "./Footer.css";
import ContactInfo from "../ContactInfo/ContactInfo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flexFooterWrapper">
        <div className="logoFooter">logo</div>
        <div className="linksWrapper">
          <a className="linkFooter" href="#">
            Главная
          </a>
          <a className="linkFooter" href="#">
            Об агентстве
          </a>
          <a className="linkFooter" href="#">
            Услуги
          </a>
          <a className="linkFooter" href="#">
            Портфолио
          </a>
          <a className="linkFooter" href="#">
            Блог
          </a>
          <a className="linkFooter" href="#">
            Контакты
          </a>
        </div>

        <div className="contactFooterWrapper">
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

      <div className="privacyWrapper">
        <p className="copyright">Digital squad, 2021</p>
        <a className="linkPrivacy" href="#">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;