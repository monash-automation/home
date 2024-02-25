import photoDesign from "@/public/project-xmas-tree/xmas-design.jpg";
import photoTune from "@/public/project-xmas-tree/xmas-tuning.jpg";
import { PhotoCarousel, Photo } from "@/components/photo-carousel";

const xmasPhotos: Photo[] = [
  {
    image: photoDesign,
    description: "A team member is designing on whiteboard",
  },
  {
    image: photoTune,
    description: "A team member is debugging the program",
  },
];

export default function XmasPhotoCarousel() {
  return <PhotoCarousel photos={xmasPhotos} />;
}
