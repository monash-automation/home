import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PrintingServiceProjectCard from "@/components/projects/printing-service";
import XmasTreeProjectCard from "@/components/projects/xmas-tree";
import LoongProjectCard from "@/components/projects/loong";

const LabOverview = () => {
  return (
    <Carousel opts={{watchDrag: false}}>
      <CarouselContent>
        <CarouselItem>
          <PrintingServiceProjectCard />
        </CarouselItem>
        <CarouselItem>
          <XmasTreeProjectCard />
        </CarouselItem>
        <CarouselItem>
          <LoongProjectCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 z-10 -ml-4 bg-white bg-opacity-90" />
      <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 z-10 -mr-4 bg-white bg-opacity-90" />
    </Carousel>
  );
};

export default LabOverview;
