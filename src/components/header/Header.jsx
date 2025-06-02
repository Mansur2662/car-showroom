import { Link } from "react-router-dom"; 
import "./Header.css";


function Header() {
  return (
    <header>
      <div className="header-1">
        <div className="header-item">
          <img className="clock" src="/header/clock.png" alt="Clock" />
          <p>Работаем ежедневно с 9:00 до 21:00</p>
        </div>
        <div className="header-item">
          <img src="/header/tel.png" alt="Icon 1" />
          <p className="ikon-1">Клиентский центр 8 800 777-77-77 (Звонок по России бесплатный)</p>
        </div>
        <div className="header-item">
          <img src="/header/poisk.png" alt="Icon 2" />
          <p>Поиск</p>
        </div>
        <p>Обратный звонок</p>
      </div>

      <div className="header--2">
        <img src="/header/logotip.png" alt="фото логотипи фирма" />
        <Link to="/newcar"> Новые Автомобили</Link>
        <Link to="/mileagePage"> C пробегом</Link>
        <Link to="/taxicredit"> Такси в кредит</Link>
        <Link to="/autocredit"> Автокредит</Link>
        <Link to="/services"> Услуги</Link>
        <Link to="/aboutpage">О Компании</Link>
        <Link to="/contact">Контакты</Link>
        
      <div className="Bmenu" style={{ display: "flex", flexDirection: "column", gap: "5px",marginLeft:"150px" }}>
         <img src="/header/menu.png" alt="" />
         <img src="/header/menu.png" alt="" />
           <img src="/header/menu.png" alt="" />
      </div>
      </div>

      <div
        className="background-section-1"
      >
        <div className="durunisurat">
          <h1>ФИНАЛЬНАЯ РАСПРОДАЖА!</h1>
          <h2>Автомобили 2022 / 2023 года</h2>
          <h3 className="cherniyfon-3">Скидка на трейд-ин до <span className="highlight-text">30%</span></h3>
          <h4 className="cherniyfon-4">Автокредит <span className="highlight-text">4.9%</span></h4>
        </div>

        <div className="image-container">
          <img className="car-image-jip" src="/header/havai.png" alt="" />
          <img className="car-image-kiak7" src="/header/kia.png" alt="" />
        </div>
      </div>

      <div className="background-section-2">
        <div className="section-header">
          <h1>Подобрать автомобиль</h1>
          <h2 className="car-type new">Новые</h2>
          <h3 className="car-type used">С пробегом</h3>
          <h4 className="car-type taxi">Авто для такси</h4>
        </div>

        <div className="filter-options">
          <h1 className="filter-option">Марка</h1>
          <h2 className="filter-option">Модель</h2>
          <h3 className="filter-option price-range">
            <span>Цена от</span>
            <span className="separator"></span>
            <span>Цена до</span>
          </h3>
          <h4 className="filter-option select-button">Подобрать</h4>
        </div>
      </div>

   

      
    </header>
  );
}



    
  
    
    
  
      
      
   
   
    

   
 












    function Header1() {
      return (
        
 <div className="Headerr">
      
        <div className="header-1">        
        <div className="header-item">
        <img src="/header/tel.png" alt="Icon 1" />
          <p className="ikon-1">8 800 777-77-77</p>
          
        </div>
        <div className="header-item">
          <img src="/header/poisk.png" alt="Icon 2" />
          <p>Поиск</p>
        </div>
        <p>Обратный звонок</p>
        </div>



      <div className="header-2">
      <img className="logotip2" src="/header/logotip.png" alt="фото логотипи фирма" />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px",marginLeft:"150px" }}>
         <img src="/header/menu.png" alt="" />
         <img src="/header/menu.png" alt="" />
           <img src="/header/menu.png" alt="" />
      </div>
      </div>


      <div className="Fotoo">
            <div style={{backgroundImage: `url("/header/city.png")`,width:"834px",height:"560px"}}>
            <div style={{marginLeft:"200px",color:"white"}}>
            <h1 style={{ fontSize: '33px'}}>ФИНАЛЬНАЯ РАСПРОДАЖА!</h1>
            <h2 style={{ fontSize: '28px', color: 'white',marginLeft:"-280px"}} >Автомобили 2022 / 2023 года</h2>
            <h3 style={{ fontSize: '24px',backgroundColor: '#000000',width: '312px',height: '30px'}} >Скидка на трейд-ин до <span style={{ color: 'red' }}>30%</span></h3>
            <h4 style={{ fontSize: '28px',backgroundColor: '#000000',width: '224px',height: '34px'}}> Автокредит <span style={{ color: 'red' }}>4.9%</span></h4>
            </div>
            
            
            
              <div style={{ display: 'flex', }}>
            <img     style={{
                   position: 'relative', 
                   width: 573,
                   height: 370,
                   top: -145,
                   left: 100
              }} src="/header/havai.png" alt="" />
            
            
            <img  style={{   
             width: 306,
             height: 169,
             top: 30,
             left: -140,
             position: 'relative',
            
            }} src="/header/kia.png" alt="" />
            </div>
            </div>


            <div><img style={{width:"834px",height:"520px"}}  src="/header/img(834px).png" alt="" /></div>
        
        </div>





      </div>
      )
    }


export { Header };
export { Header1 };
