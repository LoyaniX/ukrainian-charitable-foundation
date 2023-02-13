import ourPhoto from '../assets/img/team.jpg';

function AboutUs() {
  return (
    <section id="about" className="s-about target-section text-left">
      <div className="s-about__section s-about__section--profile">
        <div className="right-vert-line"></div>

        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <div className="section-intro" data-num="03">
              <h3 className="subhead">Про нас</h3>
              <h1 className="display-1">Головна наша мета - ВІЛЬНА УКРАЇНА</h1>
            </div>

            <div className="profile-pic">
              <img src={ourPhoto} alt="" />
            </div>
            <p>
              Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це
              насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають
              великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав
              би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають
              такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо
              скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було
              тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг
              би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких
              неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою
              ніякої насолоди?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
