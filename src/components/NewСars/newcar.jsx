import "./newcar.css";

function Newcar() {
  const cars = [
    {
      id: 1,
      title: "HYUNDAI Elantra",
      description: "Комфорт",
      year: "2024",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1.8",
      mileage: "0 км",
      price: "190000 сомон.",
      offerPrice: "175000 сомон.",
      creditPrice: "от 900 сомон/день",
      image: "./car-photo/H2024.png",
    },
    {
      id: 2,
      title: "KIA Rio",
      description: "Люкс",
      year: "2024",
      engine: "Бензин",
      transmission: "Механика",
      volume: "1.6",
      mileage: "0 км",
      price: "180000 сомон.",
      offerPrice: "165000 сомон.",
      creditPrice: "от 700 сомон/день",
      image: "./car-photo/KR2024.png",
    },
    {
      id: 3,
      title: "Toyota Camry",
      description: "Премиум",
      year: "2024",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "2.4",
      mileage: "0 км",
      price: "420000 сомон.",
      offerPrice: "350000 сомон.",
      creditPrice: "от 1200 сомон/день",
      image: "./car-photo/TC2024.png",
    },
    {
      id: 4,
      title: "Nissan Qashqai",
      description: "Комфорт",
      year: "2024",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "1.8",
      mileage: "0 км",
      price: "180000 сомон.",
      offerPrice: "120000 сомон.",
      creditPrice: "от 800 сомон/день",
      image: "./car-photo/N2024.png",
    },
    {
      id: 5,
      title: "Lexus ES 350",
      description: "Люкс",
      year: "2024",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "3.5",
      mileage: "0 км",
      price: "500000 сомон.",
      offerPrice: "410000 сомон.",
      creditPrice: "от 1500 сомон/день",
      image: "./car-photo/LX2024.png",
    },
    {
      id: 6,
      title: "BMW X5M",
      description: "Премиум",
      year: "2024",
      engine: "Бензин",
      transmission: "Автомат",
      volume: "3.5",
      mileage: "0 км",
      price: "1000000 сомон.",
      offerPrice: "750000 сомон.",
      creditPrice: "от 1800 сомон/день",
      image: "./car-photo/bbbmm.png",
    },
  ];

  return (
    <div className="bbb">
    <div className="mileage-page">
      <div className="header-sectionn">
        <h1>Новые Автомобили</h1>
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

export { Newcar };