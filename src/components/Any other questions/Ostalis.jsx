
import './Ostalis.css';  


function Ostalis() {
    return (
        <div className="ostalis-container">
            <div className='Fot360'></div>
            <div className="background-imagee">
                <h1 className="header-text">Остались вопросы?</h1>
                <h2 className="header-subtext">Мы свяжемся с Вами в течении 10 минут и ответим на них.</h2>

                <div className="form-container">
                    <h1 className="input-fieldd">Ваше имя</h1>
                    <h2 className="input-field">+7 999 999-99-99</h2>
                    <h5 className="submit-button">Оставить заявку</h5>
                </div>

                <div className="agreement-container">
                    <img src="/questions/ikonka.png" alt="Icon" />
                    <p>Я соглашаюсь с условиями и даю свое согласие на обработку <br /> и использование моих персональных данных</p>
                </div>
            </div>
        </div>
    );
}

export { Ostalis };
