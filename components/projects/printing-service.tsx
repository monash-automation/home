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
      <ProjectInfo>
        <ProjectName>Automated Printing Service</ProjectName>
        <ProjectDescription>
          The automated printing service on campus provides students with a
          user-friendly solution to bring their 3D models to life. Once students
          upload a G-code or STL file, the server efficiently schedules the
          printing process. Students can conveniently monitor the entire
          printing procedure online. Upon completion, the printed model is
          carefully placed on a designated shelf by robots, and students receive
          timely notifications for pickup. When students arrive at the lab, the
          robot ensures their printed models are positioned at the window for
          easy retrieval.
        </ProjectDescription>
      </ProjectInfo>
      <ProjectImage>
        <PhotoCarousel photos={photos} className="lg:top-6" />
      </ProjectImage>
    </ProjectCard>
  );
}
