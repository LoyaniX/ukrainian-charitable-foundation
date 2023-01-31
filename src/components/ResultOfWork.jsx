import user02 from '../assets/img/avatars/user-02.jpg';
import user01 from '../assets/img/avatars/user-01.jpg';
import user05 from '../assets/img/avatars/user-05.jpg';
import user04 from '../assets/img/avatars/user-04.jpg';

function ResultOfWork() {
  return (
    <div id="testimonials" class="s-testimonials">
      <div class="row collapse">
        <div class="column large-full">
          <div class="testimonial-slider">
            <div class="testimonial-slider__slide">
              <p>
                Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore
                rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi
                dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias
                delectus culpa.
              </p>
              <div class="testimonial-slider__author">
                <img src={user02} alt="Author image" class="testimonial-slider__avatar" />
                <cite class="testimonial-slider__cite">
                  <strong>Tim Cook</strong>
                  <span>CEO, Apple</span>
                </cite>
              </div>
            </div>

            <div class="testimonial-slider__slide">
              <p>
                Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat
                voluptas animi adipisci. Nisi eaque consequatur. Voluptatem dignissimos ut ducimus
                accusantium perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime.
              </p>
              <div class="testimonial-slider__author">
                <img src={user04} alt="Author image" class="testimonial-slider__avatar" />
                <cite class="testimonial-slider__cite">
                  <strong>Sundar Pichai</strong>
                  <span>CEO, Google</span>
                </cite>
              </div>
            </div>

            <div class="testimonial-slider__slide">
              <p>
                Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea
                quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt
                voluptatum accusamus. Quasi voluptas eius distinctio. Voluptatem dignissimos ut.
              </p>
              <div class="testimonial-slider__author">
                <img src={user01} alt="Author image" class="testimonial-slider__avatar" />
                <cite class="testimonial-slider__cite">
                  <strong>Satya Nadella</strong>
                  <span>CEO, Microsoft</span>
                </cite>
              </div>
            </div>

            <div class="testimonial-slider__slide">
              <p>
                Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui.
                In ac felis quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed
                at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
              </p>
              <div class="testimonial-slider__author">
                <img src={user05} alt="Author image" class="testimonial-slider__avatar" />
                <cite class="testimonial-slider__cite">
                  <strong>Jeff Bezos</strong>
                  <span>CEO, Amazon</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultOfWork;
