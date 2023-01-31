import React from 'react';

import headerLogo from '../assets/img/logo1.svg';

function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const onClickMenu = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

  const onClickLink = () => {
    setOpenBurgerMenu(false);
  };

  return (
    <div id="nav" className={`${openBurgerMenu ? 'menu-is-open ' : ''}text-left `}>
      <div class={`${!visible ? 's-header-hedden' : ''} s-header`}>
        <div class="header-logo">
          <img src={headerLogo} alt="" />
        </div>

        <div class="header-content">
          <nav class="row header-nav-wrap">
            <ul class="header-nav">
              <li>
                <a class="smoothscroll" href="#hero" title="Intro" onClick={() => onClickLink()}>
                  Головна
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#about" title="About" onClick={() => onClickLink()}>
                  Допомога ЗСУ
                </a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#services"
                  title="Services"
                  onClick={() => onClickLink()}
                >
                  Часті питання
                </a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#portfolio"
                  title="Works"
                  onClick={() => onClickLink()}
                >
                  Наші проєкти
                </a>
              </li>
              <li>
                <a href="mailto:#0" title="Contact us" onClick={() => onClickLink()}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <button href="#0" class="btn btn--stroke btn--small">
            Задонатити
          </button>
        </div>

        <a
          className={`${openBurgerMenu ? 'is-clicked' : ''} header-menu-toggle`}
          onClick={() => onClickMenu()}
        >
          <span>Menu</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
