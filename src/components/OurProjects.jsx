import windowImg from '../assets/img/portfolio/windows-in-the-city@2x.jpg';
import buildinBlocks from '../assets/img/portfolio/building-blocks@2x.jpg';
import jump from '../assets/img/portfolio/shout-and-jump@2x.jpg';
import sand from '../assets/img/portfolio/sand-dunes@2x.jpg';
import wood from '../assets/img/portfolio/woodcraft@2x.jpg';
import lamp from '../assets/img/portfolio/lamp@2x.jpg';

function OurProjects() {
  return (
    <section id="portfolio" class="s-portfolio target-section">
      <div class="row s-portfolio__header text-left">
        <div class="column large-6 medium-8 tab-full">
          <div class="section-intro" data-num="03">
            <h3 class="subhead">ПРОЄКТИ</h3>
            <h1 class="display-1">Наші останні реалізовані проєкти</h1>
          </div>
        </div>
      </div>

      <div class="row s-porfolio__list block-large-1-2 block-tab-full collapse">
        <div class="column">
          <div class="folio-item">
            <div class="folio-item__thumb">
              <a class="folio-item__thumb-link" title="Windows in The City" data-size="1050x700">
                <img src={windowImg} alt="" />
              </a>
            </div>
            <div class="folio-item__info">
              <div class="folio-item__cat">Branding</div>
              <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <button title="Project Link" class="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div class="column">
          <div class="folio-item">
            <div class="folio-item__thumb">
              <a class="folio-item__thumb-link" title="Windows in The City" data-size="1050x700">
                <img src={buildinBlocks} alt="" />
              </a>
            </div>
            <div class="folio-item__info">
              <div class="folio-item__cat">Branding</div>
              <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <button title="Project Link" class="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div class="column">
          <div class="folio-item">
            <div class="folio-item__thumb">
              <a class="folio-item__thumb-link" title="Windows in The City" data-size="1050x700">
                <img src={jump} alt="" />
              </a>
            </div>
            <div class="folio-item__info">
              <div class="folio-item__cat">Branding</div>
              <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <button title="Project Link" class="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div class="column">
          <div class="folio-item">
            <div class="folio-item__thumb">
              <a class="folio-item__thumb-link" title="Windows in The City" data-size="1050x700">
                <img src={sand} alt="" />
              </a>
            </div>
            <div class="folio-item__info">
              <div class="folio-item__cat">Branding</div>
              <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <button title="Project Link" class="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div class="column">
          <div class="folio-item">
            <div class="folio-item__thumb">
              <a class="folio-item__thumb-link" title="Windows in The City" data-size="1050x700">
                <img src={wood} alt="" />
              </a>
            </div>
            <div class="folio-item__info">
              <div class="folio-item__cat">Branding</div>
              <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <button title="Project Link" class="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div class="column">
          <div class="folio-item">
            <div class="folio-item__thumb">
              <a class="folio-item__thumb-link" title="Windows in The City" data-size="1050x700">
                <img src={lamp} alt="" />
              </a>
            </div>
            <div class="folio-item__info">
              <div class="folio-item__cat">Branding</div>
              <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <button title="Project Link" class="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
