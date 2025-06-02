import  { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {  faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

function Contact() {
    // Инициализация AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            once: true,     // Анимация сработает только один раз
        });
    }, []);

    return (
        <div className='contact'>
            <div className="contact-section">
                <h2 data-aos="fade-down">Свяжитесь с нами</h2>
                <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">
                    Мы готовы ответить на ваши вопросы
                </p>
                <div className="contact-info">
                    <div className="contact-item" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </div>
                        <h3>Телефон</h3>
                        <p><a href="tel:+1234567890">+992 905-26-26-62</a></p>
                    </div>
                    <div className="contact-item" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <h3>Электронная почта</h3>
                        <p><a href="mailto:example@example.com">SharipovMansur@gmail.com</a></p>
                    </div>
                    <div className="contact-item" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <h3>Адрес</h3>
                        <p>улица Бободжана Гафурова<br />Город: Душанбе</p>
                    </div>
                </div>
                <div className="social-links" data-aos="fade-up" data-aos-delay="500">
                   
                    <a href="https://www.instagram.com/mansur_1111_?igsh=bHF4MG5xMmVsdTRy&utm_source=qr" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  
                </div>
            </div>
        </div>
    );
}

export { Contact };