import projectImg from '../assets/img/main.jpg';

function Main() {
  return (
    <div id="hero" className="hero s-hero target-section">
      <div className="row hero-content">
        <div className="column large-full">
          <h1 className="text-left text-black">
            Привіт! Це - <br />
            Благодійний фонд <br />
            незламності України. <br />
            Разом до перемоги!
          </h1>
          <ul className="hero-social">
            <li>
              <a href="#0" title="">
                Twitter
              </a>
            </li>
            <li>
              <a href="#0" title="">
                Instagram
              </a>
            </li>
            <li>
              <a href="#0" title="">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#portfolio" className="scroll-link smoothscroll">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Main;
