import "./kredit.css";


function Kredit() {
    return (
        
        <div className="kredit-container">
            <div className="Foto360"></div>
            <div className="kredit-main">
                {/* Левая часть */}
                <div className="kredit-left">
                    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                        <h1 className="kredit-input">Марка</h1>
                        <h2 className="kredit-input">Модель</h2>
                    </div>

                    <h1 className="kredit-input kredit-input-wide">Комплектация</h1>

                    <h1 style={{ fontSize: "14px" }}>Цвет</h1>
                    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                        <div className="color-box" style={{ backgroundColor: "#000000" }}></div>
                        <div className="color-box" style={{ backgroundColor: "#505050" }}></div>
                        <div className="color-box" style={{ backgroundColor: "#A7A7A7" }}></div>
                        <div className="color-box" style={{ backgroundColor: "#FFFFFF" }}></div>
                        <div className="color-box" style={{ backgroundColor: "#E80000" }}></div>
                        <div className="color-box" style={{ backgroundColor: "#0054D2" }}></div>
                        <div className="color-box" style={{ backgroundColor: "#039900" }}></div>
                    </div>

                    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                        <h1 className="price">11 980 000 руб.*</h1>
                        <h2 className="discounted-price">12 240 000 руб.</h2>
                    </div>

                    <h2 style={{ fontSize: "10px", color: "#424242" }}>
                        * Цена указана с максимальной скидкой по программе выгодной автокредит+
                    </h2>

                    <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
                        <div className="color-box">
                            <img src="/сredit-сalculator/ikonka.png" alt="" />
                        </div>
                        <h2 style={{ fontSize: "14px", color: "#424242", marginTop: "4px" }}>
                            Зачет стоимости автомобиля по программе Trade-In до 150 000 руб.
                        </h2>
                    </div>

                    <h1 style={{ fontSize: "14px" }}>Первоначальный взнос</h1>
                    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                        <h1 className="kredit-input">20 %</h1>
                        <h2 className="kredit-input">2 000 000 РУБ.</h2>
                    </div>

                    <img style={{ width: "500px", height: "80px" }} src="/сredit-сalculator/img-1.jpg" alt="" />
                    <h1 style={{ fontSize: "14px" }}>Срок кредита</h1>
                    <img style={{ width: "500px", height: "80px" }} src="/сredit-сalculator/img-2.jpg" alt="" />
                </div>

                {/* Правая часть */}
                <div className="kredit-right">
                    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                        <img src="/сredit-сalculator/Mazda.png" alt="" />
                        <h1 style={{ fontSize: "14px" }}>
                            Марка: Chery <br />
                            Модель: Tiggo 7 <br />
                            Комплектация: Sport 1.5 MT PRO <br />
                            Цвет: Красный <br />
                            Стоимость: 11 000 000 руб.* <br />
                            <span style={{ fontSize: "8px" }}>
                                * Цена указана с максимальной скидкой по программе «выгодной автокредит+»
                            </span>
                        </h1>
                    </div>

                    <div>
                        <h1 style={{ fontSize: "14px", marginLeft: "20px" }}>
                            Кредитная программа: Сhery Finance* <br />
                            Первоначальный взнос: 2 000 000 руб. <br />
                            Срок кредитования: 54 месяца <br />
                            Ежемесячный платеж: 120 000 руб. <br />
                            Сумма платежа в день: 2 000 руб. <br />
                            Ставка: 4.6%* <br />
                            <span style={{ fontSize: "8px" }}>
                                * Ставка действует по программе «выгодной автокредит+»
                            </span>
                        </h1>
                        <div className="submit-button">Отправить заявку</div>
                    </div>

                    <div className="checkbox-container">
                        <div className="checkbox"></div>
                        <h2 className="checkbox-text">
                            Я соглашаюсь с условиями и даю свое согласие на обработку и использование моих персональных данных
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Kredit };