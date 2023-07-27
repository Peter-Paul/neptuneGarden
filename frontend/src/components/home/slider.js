import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';


import SlideNft from './slideNft';

function Slider({nfts}) {
    return ( 
        <div className=''>
            <h2 className='text-center text-light mb-3' style={{fontSize:"40px"}}>GALLERY</h2>
            <hr />
            <Swiper
                modules={[Autoplay ]}
                loop={true}
                // spaceBetween={180}
                // slidesPerView={5}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 180,
                      },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {nfts.map( (nft) => (
                    <SwiperSlide id={nft.cid} ><SlideNft nft={nft} /></SwiperSlide>
                ) )}
            </Swiper>
            {/* <hr className='text-sea' /> */}
        </div>
     );
}

export default Slider;