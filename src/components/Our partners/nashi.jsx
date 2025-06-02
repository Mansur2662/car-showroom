import "./nashi.css";
import PropTypes from 'prop-types';


const Carr = ({ image }) => {
  if (!image) {
    return null; 
  }
  return (
    <div className="carr">
      <img src={image} alt="Car" className="carr-img" />
    </div>
  );
};

Carr.propTypes = {
  image: PropTypes.string.isRequired,
};


const banks = [
  {
    id: 1,
    image: "/banks/Sber-bank.png",
  },
  {
    id: 2,
    image: "/banks/Alfa-bank.png",
  },
  {
    id: 3,
    image: "/banks/Russkiy-standart-bank.png",
  },
  {
    id: 4,
    image: "/banks/Ingostrah.png",
  },
  {
    id: 5,
    image: "/banks/Peco-garantiya.png",
  },
  {
    id: 6,
    image: "/banks/Renessans-strahovaniye.png",
  },
  {
    id: 7,
    image: "/banks/Renessans-strahovaniye.png",
  },
  {
    id: 8,
    image: "/banks/Sber-bank.png",
  },
  {
    id: 9,
    image: "/banks/Peco-garantiya.png",
  },
  {
    id: 10,
    image: "/banks/Russkiy-standart-bank.png",
  },
  {
    id: 11,
    image: "/banks/Alfa-bank.png",
  },
  {
    id: 12,
    image: "/banks/Sber-bank.png",
  }, {
    id: 13,
    image: "/banks/Sber-bank.png",
  },
  {
    id: 14,
    image: "/banks/Alfa-bank.png",
  },
  {
    id: 15,
    image: "/banks/Russkiy-standart-bank.png",
  },
  {
    id: 16,
    image: "/banks/Ingostrah.png",
  },
  {
    id: 17,
    image: "/banks/Peco-garantiya.png",
  },
  {
    id: 18,
    image: "/banks/Renessans-strahovaniye.png",
  },
  
];

const Nashi = () => {
  return (
    <div className="carr-container">
      <h1>Наши партнеры</h1>

      <div className="carr-list">
        {banks.map((bank) => (
          <Carr 
            key={bank.id} 
            image={bank.image} 
          />
        ))}
      </div>
    </div>
  );
};

export { Nashi };

