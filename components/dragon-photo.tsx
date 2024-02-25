import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import photo1 from "@/public/project-newyear-dragons/1.jpg";

export default function DragonPhoto() {
  return (
    <AspectRatio ratio={4 / 3}>
      <Image
        className="rounded-[0.4rem]"
        src={photo1}
        alt="new year dragon project"
        sizes="100vw"
      />
    </AspectRatio>
  );
}
