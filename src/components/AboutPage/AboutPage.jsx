
import './AboutPage.css';

function  AboutPage() {
  

 return (
    <div className="about-container">
      <div className="content-wrapper">
        <h1 className="aboutH">О Нашей Компании</h1>
        
        <p className="aboutT">
          Мы - современный автомобильный центр с 15-летним опытом работы на рынке. 
          Наша миссия - сделать покупку автомобиля простым, приятным и безопасным процессом. 
          Благодаря партнерству с ведущими мировыми брендами, мы предлагаем лучшие условия 
          покупки и сервис премиум-класса.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>15+ Брендов</h3>
            <p>Широкий выбор новых автомобилей от мировых производителей</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Профессиональный сервис</h3>
            <p>Собственный сервисный центр с современным оборудованием</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Гарантия качества</h3>
            <p>Все автомобили проходят многоэтапную проверку</p>
          </div>
        </div>
        
        <button className="ctaa-button">Узнать Больше</button>
      </div>
    </div>
  );
};

export {  AboutPage };