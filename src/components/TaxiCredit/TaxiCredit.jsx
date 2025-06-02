
import './TaxiCredit.css';

const TaxiCredit = () => {
    return (
        <div className="taxi-loan-page">
          <div className="content">
            <h5>Такси в кредит</h5>
            <p className="intro-text">
              Получите автомобиль для работы в такси на выгодных условиях! Мы предлагаем специальные программы для водителей.
            </p>
            
            <div className="loan-details">
              <h6>Преимущества кредита на такси:</h6>
              <ul>
                <li>Низкие процентные ставки</li>
                <li>Гибкие условия погашения</li>
                <li>Широкий выбор автомобилей</li>
                <li>Быстрое одобрение заявки</li>
                <li>Поддержка на всех этапах</li>
              </ul>
            </div>
    
            <div className="cta">
              <button className="cta-button">Оформить заявку</button>
            </div>
          </div>
        </div>
      );
    };

export { TaxiCredit};