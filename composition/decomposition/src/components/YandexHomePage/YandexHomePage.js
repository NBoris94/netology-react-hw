import React from "react";
import { v4 as uuidv4 } from "uuid";
import News from "./News/News";
import Widget from "./Widget/Widget";
import SearchBlock from "./SearchBlock/SearchBlock";
import AdList from "./Ads/AdList";

const data = {
  ads: [
    { id: uuidv4(), img: "https://yastatic.net/www/_/dxMF8c525/723437fo71/-Waz1fU7nAjLmFC15_b6HwugnF08la9lVezk8ffe1h2_vDnGuaC-RTu9YVygAe63QnRSvB2lMBMIY9SnpyOZsqQt787iZYtficpU5v6iqlwT6tNUMZaIFHrI0oHf6et3lIE0yLj76gVq7XwK9VqC2g", link: "#" },
    { id: uuidv4(), img: "https://yastatic.net/www/_/dxMF8c525/723437fo71/-Waz1fU7nAjLmFC15_b6HwugnF08la9lVezk8ffe1h2_vDnGuaC4SDO2ZF2nAbiySSUG6xmkMENWNdSnpyOb5KQs78njZdxe2MBV5Kit-A4Qu9NUMZaIFHrI0oHf6et3lIE0yLj76gVq7XwK9VqC2g", link: "#" },
    { id: uuidv4(), img: "https://yastatic.net/www/_/dxMF8c525/723437fo71/-Waz1fU7nAjLmFC15_b6HwugnF08la9lVezk8ffe1h2_vDnGuaC4SDO2ZF2nAey0HiRSvk3wMBNcMoWnp3Cc46Qtvs3qZYwCjcgE4PCrqg0U79NUMZaIFHrI0oHf6et3lIE0yLj76gVq7XwK9VqC2g", link: "#" },
  ],
  news: {
    newsTabs: [
      { id: uuidv4(), title: "Сейчас в СМИ" },
      { id: uuidv4(), title: "Москва и область" },
      { id: uuidv4(), title: "Интересное" },
    ],
    newsList: [
      { id: uuidv4(), category: "Сейчас в СМИ", title: "«Ъ»: семерых офицеров Росгвардии заподозрили в махинациях со 192 миллионами рублей", icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square" },
      { id: uuidv4(), category: "Сейчас в СМИ", title: "Посол России в США Антонов заявил, что США фактически выдворяют российских дипломатов", icon: "https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square" },
      { id: uuidv4(), category: "Сейчас в СМИ", title: "Месси в седьмой раз в карьере получил «Золотой мяч»", icon: "https://avatars.mds.yandex.net/get-ynews-logo/117671/254147205-1478693952904-square/logo-square" },
      { id: uuidv4(), category: "Сейчас в СМИ", title: "«Нафтогаз» заявил о нежелании России продлевать контракт по транзиту газа", icon: "https://avatars.mds.yandex.net/get-ynews-logo/117671/1027-1530099491421-square/logo-square" },
      { id: uuidv4(), category: "Сейчас в СМИ", title: "RTL Nieuws: Нидерланды изучают возможность обращения в ИКАО по делу MH17", icon: "https://avatars.mds.yandex.net/get-ynews-logo/26056/1048-1478692902313-square/logo-square" },
    ],
    newsStocks: [
      { id: uuidv4(), title: "USD", value: "74,58", valueChange: "-1,03", popup: "курс MOEX на 29/11 23:42" },
      { id: uuidv4(), title: "EUR", value: "84,14", valueChange: "-1,36", popup: "курс MOEX на 29/11 23:42" },
      { id: uuidv4(), title: "Нефть", value: "72,72", valueChange: "+0,36%", popup: "цена на 29/11 23:42" },
    ],
  },
  services: [
    { id: uuidv4(), title: "Видео", link: "#" },
    { id: uuidv4(), title: "Картинки", link: "#" },
    { id: uuidv4(), title: "Новости", link: "#" },
    { id: uuidv4(), title: "Карты", link: "#" },
    { id: uuidv4(), title: "Маркет", link: "#" },
    { id: uuidv4(), title: "Переводчик", link: "#" },
    { id: uuidv4(), title: "Эфир", link: "#" },
  ],
};

function YandexHomePage() {
  return (
    <main className="content">
      <div className="container">
        <div className="row">
          <News news={data.news} />
          <Widget withImg img="https://via.placeholder.com/100" title="Работа над ошибками">
            <p className="widget__text">Смотрите на Яндексе и запоминайте</p>
          </Widget>
        </div>
        <div className="row">
          <SearchBlock services={data.services} />
        </div>
        <div className="row">
          <AdList ads={data.ads} />
        </div>
        <div className="row">
          <Widget title="Погода">
            <div className="weather__content">
              <a aria-label="+7 °C, пасмурно" className="home-link home-link_black_yes weather__grade" href="https://yandex.ru/pogoda/?utm_campaign=informer&amp;utm_medium=web&amp;utm_content=main_informer&amp;utm_source=home&amp;utm_term=main_number" target="_blank" rel="noopener" data-statlog="weather.grade" data-statlog-showed="1">
                <div className="weather__icon weather__icon_ovc" title="пасмурно"></div>
                <div className="weather__temp">+7°</div>
              </a>
              <div className="weather__forecast">
                <a className="home-link weather__forecast-item home-link_black_yes" href="https://yandex.ru/pogoda/?utm_campaign=informer&amp;utm_medium=web&amp;utm_content=main_informer&amp;utm_source=home&amp;utm_term=next_day_part" target="_blank" rel="noopener" data-statlog="weather.forecast.0" data-statlog-showed="1">
                  <span className="weather__forecast-title text_gray_yes">Днём</span>
                  <span className="weather__forecast-icon weather__forecast-icon_index_0"></span>
                  <span className="weather__forecast-grade">9°</span>
                </a>
                <a className="home-link weather__forecast-item home-link_black_yes" href="https://yandex.ru/pogoda/?utm_campaign=informer&amp;utm_medium=web&amp;utm_content=main_informer&amp;utm_source=home&amp;utm_term=next_day_part" target="_blank" rel="noopener" data-statlog="weather.forecast.1" data-statlog-showed="1">
                  <span className="weather__forecast-title text_gray_yes">Вечером</span>
                  <span className="weather__forecast-icon weather__forecast-icon_index_1"></span>
                  <span className="weather__forecast-grade">-1°</span>
                </a>
                <a className="home-link weather__forecast-item home-link_black_yes" href="https://yandex.ru/pogoda/?utm_campaign=informer&amp;utm_medium=web&amp;utm_content=main_informer&amp;utm_source=home&amp;utm_term=next_day_part" target="_blank" rel="noopener" data-statlog="weather.forecast.2" data-statlog-showed="1">
                  <span className="weather__forecast-title text_gray_yes">Ночью</span>
                  <span className="weather__forecast-icon weather__forecast-icon_index_2"></span>
                  <span className="weather__forecast-grade">-1°</span>
                </a>
              </div>
            </div>
          </Widget>
          <Widget title="Посещаемое">
            <ul>
              <li>
                <a href="#">
                  <strong>Недвижимость</strong> - о сталинках
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Маркет</strong> - люстры и светильники
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Авто.ру</strong> - привод 4х4 до 500 000
                </a>
              </li>
            </ul>
          </Widget>
          <Widget title="Карта Германии">
            <a href="#">Расписания</a>
          </Widget>
          <Widget title="Телепрограмма" titleWithIcon icon="https://via.placeholder.com/50x25">
            <ul className="tv-list">
              <li className="tv-list__item">
                <a href="#" className="tv-list__link">
                  <span className="tv-list__time">02:00</span>
                  <span className="tv-list__title">ТНТ. Best</span>
                  <span className="tv-list__channel">ТНТ. International</span>
                </a>
              </li>
              <li className="tv-list__item">
                <a href="#" className="tv-list__link">
                  <span className="tv-list__time">02:15</span>
                  <span className="tv-list__title">Джинглики</span>
                  <span className="tv-list__channel">Карусель INT</span>
                </a>
              </li>
              <li className="tv-list__item">
                <a href="#" className="tv-list__link">
                  <span className="tv-list__time">02:25</span>
                  <span className="tv-list__title">Наедине со всеми</span>
                  <span className="tv-list__channel">Первый</span>
                </a>
              </li>
            </ul>
          </Widget>
          <Widget title="Эфир">
            <ul className="broadcast">
              <li className="broadcast__item">
                <a href="#" className="broadcast__link">
                  <img src="https://via.placeholder.com/15" alt="" className="broadcast__icon" />
                  <span className="broadcast__title">Управление как искусство</span>
                  <span className="broadcast__channel">Успех</span>
                </a>
              </li>
              <li className="broadcast__item">
                <a href="#" className="broadcast__link">
                  <img src="https://via.placeholder.com/15" alt="" className="broadcast__icon" />
                  <span className="broadcast__title">Ночь. Мир в это время</span>
                  <span className="broadcast__channel">earthTV</span>
                </a>
              </li>
              <li className="broadcast__item">
                <a href="#" className="broadcast__link">
                  <img src="https://via.placeholder.com/15" alt="" className="broadcast__icon" />
                  <span className="broadcast__title">Андрей Возн...</span>
                  <span className="broadcast__channel">Совершенно секретно</span>
                </a>
              </li>
            </ul>
          </Widget>
        </div>
      </div>
    </main>
  );
}

export default YandexHomePage;
