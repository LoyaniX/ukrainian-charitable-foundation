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
      <div className={`${!visible ? 's-header-hedden' : ''} s-header`}>
        <div className="header-logo">
          <img src={headerLogo} alt="" />
        </div>

        <div className="header-content">
          <nav className="row header-nav-wrap">
            <ul className="header-nav">
              <li>
                <a className="smoothscroll a" title="Intro" onClick={() => onClickLink()}>
                  Головна
                </a>
              </li>
              <li>
                <a className="smoothscroll a" title="Works" onClick={() => onClickLink()}>
                  Проєкти
                </a>
              </li>
              <li>
                <a className="smoothscroll a" title="Works" onClick={() => onClickLink()}>
                  Мотивація
                </a>
              </li>
              <li>
                <a className="smoothscroll a" title="Works" onClick={() => onClickLink()}>
                  Про нас
                </a>
              </li>
              <li>
                <a className="smoothscroll a" title="Services" onClick={() => onClickLink()}>
                  итання
                </a>
              </li>

              <li>
                <a className="smoothscroll a" title="Contact us" onClick={() => onClickLink()}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <button className="btn btn--stroke btn--small">Задонатити</button>
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
