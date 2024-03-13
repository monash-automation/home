import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectName,
} from "@/components/projects/project-card";
import { Photo, PhotoCarousel } from "@/components/photo-carousel";
import photoModel from "@/public/projects/loong/model.jpg";
import printingLoong from "@/public/projects/loong/printing.jpg";
import adjustPrinter from "@/public/projects/loong/adjust-printer.jpg";


const photos: Photo[] = [
  {
    image: photoModel,
    description: "Layout of the printing service equipments",
  },
  {
    image: printingLoong,
    description: "Loong model being printed by the 3D printer",
  },
  {
    image: adjustPrinter,
    description: "Keenan adjusting the printer",
  },
];

export default function LoongProjectCard() {
  return (
    <ProjectCard>
      <ProjectInfo>
        <ProjectName>Chinese Dragon (Loong) Models</ProjectName>
        <ProjectDescription>
          Uncover the wonder of crafting Gradient Chinese dragons with 3D
          printers, a captivating process that turns filament into eye-catching,
          vibrant creations. Delve into the fascinating technique of mixing
          colors and precise printing. The outcome? Dragons that are not just
          visually appealing but also showcase the innovative capabilities of 3D
          printing technology.
        </ProjectDescription>
      </ProjectInfo>
      <ProjectImage>
        <PhotoCarousel photos={photos} className="lg:top-6" />
      </ProjectImage>
    </ProjectCard>
  );
}
