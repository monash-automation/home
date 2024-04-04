import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectName,
} from "@/components/projects/project-card";
import { Photo, PhotoCarousel } from "@/components/photo-carousel";
import photoLayout from "@/public/projects/printing-service/layout.jpg";
import photoPrintedModels from "@/public/projects/printing-service/printed-models.jpg";

const photos: Photo[] = [
  {
    image: photoLayout,
    description: "Layout of the printing service equipments",
  },
  {
    image: photoPrintedModels,
    description: "Printed models carrying by a robot arm",
  },
];

export default function PrintingServiceProjectCard() {
  return (
    <ProjectCard>
      <ProjectImage>
        <PhotoCarousel photos={photos} />
      </ProjectImage>
      <ProjectInfo>
        <ProjectName>Automated Printing Service</ProjectName>
        <ProjectDescription>
          The automated printing service on campus provides students with a
          user-friendly solution to bring their 3D models to life. 
        </ProjectDescription>
      </ProjectInfo>
    </ProjectCard>
  );
}
