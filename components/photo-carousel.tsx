"use client";

import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { cn } from "@/lib/utils";

export type Photo = {
  image: StaticImageData;
  description: string;
};

export type PhotoCarouselProps = React.ComponentProps<"div"> & {
  photos: Photo[];
};

export function PhotoCarousel({ photos, className }: PhotoCarouselProps) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 9000,
        }),
      ]}
      opts={{
        loop: true,
        duration: 50,
      }}
      className={cn(className)}
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
