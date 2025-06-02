import PropTypes from 'prop-types';
import './prodmoskve.css';  // 


const Car = ({ image, name }) => {
  if (!image || !name) {
    return null; 
  }

  return (
    <div className="car">
      <img src={image} alt={name}  />
      <div className="car-name">{name}</div>
    </div>
  );
};


Car.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};
const brends = [
  {
    id: 1,
    image: "/brends/Audi.png",
    name: "Audi"
  },
  {
    id: 2,
    image: "/brends/Bmw.png",
    name: "BMW"
  },
  {
    id: 3,
    image: "/brends/Byd.png",
    name: "BYD"
  },
  {
    id: 4,
    image: "/brends/Changan.png",
    name: "Changan"
  },
  {
    id: 5,
    image: "/brends/Chery.png",
    name: "Chevry"
  },
  {
    id: 6,
    image: "/brends/Chevrolet.png",
    name: "Chevrolet"
  },
  {
    id: 7,
    image: "/brends/Citroen.png",
    name: "Citroen"
  },
  {
    id: 8,
    image: "/brends/Dongfeng.png",
    name: "Dongfeng"
  },
  {
    id: 9,
    image: "/brends/Faw.png",
    name: "FAW"
  },
  {
    id: 10,
    image: "/brends/Geely.png",
    name: "Geely"
  },
  {
    id: 11,
    image: "/brends/Greatwall.png",
    name: "GreatWall"
  },
  {
    id: 12,
    image: "/brends/Havai.png",
    name: "Havai"
  },
  {
    id: 13,
    image: "/brends/Hyunday.png",
    name: "Hyunday"
  },
  {
    id: 14,
    image: "/brends/Jeep.png",
    name: "Jeep"
  },
  {
    id: 15,
    image: "/brends/Jac.png",
    name: "JAC"
  },
  {
    id: 16,
    image: "/brends/Kia.png",
    name: "KIA"
  },
  {
    id: 17,
    image: "/brends/lada.png",
    name: "Lada"
  },    
  {
    id: 18,
    image: "/brends/Lifan.png",
    name: "Lifan"
  },    
  {
    id: 19,
    image: "/brends/Mazda.png",
    name: "Mazda"
  },    
  {
    id: 20,
    image: "/brends/Nissan.png",
    name: "Nissan"
  },    
  {
    id: 21,
    image: "/brends/Peugeot.png",
    name: "Peugeot"
  },    
  {
    id: 22,
    image: "/brends/Renault.png",
    name: "Renault"
  },    
  {
    id: 23,
    image: "/brends/Skoda.png",
    name: "Skoda"
  },    
  {
    id: 24,
    image: "/brends/Volkswagen.png",
    name: "Volkswagen"
  }  
 
]


const Prodmoskve = () => {
  return (
    <div className="car-container">
      <h1>Продажа автомобилей в Москве</h1>
      <p>Посмотреть все</p>

      <div className="car-list">
      {brends.map((brand) => (
        <Car 
          key={brand.id} 
          image={brand.image} 
          name={brand.name} 
          
        />
      ))}
            

        <div className="Pokaz">
         <h1>Показать еще</h1>
        </div>

      </div>
    </div>
  );
};

export { Prodmoskve };




































               