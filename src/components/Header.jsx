import React from 'react';
import { Link } from 'react-scroll';

import headerLogo from '../assets/img/logo1.svg';

const tabNames = [
  { tabName: 'Головна', id: 'main' },
  { tabName: 'Проєкти', id: 'projects' },
  { tabName: 'Мотивація', id: 'motivation' },
  { tabName: 'Про нас', id: 'aboutUs' },
  { tabName: 'Питання', id: 'questions' },
  { tabName: 'Контакти', id: 'contacts' },
];

function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    console.log(currentScrollPos - prevScrollPos);
    if (currentScrollPos < 50) {
      setVisible(true);
    } else if (currentScrollPos - prevScrollPos < -10) {
      setVisible(true);
    } else if (currentScrollPos > prevScrollPos) {
      setVisible(false);
      if (openBurgerMenu) setOpenBurgerMenu(false);
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
                {tabNames.map((obj) => (
                    <li>
                      <Link
                          key={obj.tabName}
                          to={obj.id}
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          onClick={() => onClickLink()}
                          className="smoothscroll a"
                      >
                        {obj.tabName}
                      </Link>
                    </li>
                ))}
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
