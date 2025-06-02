import './AutoCredit.css';

const AutoCredit = () => {
    return (
        <div className="car-loan-page">
          <div className="contentt">
            <h5>Автокредит</h5>
            <p className="intro-text">
              Получите автокредит на выгодных условиях! Мы предлагаем различные программы для покупки автомобиля вашей мечты.
            </p>
            
            <div className="loan-detailss">
              <h6>Преимущества автокредита:</h6>
              <ul className='ul'>
                <li>Низкие процентные ставки</li>
                <li>Удобные условия погашения</li>
                <li>Широкий выбор автомобилей</li>
                <li>Быстрое одобрение заявки</li>
              </ul>
            </div>
    
            <div className="cta">
              <button className="cta-buttonn">Оформить заявку</button>
            </div>
          </div>
        </div>
      );
    };

export { AutoCredit};