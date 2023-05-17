import car from '../assets/img/car.png';
import drone from '../assets/img/drone.png';
import guma from '../assets/img/guma.png';
import plane from '../assets/img/plane.png';
import starlink from '../assets/img/starlink.png';
import vision from '../assets/img/vision.png';

function OurProjects() {
  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="right-vert-line"></div>
      <div className="row s-portfolio__header text-left">
        <div className="column large-6 medium-8 tab-full">
          <div className="section-intro" data-num="01">
            <h3 className="subhead">ПРОЄКТИ</h3>
            <h1 className="display-1">Наші реалізовані проєкти</h1>
          </div>
        </div>
      </div>

      <div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">
        <div className="column">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" title="Windows in The City" href="#0">
                <img src={car} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Пекельні Тачки</div>
              <h4 className="folio-item__title">
                Здійснили закупівлі 899+ тачок для українського війська.
              </h4>
            </div>
            <button title="Project Link" className="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div className="column">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" title="Windows in The City" href="#0">
                <img src={drone} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Дрони, "Очі в небі"</div>
              <h4 className="folio-item__title">
                Здійснили закупівлі 3787+ дронів для українського війська.
              </h4>
            </div>
            <button title="Project Link" className="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div className="column">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" title="Windows in The City" href="#0">
                <img src={guma} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Гуманітарна допомога</div>
              <h4 className="folio-item__title">Надали гуманітарну допомогу для 300 000+ осіб</h4>
            </div>
            <button title="Project Link" className="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div className="column">
          <div className="folio-item">
            <div className="folio-item__thumb folio-item__thumb-link">
              <a className="folio-item__thumb-link" href="#0">
                <img src={plane} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Пташки. БПЛА</div>
              <h4 className="folio-item__title">
                Здійснили закупівлі 58+ комплексів БПЛА для українського війська.
              </h4>
            </div>
            <button title="Project Link" className="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div className="column">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" title="Windows in The City" href="#0">
                <img src={starlink} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Забезпечення засобами зв’язку</div>
              <h4 className="folio-item__title">
                Здійснили закупівлі 10615+ засобів зв'язку для українського війська.
              </h4>
            </div>
            <button title="Project Link" className="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>

        <div className="column">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" title="Windows in The City" href="#0">
                <img src={vision} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Забезпечення оптикою</div>
              <h4 className="folio-item__title">
                Здійснили закупівлі 6462+ одиниць оптики для українського війська.
              </h4>
            </div>
            <button title="Project Link" className="folio-item__project-link">
              Задонатити
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
