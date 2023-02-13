function Directions() {
  return (
    <section id="services" className="s-services target-section h-dark-bg text-left">
      <div className="row s-services__content">
        <div className="vert-line"></div>

        <div className="column large-6 s-services__leftcol">
          <div className="section-intro" data-num="02">
            <h3 className="subhead">Мотивація</h3>

            <h1 className="display-1">
              Чому потрібно підтримувати і допомагати Україні саме зараз
            </h1>
          </div>

          <p className="lead">
            Перемога України на всіх фронтах: гуманітарному, соціальному, економічному,
            просвітницькому. Протидія наслідкам війни та щоденна відбудова прогресивної, успішної та
            найкомфортнішої країни для кожного мешканця та нащадків, а також просування нашої
            країни, як вдячного партнера та лідера на міжнародній арені - це головні слогани
            сьогодення кожного укриїнця.
          </p>
        </div>

        <div className="column large-6">
          <ul className="services-list">
            <li className="services-list__item is-active">
              <div className="services-list__item-header">
                <h5>Філософія</h5>
              </div>
              <div className="services-list__item-body">
                <p>
                  Змін не треба чекати — їх треба творити! Об’єднавши зусилля — отримаємо
                  масштабніші результати. Разом відбудуємо квітучу Україну!
                </p>
              </div>
            </li>
            <li className="services-list__item is-active">
              <div className="services-list__item-header">
                <h5>Вектор діяльності</h5>
              </div>
              <div className="services-list__item-body">
                <p>
                  Сканувати суспільство на 360 градусів та реалізовувати проєкти, які несуть
                  комплексні зміни та втілюють інноваційні рішення, відповідаючи викликам
                  сьогодення.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Directions;
