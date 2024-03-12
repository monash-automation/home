import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectName,
} from "@/components/projects/project-card";
import { Photo, PhotoCarousel } from "@/components/photo-carousel";
import photoDesign from "@/public/projects/xmas-tree/design.jpg";
import photoTune from "@/public/projects/xmas-tree/debug.jpg";

const photos: Photo[] = [
  {
    image: photoDesign,
    description: "A team member is designing on whiteboard",
  },
  {
    image: photoTune,
    description: "A team member is debugging the program",
  },
];

export default function XmasTreeProjectCard() {
  return (
    <ProjectCard>
      <ProjectImage>
        <PhotoCarousel photos={photos} />
      </ProjectImage>
      <ProjectInfo>
        <ProjectName>Christmas Tree</ProjectName>
        <ProjectDescription>
          A fun little side project - dynamic Christmas tree lights inspired by
          &nbsp;
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=TvlpIojusBE"
          >
            Matt Parker
          </a>
          . This uses computer vision to calculate the 3D positions of 500 LEDs
          and display live effects.
        </ProjectDescription>
      </ProjectInfo>
    </ProjectCard>
  );
}
