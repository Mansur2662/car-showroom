import "./mileage.css";

function MileagePage() {
  const cars = [
    {
      id: 1,
      title: "HYUNDAI Elantra",
      description: "Comfort",
      year: "2020",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1.8",
      mileage: "45 000 км",
      price: "110000 сомон.",
      offerPrice: "75000 сомон.",
      creditPrice: "от 600 сомон/день",
      image: "./car-photo/Hyundai.png",
    },
    {
      id: 2,
      title: "KIA Rio",
      description: "Премиум",
      year: "2019",
      engine: "Бензин",
      transmission: "Механика",
      volume: "1.6",
      mileage: "60 000 км",
      price: "80000 сомон.",
      offerPrice: "65000 сомон.",
      creditPrice: "от 500 сомон/день",
      image: "./car-photo/KiaRio.jpg",
    },
    {
      id: 3,
      title: "Toyota Camry",
      description: "Люкс",
      year: "2018",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "2.4",
      mileage: "40 000 км",
      price: "170000 сомон.",
      offerPrice: "155000 сомон.",
      creditPrice: "от 800 сомон/день",
      image: "./car-photo/Camry.jpg",
    },
    {
      id: 4,
      title: "Nissan Qashqai",
      description: "Комфорт",
      year: "2021",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1.8",
      mileage: "30 000 км",
      price: "100000 сомон.",
      offerPrice: "90000 сомон.",
      creditPrice: "от 600 сомон/день",
      image: "./car-photo/NissanQashqai.png",
    },
    {
      id: 5,
      title: "Lexus ES 350",
      description: "Комфорт",
      year: "2021",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "3.5",
      mileage: "30 000 км",
      price: "250000 сомон.",
      offerPrice: "210000 сомон.",
      creditPrice: "от 1000 сомон/день",
      image: "./car-photo/Lexus.png",
    },
    {
      id: 6,
      title: "BMW X5M",
      description: "Комфорт",
      year: "2021",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "3.5",
      mileage: "30 000 км",
      price: "470000 сомон.",
      offerPrice: "455000 сомон.",
      creditPrice: "от 1200 сомон/день",
      image: "./car-photo/BMW X5M.jpg",
    },
  ];

  return (
    <div className="bbbb">
    <div className="mileage-page">
      <div className="header-sectionn">
        <h1>Автомобили с пробегом</h1>
        <p className="view-alll">Посмотреть все</p>
      </div>

      <div className="flexx">
        {cars.map((car) => (
          <div key={car.id} className="card-gridd flex-1">
            <div className="card-containerr">
              <img className="top-imagee" src={car.image} alt={car.title} />
              <h1 className="card-titlee">{car.title}</h1>
              <p className="card-descriptionn">{car.description}</p>

              <div className="card-linee" />

              <div className="card-roww">
                <p>
                  Год выпуска: <span className="bold-textt">{car.year}</span>
                </p>
                <p>
                  Тип двигателя: <span className="bold-textt">{car.engine}</span>
                </p>
              </div>

              <div className="card-roww">
                <p>
                  КПП: <span className="bold-textt">{car.transmission}</span>
                </p>
                <p>
                  Объем двиг.: <span className="bold-textt">{car.volume}</span>
                </p>
              </div>

              <div className="card-roww">
                <p>
                  Пробег: <span className="bold-textt">{car.mileage}</span>
                </p>
              </div>

              <div className="card-linee" />

              <div className="card-roww">
                <p>
                  Цена: <span className="strike-throughh">{car.price}</span>
                </p>
                <p>от: <span className="red-text">{car.offerPrice}</span></p>
              </div>

              <div className="card-roww">
                <p>В кредит: <span className="red-text">{car.creditPrice}</span></p>
              </div>

              <button className="card-buttonn">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export { MileagePage };