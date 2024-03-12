import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectName,
} from "@/components/projects/project-card";
import Image from "next/image";
import photoModel from "@/public/projects/loong/model.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        <AspectRatio ratio={4 / 3}>
          <Image
            className="rounded-[0.4rem]"
            src={photoModel}
            alt="a printed loong model"
            sizes="100vw"
          />
        </AspectRatio>
      </ProjectImage>
    </ProjectCard>
  );
}
