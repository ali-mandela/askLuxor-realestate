import LayoutContainer from '../components/Layout';
import {Properties} from '../data';
import style from '../styles/property.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import PropertyComponent from '../components/PropertyComponent';
const ProperySection = () => {
    return (
        <LayoutContainer bgColor={"#000"}>
            <div className={style.propertyContainer}>
                <div className={style.propertyTop}>
                    <hr
                        style={{
                        border: "2px solid #91B029",
                        width: "90px",
                        display: "block",
                        margin: "auto"
                    }}/>

                    <h1>LATEST PROPERTIES</h1>
                    <p>Perspiciatis Perspiciatis quidem, harum provident, repellat sint officia quos
                        fugit tempora id deleniti.Perspiciatis quidem, harum provident, repellat sint
                        officia quos fugit tempora id deleniti.Perspiciatis quidem, harum provident,
                        repellat sint officia quos fugit tempora id deleniti. quidem, harum provident,
                        repellat sint officia quos fugit tempora id deleniti.</p>
                </div>
                <div className={style.propertyBody}>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                        loop={true}
                        pagination={{
                        clickable: true
                    }}
                        modules={[Pagination]}
                        className="mySwiper">
                        {Properties.map((item, i) => <SwiperSlide key={i}>
                            <PropertyComponent item={item}/>
                        </SwiperSlide>)
}
                    </Swiper>

                </div>
            </div>
        </LayoutContainer>
    )
}

export default ProperySection