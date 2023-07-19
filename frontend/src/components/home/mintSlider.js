import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


import MintNft from './mintNft';


function MintSlider({nfts}) {
    return ( 
        <>
            <Swiper
                modules={[Autoplay ]}
                loop={true}
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {nfts.map( (nft) => (
                    <SwiperSlide id={nft.cid} ><MintNft nft={nft} /></SwiperSlide>
                ) )}
            </Swiper>
        </>

     );
}

export default MintSlider;