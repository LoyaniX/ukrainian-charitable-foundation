import projectImg from '../assets/img/hero-bg-3000.jpg';

function Main() {
  return (
    <div id="hero" class="hero s-hero target-section">
      <div class="row hero-content">
        <div className="column large-full">
          <h1 className="text-left">
            Привіт! Це - <br />
            Благодійний фонд <br />
            для підтримки ЗСУ. <br />
            Разом до перемоги!
          </h1>

          <ul class="hero-social">
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

      <div class="hero-scroll">
        <a href="#about" class="scroll-link smoothscroll">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Main;
