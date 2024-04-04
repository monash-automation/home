import {
  MdOutlinePrecisionManufacturing,
  MdOutlineDesignServices,
} from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import PrintingServiceProjectCard from "@/components/projects/printing-service";
import XmasTreeProjectCard from "@/components/projects/xmas-tree";
import LoongProjectCard from "@/components/projects/loong";
import {
  TeamCard,
  TeamCardDescription,
  TeamCardTitle,
} from "@/components/teams/team-card";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Monash Automation",
  applicationName: "Monash Automation Home Page",
  description:
    "Monash Automation is a collaborative, student-led engineering team based at Monash University, Clayton. Operating from the Digital Twin Manufacturing Lab, students engage in hands-on projects, working with cutting-edge technologies such as 3D printing services, automation systems, and digital twin technologies. Under the guidance of academic advisors, students contribute to meaningful and innovative engineering projects.",
  keywords: [
    "Monash University",
    "Monash Automation",
    "student team",
    "engineering",
  ],
};

function TeamCards() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10"
      aria-description="Description of sub-teams"
    >
      <TeamCard>
        <TeamCardTitle>
          <h3>Manufacturing</h3>
          <MdOutlinePrecisionManufacturing className="w-6 h-6" />
        </TeamCardTitle>
        <TeamCardDescription>
          The manufacturing team aims to design and build smart systems. Our
          current project, “The Matrix”, is a modular shelving unit designed for
          3D printers. This will be the backbone of our automated printing
          service.
        </TeamCardDescription>
      </TeamCard>

      <TeamCard>
        <TeamCardTitle>
          <h3>Robotics</h3>
          <BsRobot className="w-6 h-6" />
        </TeamCardTitle>
        <TeamCardDescription>
          The robotics team manages various robotic systems and transport items
          to designated locations by coding. The team is also actively engaged
          in research, competition and exploration of robotic 6D printing.
        </TeamCardDescription>
      </TeamCard>

      <TeamCard>
        <TeamCardTitle>
          <h3>Software</h3>
          <FaCode className="w-6 h-6" />
        </TeamCardTitle>
        <TeamCardDescription>
          The software team develops applications that allow customers to
          monitor and receive updates about their 3D printing jobs, and
          manipulate real-world objects in the digital twins environment.
        </TeamCardDescription>
      </TeamCard>

      <TeamCard>
        <TeamCardTitle>
          <h3>Design</h3>
          <MdOutlineDesignServices className="w-6 h-6" />
        </TeamCardTitle>
        <TeamCardDescription>
          The design team is responsible for designing of 3D models, UI,
          posters, T-shirts and other visual assets intended for public
          consumption.
        </TeamCardDescription>
      </TeamCard>
    </div>
  );
}

function HeroSection({ className }: React.ComponentProps<"header">) {
  return (
    <header className={cn("flex flex-col items-center", className)}>
      <Image
        alt="Team Logo"
        className="mb-6"
        width={100}
        height={100}
        src="/logo.svg"
      />
      <h1 className="text-5xl font-bold text-center text-white">
        Monash Automation
      </h1>
      <p className="text-center text-white pt-2">
        Monash Automation is a collaborative, student-led engineering team based
        at Monash University, Clayton. Operating from the Digital Twin
        Manufacturing Lab, students engage in hands-on projects, working with
        cutting-edge technologies such as 3D printing services, automation
        systems, and digital twin technologies.
      </p>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection className="py-10" />

      <main className="my-10">
        <section className="mb-20" aria-description="Introduction of sub-teams">
          <h2 className="text-3xl font-bold text-center text-white mb-5">
            Sub-Teams
          </h2>
          <TeamCards />
        </section>

        <section
          className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-12 lg:mx-20"
          aria-description="Introduction of projects"
        >
          <h2 className="text-3xl font-bold text-center text-white">
            Lab Overview
          </h2>

          <PrintingServiceProjectCard />
          <XmasTreeProjectCard />
          <LoongProjectCard />
        </section>     
      </main>
    </>
  );
}
