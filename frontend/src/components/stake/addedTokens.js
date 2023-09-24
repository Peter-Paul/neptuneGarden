import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';
import AddedToken from "./addedToken";

function AddedTokens({nfts,removeNft}) {
    return ( 
            <div className="d-flex justify-content-center">
                <div className='col-12 col-md-8'>

                    <Swiper
                            modules={[Autoplay ]}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                        {nfts.map( (nft) => (
                            <SwiperSlide id={nft.id} ><AddedToken nft={nft} removeNft={removeNft}/></SwiperSlide>
                        ) )}
                    </Swiper>
                </div>
            </div>

     );
}

export default AddedTokens;