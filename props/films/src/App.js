import "./App.css";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="container">
      <div className="film-cards">
        <div className="film-card">
          <div className="film-card__poster">
            <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/1def1500-bcac-4210-ba18-ff78e84ce25c/600x900" alt="Супермен" className="film-card__img" />
            <span className="film-card__genre film-card__genre_orange">Экшн</span>
          </div>
          <div className="film-card__info">
            <div className="film-card__actions">
              <a href="#" className="film-card__like">
                <span className="material-icons">favorite</span>
              </a>
              <a href="#" className="film-card__share">
                <span className="material-icons">share</span>
              </a>
            </div>
            <h3 className="film-card__title">Супермен</h3>
            <div className="film-card__rating">
              <Stars count={3} />
            </div>
            <div className="film-card__btn-group">
              <a href="#" className="film-card__buy">
                Купить 1299₽
              </a>
              <a href="#" className="film-card__more">
                Подробнее <span className="material-icons">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
        <div className="film-card">
          <div className="film-card__poster">
            <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b9629f91-8c02-4010-8311-3e02dea4927d/600x900" alt="Одинокий странник" className="film-card__img" />
            <span className="film-card__genre film-card__genre_brown">Вестерн</span>
          </div>
          <div className="film-card__info">
            <div className="film-card__actions">
              <a href="#" className="film-card__like">
                <span className="material-icons">favorite_border</span>
              </a>
              <a href="#" className="film-card__share">
                <span className="material-icons">share</span>
              </a>
            </div>
            <h3 className="film-card__title">Одинокий странник</h3>
            <div className="film-card__rating">
              <Stars count={1} />
            </div>
            <div className="film-card__btn-group">
              <a href="#" className="film-card__buy">
                Купить 899₽
              </a>
              <a href="#" className="film-card__more">
                Подробнее <span className="material-icons">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
