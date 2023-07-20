import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';
import CollectionNft from './collectionNft';


function CollectionSlider({nfts}) {
    return ( 
        <>         
            <div className='card'>
            <div className='card-body'>
                <h3 className='text-center text-sea mb-3'>Neptune Garden's Collection</h3>
                <hr className='text-sea' />
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
                            slidesPerView: 3,
                            spaceBetween: 180,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {nfts.map( (nft) => (
                        <SwiperSlide id={nft.cid} ><CollectionNft nft={nft} /></SwiperSlide>
                    ) )}
                </Swiper>
                <hr className='text-sea' />
            </div>
            </div>
        </>
     );
}

export default CollectionSlider;