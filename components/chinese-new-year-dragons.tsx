"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import photo1 from "@/public/project-newyear-dragons/1.jpg";
import photo2 from "@/public/project-newyear-dragons/2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";

const photos = [photo1, photo2];

export default function ChineseNewYearDragon() {
  return (
    <Swiper
      modules={[Autoplay, A11y]}
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
      }}
      centeredSlides={true}
      slidesPerView={1}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.src}>
          <AspectRatio ratio={4 / 3}>
            <Image className="rounded-2xl" src={photo} alt={"new year dragon project"} fill />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
