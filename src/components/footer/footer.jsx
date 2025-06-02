
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div>
                <img src="/logo/logotip.png" alt="Logo" className="footer-logo" />
            </div>

            <div className="footer-content">
                <div className="footer-column">
                    <h1>
                        <span>Ежедневно с 09:00 до 21:00</span><br/>
                        <span className="large-text">+7 495 374-94-88</span><br/>
                        <span>Обратный звонок</span><br/>
                        <span className="large-text">support@auto-dinamika.com</span><br/>
                        <span className="large-text">г. Москва, ул. Крылатская,<br/> д. 2, корп. 4</span>
                    </h1>
                </div>
                <div className="footer-column">
                    <h1 className="large-text"> Автомобили<br/>
                        <span className="small-text">Новые автомобили<br/>Автомобили с пробегом<br/>Автомобили для такси</span>
                    </h1>
                </div>
                <div className="footer-column">
                    <h1 className="large-text">Варианты кузова<br/>
                        <span className="small-text">Седан<br/>Кроссовер<br/>Универсал<br/>Внедорожник<br/>Хэтчбек</span>
                    </h1>
                </div>
                <div className="footer-column">
                    <h1 className="large-text">Услуги<br/>
                        <span className="small-text">Кредит<br/>Trade-In<br/>Выкуп автомобилей<br/>Услуги для такси</span>
                    </h1>
                </div>
                <div className="footer-column">
                    <h1 className="large-text">О компании<br/>
                        <span className="small-text">Отзывы<br/>Новости<br/>Партнеры<br/>Контакты<br/>Карта сайта</span>
                    </h1>
                </div>
            </div>

            <div className="footer-notice">
                <h1>Обращаем ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной<br/> офертой, определяемой положениями статьей 435, 437, 494 Гражданского кодекса Российской Федерации. Для получения подробной информации о стоимости<br/> автомобилей обращайтесь в отдел продаж.*Представленные на сайте калькуляции кредита на автомобиль являются приблизительными, точная стоимость <br/>финансирования рассчитывается кредитным специалистом в зависимости от индивидуальных параметров заёмщика при предоставлении двух документов в<br/> организацию.</h1>
            </div>

            <div className="footer-legal">
                <h1>ООО «АВТО-ГАРАНТ», ИНН / КПП 7734459351 / 73401001, Юр. адрес: 123098, г. Москва, ул. Рогова, д. 12, помещение 2П<br/>
                    Политика конфиденциальности | Пользовательское соглашение | Условия кредитования</h1>
            </div>
        </div>
    );
}




function FooterM() {
    return (
        <div className="FooterM">
            
        <div className="Back">
           <img style={{marginTop:"40px",marginLeft:"180px",width:"140px",height:"28px"}} src="/logo/logotip.png" alt="" />
           </div>
           <div className="FFF">
           <h1 style={{color:"white",marginTop:"40px",marginLeft:"30px",fontSize:"14px"}}>
                        <span>Ежедневно с 09:00 до 21:00</span><br/>
                        <span >+7 495 374-94-88</span><br/>
                        <span>Обратный звонок</span><br/>
                        <span>support@auto-dinamika.com</span><br/>
                        <span>г. Москва, ул. Крылатская,<br/> д. 2, корп. 4</span>
           </h1>


           <h1 style={{color:"white",marginTop:"40px",marginLeft:"30px",fontSize:"14px"}}>Автомобили<br/>
                        <span style={{color:"#939597"}}>Новые автомобили<br/>Автомобили с пробегом<br/>Автомобили для такси</span>
                    </h1>

                    <h1 style={{color:"white",marginTop:"40px",marginLeft:"30px",fontSize:"14px"}}>Варианты кузова<br/>
                        <span style={{color:"#939597"}}>Седан<br/>Кроссовер<br/>Универсал<br/>Внедорожник<br/>Хэтчбек</span>
                    </h1>
                  
       
        </div>

        <div style={{display:"flex"}}>
        <h1 style={{color:"white",marginTop:"40px",marginLeft:"280px",fontSize:"14px"}}> Услуги<br/>
                       <span style={{color:"#939597"}}>Кредит<br/>Trade-In<br/>Выкуп автомобилей<br/>Услуги для такси </span>
                    </h1>
                    <h1 style={{color:"white",marginTop:"40px",marginLeft:"30px",fontSize:"14px"}}>О компании<br/>
                        <span style={{color:"#939597"}}>Отзывы<br/>Новости<br/>Партнеры<br/>Контакты<br/>Карта сайта </span>
                    </h1>
        </div>
        <div>

        </div>
      <h1  style={{color:"#939597",fontSize:"14px",marginLeft:"160px",marginTop:"20px"}}>Обращаем ваше внимание на то, что данный Интернет-сайт носит<br/> исключительно информационный характер и ни при каких условиях не является <br/>публичной офертой, определяемой положениями статьей 435, 437, 494<br/> Гражданского кодекса Российской Федерации. Для получения подробной <br/>информации о стоимости автомобилей обращайтесь в отдел<br/> продаж.*Представленные на сайте калькуляции кредита на автомобиль <br/>являются приблизительными, точная стоимость финансирования<br/> рассчитывается кредитным специалистом в зависимости от индивидуальных<br/> параметров заёмщика при предоставлении двух документов в организацию.</h1>
      <h1 style={{color:"#939597",fontSize:"14px",marginLeft:"160px"}}>ООО «АВТО-ГАРАНТ», ИНН / КПП 7734459351 / 73401001, Юр. адрес: 123098, г. <br/>Москва, ул. Рогова, д. 12, помещение 2П<br/>
      Политика конфиденциальности | Пользовательское соглашение | Условия<br/> кредитования</h1>
         </div>
    )
}









export { Footer };
export { FooterM };

