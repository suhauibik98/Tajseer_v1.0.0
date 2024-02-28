import { useTranslation } from "react-i18next";
const Banner = ({ images, speed = 20000 }) => {
  const { t, i18n } = useTranslation();
    return (
      <div className="inner">
        <div className="wrapper">
          <section className={i18n.language === "ar" ? "animate-swipe1":"animate-swipe"} style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="imgBanner" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className={i18n.language === "ar" ? "animate-swipe1":"animate-swipe"} style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="imgBanner" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className={i18n.language === "ar" ? "animate-swipe1":"animate-swipe"} style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="imgBanner" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };
  