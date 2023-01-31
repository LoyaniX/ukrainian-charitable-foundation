function Footer() {
  return (
    <div class="s-footer h-dark-bg text-left">
      <div class="right-vert-line"></div>

      <div class="row s-footer__main">
        <div class="column large-6">
          <div class="section-intro">
            <h3 class="subhead">Контакти</h3>

            <h1 class="display-1">Хочеш допомогти Україні !? Приєднуйся, зробимо це разом!</h1>
          </div>

          <div class="footer-email-us">
            <button href="" class="btn btn--primary h-full-width">
              Задонатити
            </button>
          </div>
        </div>

        <div class="column large-6">
          <div class="footer-contacts">
            <div class="footer-contact-block">
              <h5 class="footer-contact-block__header">Email</h5>
              <p class="footer-contact-block__content">
                <a href="mailto:#0">example@example.com</a>
              </p>
            </div>
            <div class="footer-contact-block">
              <h5 class="footer-contact-block__header">Телефони</h5>
              <p class="footer-contact-block__content">
                <ul class="footer-contact-block__list">
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
            <div class="footer-contact-block">
              <h5 class="footer-contact-block__header">Сторінки фонду</h5>
              <ul class="footer-contact-block__list">
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
          </div>
        </div>
      </div>

      <div class="row s-footer__bottom text-center">
        <div class="column large-full ss-copyright">
          <span>© Powered by LoyaniX</span>
          <span>Design by LoyaniX</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
