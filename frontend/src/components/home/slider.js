import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';


import SlideNft from './slideNft';

function Slider({nfts}) {
    return ( 
        <div>
            <Swiper
                modules={[Autoplay ]}
                // spaceBetween={180}
                // slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                // 768: {
                //     slidesPerView: 3,
                //     spaceBetween: 40,
                // },
                1880: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {nfts.map( (nft) => (
                    <SwiperSlide id={nft.cid} ><SlideNft nft={nft} /></SwiperSlide>
                ) )}
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide> */}
            </Swiper>
        </div>
     );
}

export default Slider;