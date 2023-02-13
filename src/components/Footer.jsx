function Footer() {
  return (
    <div className="s-footer h-dark-bg text-left">
      <div className="right-vert-line"></div>

      <div className="row s-footer__main">
        <div className="column large-6">
          <div className="section-intro">
            <h1 className="subhead">Контакти</h1>

            <h1 className="display-1">Хочеш допомогти Україні !? Приєднуйся, зробимо це разом!</h1>
          </div>
          <div className="footer-contact-block">
            <h5 className="footer-contact-block__header">Сторінки фонду</h5>
            <ul className="footer-contact-block__list">
              <li>
                <a href="#0">Twitter</a>
              </li>
              <li>
                <a href="#0">Instagram</a>
              </li>
              <li>
                <a href="#0">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="footer-email-us">
            <button href="" className="btn btn--primary h-full-width">
              Задонатити
            </button>
          </div>
        </div>

        <div className="column large-6">
          <div className="footer-contacts">
            <div className="footer-contact-block">
              <h5 className="footer-contact-block__header">Email</h5>
              <p className="footer-contact-block__content">
                <a href="mailto:#0">example@example.com</a>
              </p>
            </div>
            <div className="footer-contact-block">
              <h5 className="footer-contact-block__header">Телефони</h5>
              <p className="footer-contact-block__content">
                <ul className="footer-contact-block__list">
                  <li>
                    <a href="tel:+380000000000">+380000000000</a>
                  </li>
                  <li>
                    <a href="tel:+380000000000">+380000000000</a>
                  </li>
                  <li>
                    <a href="tel:+380000000000">+380000000000</a>
                  </li>
                </ul>
              </p>
            </div>
            <br />
            <div className="footer-contact-block">
              <h5 className="footer-contact-block__header">Наші партнери</h5>
              <ul className="footer-contact-block__list">
                <li>
                  <a href="https://prytulafoundation.org/uk">Благодійний фонд Сергія Притули</a>
                </li>
                <li>
                  <a href="https://prytulafoundation.org/uk">Благодійний фонд Сергія Притули</a>
                </li>
                <li>
                  <a href="https://prytulafoundation.org/uk">Благодійний фонд Сергія Притули</a>
                </li>
                <li>
                  <a href="https://prytulafoundation.org/uk">Благодійний фонд Сергія Притули</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row s-footer__bottom text-center">
        <div className="column large-full ss-copyright">
          <span>© Powered by LoyaniX</span>
          <span>Design by LoyaniX</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
