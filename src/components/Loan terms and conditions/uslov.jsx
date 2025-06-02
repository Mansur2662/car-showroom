import "./uslov.css"


function Uslov() {
    
    return (
            <div className="uslovs"> 
                <div className="uslov">
                    <h1>Условия получения кредита</h1>
                    <p>Подробнее об автокредите</p>
                </div>
                


                <div className="flexpp">
                <div className="cardd">
                    <img className="cardd-image" src="/brends/img-1.png" alt="Image" />
                    <h2 className="cardd-title">
                    Условия получения кредита
                    </h2>
                    <p style={{fontSize:"16px", color:"#424242"}}>  Сумма до 7 000 000 руб.<br/>Срок кредита от 6 месяцев до 7 лет<br/>Возможность сдать свой автомобиль в Trade-In<br/>Досрочное погашение без штрафов и комиссий<br/>Без обязательного КАСКО и страхований</p>
                </div>
    
                <div className="cardd">
                    <img className="cardd-image" src="/brends/img-2.png" alt="Image" />
                    <h2 className="cardd-title">
                    Требования к получателю
                    </h2>
                    <p>Гражданство РФ<br/>Возраст от 21 года до 65 лет<br/>Паспорт и водительское удостоверение гражданина РФ<br/>Трудовой стаж на последнем месте работы не менее 6 месяцев<br/>Наличие постоянной регистрации на территории РФ</p>
                </div>
                
                </div>



                </div>
         

    )
}

export { Uslov };