import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {slides && slides.map(slide=> <SwiperSlide key={slide._id}>
        <div className="p-12 min-h-[500px]  max-h-[600px] flex flex-col justify-between bg-slate-50">
                  <p className="max-w-lg mx-auto">{slide?.description}</p>

                  <div className="my-10 mx-auto ">
                    <img
                      src={slide?.img}
                      className="w-12 h-12 mx-auto rounded-full"
                      alt=""
                    />
                    <div className="mx-auto">
                      <p>Name:- {slide?.authorName}</p>
                      <p>Email:- {slide?.authorEmail}</p>
                    </div>
                  </div>
                </div>
      </SwiperSlide>)}
    </Swiper>
  );
};

export default Slider;
