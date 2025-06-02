import "./Spetspred.css";

function Spetspred() {
  const cars = [
    {
      id: 1,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2023",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1 893",
      price: "1 100 000 руб.",
      offerPrice: "400 000 руб.",
      creditPrice: "от 1200 руб/день",
      image: "/car-photo/Hyundai.png",
    },
    {
      id: 2,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2023",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1 893",
      price: "1 100 000 руб.",
      offerPrice: "400 000 руб.",
      creditPrice: "от 1200 руб/день",
      image: "/car-photo/Hyundai.png",
    },
    {
      id: 3,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2023",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1 893",
      price: "1 100 000 руб.",
      offerPrice: "400 000 руб.",
      creditPrice: "от 1200 руб/день",
      image: "/car-photo/Hyundai.png",
    },
    {
      id: 4,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2023",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1 893",
      price: "1 100 000 руб.",
      offerPrice: "400 000 руб.",
      creditPrice: "от 1200 руб/день",
      image: "/car-photo/Hyundai.png",
    },
    {
      id: 5,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2023",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1 893",
      price: "1 100 000 руб.",
      offerPrice: "400 000 руб.",
      creditPrice: "от 1200 руб/день",
      image: "/car-photo/Hyundai.png",
    },  {
      id: 6,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2023",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1 893",
      price: "1 100 000 руб.",
      offerPrice: "400 000 руб.",
      creditPrice: "от 1200 руб/день",
      image: "/car-photo/Hyundai.png",
    },
   
   
  ];

  return (
    <div className="spets">
      <div className="header-section">
        <h1>Специальные предложения</h1>
        <p className="view-all">Посмотреть все</p>
      </div>

      <div className="flex">
        {cars.map((car) => (
          <div key={car.id} className="card-grid flex-1">
            <div className="card-container">
              <img className="top-image" src={car.image} alt="Hyunday" />
              <h1 className="card-title">{car.title}</h1>
              <p className="card-description">{car.description}</p>

              <div className="card-line" />

              <div className="card-row">
                <p>
                  Год выпуска: <span className="bold-text">{car.year}</span>
                </p>
                <p>
                  Тип двигателя: <span className="bold-text">{car.engine}</span>
                </p>
              </div>

              <div className="card-row">
                <p>
                  КПП: <span className="bold-text">{car.transmission}</span>
                </p>
                <p>
                  Объем двиг.: <span className="bold-text">{car.volume}</span>
                </p>
              </div>

              <div className="card-line" />

              <div className="card-row">
                <p>
                  Цена: <span className="strike-through">{car.price}</span>
                </p>
                <p>от: <span className="red-text">{car.offerPrice}</span></p>
              </div>

              <div className="card-row">
                <p>В кредит: <span className="red-text">{car.creditPrice}</span></p>
              </div>

              <button className="card-button">Подробнее</button>
            </div>
          </div>
        ))}
      </div>

 
    </div>
  );
}

export { Spetspred };
