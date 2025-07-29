import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="https://sdmntpritalynorth.oaiusercontent.com/files/00000000-177c-6246-ab3b-71c56b0051ce/raw?se=2025-07-26T08%3A32%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=bd33c600-1fcf-5160-9525-8212e10cae00&skoid=b32d65cd-c8f1-46fb-90df-c208671889d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-26T07%3A18%3A41Z&ske=2025-07-27T07%3A18%3A41Z&sks=b&skv=2024-08-04&sig=hGSNpVS35HSiAC4kBzjfEnkYyefwsPFH4h4tNbwhJus%3D" alt="logo" className="footer-logo-img" />
                    </div>
                    <div className="footer-company-name">
                        <h3>Компания НСК</h3>
                    </div>
                    <div className="footer-address">
                        <p>Адрес: Ул. Пушкина д. Колотушкина</p>
                        <p>+7 999 123 45 67</p>
                        <p>+7 888 234 56 78</p>
                    </div>

                    {/* Полезные ссылки теперь в этом столбике */}
                    <h3>Полезные ссылки</h3>
                    <ul className="links-list">
                        <li><a href="https://www.avito.ru">Авито</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Основные услуги</h3>
                    <div className="services-list-container">
                        <ul className="services-list">
                            <li>Уборка квартир</li>
                            <li>Уборка офисов</li>
                            <li>Мойка окон</li>
                            <li>Мытьё витрин</li>
                            <li>Стирка</li>
                            <li>Глажка</li>
                            <li>Дезинфекция</li>
                            <li>Послестроительная уборка</li>
                            <li>Уборка снега</li>
                        </ul>
                        <ul className="services-list">
                            <li>Чистка ковров</li>
                            <li>Уборка после ремонта</li>
                            <li>Уборка жилых помещений</li>
                            <li>Мойка фасадов</li>
                            <li>Мытьё мебели</li>
                            <li>Профессиональная уборка</li>
                            <li>Уборка после мероприятий</li>
                            <li>Генеральная уборка</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Тонкая полоска */}
            <div className="footer-line"></div>
            <div className="footer-bottom">
                <p>Никакая информация на данном сайте не является публичной офертой. Мы стараемся вовремя обновлять сайт и исправлять все найденные ошибки, но всё же очень просим Вас проверять важную для Вас информацию телефонным звонком.</p>
            </div>
        </footer>
    );
}

export default Footer;
