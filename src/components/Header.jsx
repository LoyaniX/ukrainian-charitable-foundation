import headerLogo from '../assets/img/logo.svg';

function Header() {
  return (
    <div class="s-header">
      <div class="header-logo">
        <a href="index.html">
          <img src={headerLogo} alt="" />
        </a>
      </div>

      <div class="header-content">
        <nav class="row header-nav-wrap">
          <ul class="header-nav">
            <li>
              <a class="smoothscroll" href="#hero" title="Intro">
                Головна
              </a>
            </li>
            <li>
              <a class="smoothscroll" href="#about" title="About">
                Допомога ЗСУ
              </a>
            </li>
            <li>
              <a class="smoothscroll" href="#services" title="Services">
                Часті питання
              </a>
            </li>
            <li>
              <a class="smoothscroll" href="#portfolio" title="Works">
                Наші проєкти
              </a>
            </li>
            <li>
              <a href="mailto:#0" title="Contact us">
                Контакти
              </a>
            </li>
          </ul>
        </nav>

        <button href="#0" class="btn btn--stroke btn--small">
          Задонатити
        </button>
      </div>

      <a class="header-menu-toggle" href="#0">
        <span>Menu</span>
      </a>
    </div>
  );
}

export default Header;
