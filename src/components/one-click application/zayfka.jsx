


import './Zayfka.css'; 

function Zayfka() {
    return ( 
        <div className="container">
            <div className="background">
                <div>
                    <h1 className="title">Заявка в один клик</h1><br />
                    <h2 className="subtitle">Оставьте заявку и мы подберем для Вас лучшее предложение.</h2>

                    <div className="form-containerr">
                        <h1 className="input-field">Марка</h1>
                        <h2 className="input-field">Модель</h2>
                        <h3 className="input-field">Ваше имя</h3>
                        <h4 className="input-field">+7 999 999-99-99</h4>
                        <h5 className="submit-button">Оставить заявку</h5>
                    </div>

                    <div className="privacy-policy">
                        <img src="/application/ikonka.png" alt="Icon" />
                        <p>Я соглашаюсь с условиями и даю свое согласие на обработку <br /> и использование моих персональных данных</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}






export { Zayfka };
