
import './Luchshiy.css';

function Luchshiy() {
    return (
        <div className="luchshiy-container">
            <div className="luchshiy-title">
                <h1>Лучшие предложения на покупку автомобиля</h1>
            </div>

            <div className="luchshiy-images-container">
                <div className="luchshiy-image-item">
                    <img src="/car-photo/advertisement-1.png" alt="" />
                </div>
                <div className="luchshiy-image-item">
                    <img src="/car-photo/advertisement-2.png" alt="" />
                </div>
                <div className="luchshiy-image-item">
                    <img src="/car-photo/advertisement-3.png" alt="" />
                </div>
                <div className="luchshiy-image-item">
                    <img src="/car-photo/advertisement-4.png" alt="" />
                </div>
            </div>

            <h1 className="luchshiy-credit-calculator">Кредитный калькулятор</h1>
        </div>
    );
}

export { Luchshiy };
