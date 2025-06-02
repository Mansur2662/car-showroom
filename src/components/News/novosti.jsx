import "./novosti.css"


function Novosti() {
    return ( 
        <div className="novosti">
             <div className="headerr-section">
             <h1>Новости</h1>
              <p className="view-allll">Посмотреть все</p>
             </div>




             <div className="flexxx">
               <div className="cardd-grid">
               <div className="cardd-container">
               <img className="topp-image" src="/car-photo/Lada.png" alt="Special Offer" />
               <h1  style={{fontSize:"12px",color:"#424242"}}>16 марта 2023</h1>
               <h1 style={{fontSize:"20px",marginTop:"10px"}} className="card-title">LADA внедряет собственную программу утилизации</h1>
               <p style={{fontSize:"16px",color:"#424242",marginTop:"10px"}} className="card-description">Условия программы действуют при сдаче автомобиля, выходящего из эксплуатации, в зачет стоимости...</p>
               
              
             
              
             
             
             </div>
             </div>
             
             
             
             
             
             <div className="cardd-grid">
               <div className="cardd-container">
               <img className="topp-image" src="/car-photo/Bmw.png" alt="Special Offer" />
               <h1  style={{fontSize:"12px",color:"#424242"}}>16 марта 2023</h1>
               <h1 style={{fontSize:"20px",marginTop:"10px"}} className="card-title">Дилер BMW отчитался за 2022 год: “Поставки не прекращались”</h1>
               <p style={{fontSize:"16px",color:"#424242",marginTop:"10px"}} className="card-description">На протяжении прошлого года официальный дилер BMW и Mini в Беларуси реализовал 408...</p>
               
              
             
               
             
               
             </div>
             </div>
             
             
             
             
             
             
             
             
             <div className="cardd-grid">
               <div className="cardd-container">
               <img className="topp-image" src="/car-photo/Dongfeng.png" alt="Special Offer" />
               <h1  style={{fontSize:"12px",color:"#424242"}}>16 марта 2023</h1>
               <h1 style={{fontSize:"20px",marginTop:"10px"}} className="card-title">LADA внедряет собственную программу утилизации</h1>
               <p style={{fontSize:"16px",color:"#424242",marginTop:"10px"}} className="card-description">Условия программы действуют при сдаче автомобиля, выходящего из эксплуатации, в зачет стоимости...</p>
               
               
             
            
             
           
             </div>
             </div>
             </div>

        </div>
    )
}

export {Novosti}
