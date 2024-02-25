"use client";

import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type Photo = {
  image: StaticImageData;
  description: string;
};

type PhotoCarouselProps = {
  photos: Photo[];
};

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      opts={{
        loop: true,
        duration: 50,
      }}
    >
      <CarouselContent>
        {photos.map((photo: Photo, index: number) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={photo.image}
                alt={photo.description}
                className="rounded-[0.4rem]"
                loading="eager"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
