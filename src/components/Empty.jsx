import React, { useState } from "react";
import './Empty.css';

const Empty = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            text: "Клининг-компания выполнила уборку нашего офиса на высшем уровне. Всё было идеально чисто, сотрудники внимательные и профессиональные. Очень довольны результатом!",
            service: "Уборка офиса",
            rating: "5 из 5",
            stars: "★★★★★"
        },
        {
            text: "Мы заказывали уборку после ремонта, и результат превзошел все ожидания. Всё было сделано быстро и качественно. Рекомендуем!",
            service: "Послестроительная уборка",
            rating: "5 из 5",
            stars: "★★★★★"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className='empty'>
            <div className="hero">
                <div className="hero-text-top">
                    <div className="left-section">
                        <img src="https://sdmntpritalynorth.oaiusercontent.com/files/00000000-177c-6246-ab3b-71c56b0051ce/raw?se=2025-07-26T08%3A32%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=bd33c600-1fcf-5160-9525-8212e10cae00&skoid=b32d65cd-c8f1-46fb-90df-c208671889d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-26T07%3A18%3A41Z&ske=2025-07-27T07%3A18%3A41Z&sks=b&skv=2024-08-04&sig=hGSNpVS35HSiAC4kBzjfEnkYyefwsPFH4h4tNbwhJus%3D" alt="logo" className="logo" />
                        <span className="company-name">Клининг НСК</span>
                    </div>
                    <div className="center-section">
                        <span className="phone-number">+7 999 123 45 67</span>
                        <span className="phone-number">+7 888 234 56 78</span>
                    </div>
                    <div className="right-section">
                        <span className="email">po4ta@blabla.com</span>
                    </div>
                </div>
                <div className="hero-text-center">
                    <span className="text-zag">Клининг — услуги Бердск - Новосибирск</span>
                    <span className="text-podzag">Предлагаем своим клиентам услуги по уборке помещений, химчистке, уборке снега и другим работам. </span>
                </div>
            </div>

            <div className="service-block">
                <div className="service-items">
                    <div className="service-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/640px-LEGO_logo.svg.png" alt="Уборка" className="service-image" />
                        <h3 className="service-item-zt">Уборка</h3>
                        <ul>
                            <li className="service-item-text">Послестрой</li>
                            <li className="service-item-text">Квартиры, коттеджи</li>
                            <li className="service-item-text">Офисы</li>
                        </ul>
                    </div>
                    <div className="service-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/640px-LEGO_logo.svg.png" alt="Мойка" className="service-image" />
                        <h3 className="service-item-zt">Мойка остекления</h3>
                        <ul>
                            <li className="service-item-text">Окна</li>
                            <li className="service-item-text">Витрины</li>
                            <li className="service-item-text">Вывески</li>
                        </ul>
                    </div>
                    <div className="service-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/640px-LEGO_logo.svg.png" alt="Разное" className="service-image" />
                        <h3 className="service-item-zt">Разное</h3>
                        <ul>
                            <li className="service-item-text">Глажка</li>
                            <li className="service-item-text">Стирка</li>
                            <li className="service-item-text">Дезинфикация</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-block">
                <h2 className="about-title">Немного слов о нашей клининговой компании</h2>
                <p className="about-description">
                    Наша клининговая компания предоставляет качественные и доступные услуги по уборке в Новосибирске, Бердске и ближайших городах. Мы всегда готовы выполнить свою работу на высоком уровне, обеспечивая тщательную и качественную уборку помещений.
                </p>
                <p className="about-description">
                    Готовы ответить на любые ваши вопросы с 09:00 до 22:00 ежедневно, без выходных и праздников. Мы ценим ваше время и гарантируем, что каждая деталь будет учтена и выполнена с максимальной аккуратностью.
                </p>

                <div className="about-columns">
                    <div className="about-left">
                        <h3 className="column-title">Услуги уборки</h3>
                        <p className="column-text">
                            Чистота — это не просто комфорт, это основа здоровья и уюта в любом пространстве. Наша клининговая компания предлагает комплексные услуги по уборке, направленные на поддержание порядка и гигиены как в жилых, так и в коммерческих помещениях.
                        </p>
                        <p className="column-text">
                            Мы заботимся не только о внешнем виде вашего пространства, но и о вашем самочувствии. Регулярная и качественная уборка — залог чистого воздуха, свободного от пыли и аллергенов. Мы уделяем внимание каждой детали: полы, окна, мебель, ванные комнаты — всё будет сиять.
                            Обращаясь к нам, вы получаете не просто чистоту, а спокойствие, уверенность и заботу о вашем благополучии.
                        </p>
                    </div>
                    <div className="about-right">
                        <h3 className="column-title">Что мы делаем</h3>
                        <ul className="about-list">
                            <li>Уборка квартир и коттеджей</li>
                            <li>Мытьё окон и витрин</li>
                            <li>Стирка, глажка и дезинфекция</li>
                            <li>Послестроительная и регулярная уборка</li>
                            <li>Уборка снега во дворе и на крышах</li>
                        </ul>
                    </div>
                    <div className="about-right">
                        <h3 className="column-title">Оказание отдельных клининговых услуг</h3>
                        <ul className="about-list">
                            <li>Глубокая размывка пола (чистка твердого пола)</li>
                            <li>Мойка окон, фасадов, витрин и вывесок;</li>
                            <li>Механизированная уборка территории от снега</li>
                            <li>Чистка крыш от снега, наледи и сосулек;</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="completed-orders">
                <h2 className="completed-title">Выполнено более 1000 заказов</h2>
                <div className="completed-images">
                    <div className="image-row">
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 1" className="completed-image" />
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 2" className="completed-image" />
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 1" className="completed-image" />
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 2" className="completed-image" />
                    </div>
                    <div className="image-row">
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 5" className="completed-image" />
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 6" className="completed-image" />
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 7" className="completed-image" />
                        <img src="https://main-cdn.sbermegamarket.ru/big1/hlr-system/109/425/399/418/124/2/600005484371b0.jpeg" alt="Заказ 8" className="completed-image" />
                    </div>
                </div>
            </div>

            <div className="reviews-block">
                <h2 className="reviews-title">Отзывы наших клиентов</h2>
                <div className="review-container">
                    <button className="review-nav-button left-button" onClick={prevReview}>←</button>
                    <div className="review">
                        <p className="review-text">
                            {reviews[currentReview].text}
                        </p>
                    </div>
                    <button className="review-nav-button right-button" onClick={nextReview}>→</button>
                </div>
                <div className="review-footer">
                    <span className="review-service">{reviews[currentReview].service}</span>
                    <div className="review-rating">
                        <span>{reviews[currentReview].rating}</span>
                        <span className="stars">{reviews[currentReview].stars}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Empty;