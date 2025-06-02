
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🚘',
      title: 'Продажа авто',
      desc: 'Новые и подержанные автомобили от официальных дилеров'
    },
    {
      icon: '🔧',
      title: 'Техобслуживание',
      desc: 'Полный комплекс сервисных работ любой сложности'
    },
    {
      icon: '🛡️',
      title: 'Гарантия',
      desc: 'Расширенные гарантийные программы до 5 лет'
    },
    {
      icon: '💳',
      title: 'Рассрочка',
      desc: 'Выгодные программы кредитования и лизинга'
    },
    {
      icon: '🎨',
      title: 'Тюнинг',
      desc: 'Индивидуальный дизайн и дооснащение авто'
    },
    {
      icon: '🚛',
      title: 'Доставка',
      desc: 'Транспортировка автомобилей по всему миру'
    }
  ];

  return (
    <div className="services-container">
      <div className="content-wrapper">
        <h1 className="services-header">Наши Услуги</h1>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Services };
