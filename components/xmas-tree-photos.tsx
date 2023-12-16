"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import photo1 from "@/public/project-xmas-tree/1.jpg";
import photo2 from "@/public/project-xmas-tree/2.jpg";
import photo3 from "@/public/project-xmas-tree/3.jpg";
import photo4 from "@/public/project-xmas-tree/4.jpg";
import photo5 from "@/public/project-xmas-tree/5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";

const photos = [photo1, photo2, photo3, photo4, photo5];

export default function XmasTreePhotos() {
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
            <Image src={photo} alt={"xmas tree project"} fill />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
