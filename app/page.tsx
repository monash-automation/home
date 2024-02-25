import {
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import {
  MdOutlinePrecisionManufacturing,
  MdOutlineDesignServices,
} from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { ComponentProps } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import labImage from "../public/lab-old.jpg";
import { PiTiktokLogo } from "react-icons/pi";
import XmasPhotoCarousel from "@/components/xmas-photo-carousel";
import DragonPhoto from "@/components/dragon-photo";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Monash Automation is a collaborative, student-led engineering team based at Monash University, Clayton. Operating from the Digital Twin Manufacturing Lab, students engage in hands-on projects, working with cutting-edge technologies such as 3D printing services, automation systems, and digital twin technologies. Under the guidance of academic advisors, students contribute to meaningful and innovative engineering projects.",
};

export default function Home() {
  return (
    <div className="px-8 pt-10 font-sans text-lg bg-gradient-to-tl from-blue-500 to-green-400">
      <header className="py-10 flex flex-col items-center">
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
          Monash Automation is a collaborative, student-led engineering team
          based at Monash University, Clayton. Operating from the Digital Twin
          Manufacturing Lab, students engage in hands-on projects, working with
          cutting-edge technologies such as 3D printing services, automation
          systems, and digital twin technologies.
        </p>
      </header>

      <main className="my-10">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-5">
            Sub-Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            <Card className="bg-white rounded-xl shadow-md overflow-hidden">
              <CardHeader className="p-4 flex flex-row items-center content-center justify-between space-y-0">
                <h3 className="text-2xl font-bold">Manufacturing</h3>
                <MdOutlinePrecisionManufacturing className="w-6 h-6" />
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  The manufacturing team aims to design and build smart systems.
                  Our current project, “The Matrix”, is a modular shelving unit
                  designed for 3D printers. This will be the backbone of our
                  automated printing service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-md overflow-hidden">
              <CardHeader className="p-4 flex flex-row items-center content-center justify-between space-y-0">
                <h3 className="text-2xl font-bold">Robotics</h3>
                <BsRobot className="w-6 h-6" />
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  The robotics team manages various robotic systems and
                  transport items to designated locations by coding. The team is
                  also actively engaged in research, competition and exploration
                  of robotic 6D printing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-md overflow-hidden">
              <CardHeader className="p-4 flex flex-row justify-between items-center content-center space-y-0">
                <h3 className="text-2xl font-bold">Software</h3>
                <FaCode className="w-6 h-6" />
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  The software team develops applications that allow customers
                  to monitor and receive updates about their 3D printing jobs,
                  and manipulate real-world objects in the digital twins
                  environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-md overflow-hidden">
              <CardHeader className="p-4 flex flex-row items-center content-center justify-between space-y-0">
                <h3 className="text-2xl font-bold">Design</h3>
                <MdOutlineDesignServices className="w-6 h-6" />
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  The design team is responsible for designing of 3D models, UI,
                  posters, T-shirts and other visual assets intended for public
                  consumption.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-5">
            Our Projects
          </h2>

          <div className="grid grid-cols-1 gap-10">
            <Card className="bg-white rounded-xl shadow-md lg:mx-10 py-8">
              <CardContent className="p-4 lg:p-8 flex gap-6 lg:gap-24 flex-col lg:flex-row-reverse justify-between items-center">
                <div className="flex-1 sm:px-10 md:px-4">
                  <h3 className="text-2xl font-bold mb-5">
                    Automating Printing Service
                  </h3>
                  <p className="text-gray-600 text-lg">
                    The automated printing service on campus provides students
                    with a user-friendly solution to bring their 3D models to
                    life. Once students upload a G-code or STL file, the server
                    efficiently schedules the printing process. Students can
                    conveniently monitor the entire printing procedure online.
                    Upon completion, the printed model is carefully placed on a
                    designated shelf by robots, and students receive timely
                    notifications for pickup. When students arrive at the lab,
                    the robot ensures their printed models are positioned at the
                    window for easy retrieval.
                  </p>
                </div>
                <div className="flex-1 w-[75vw] lg:w-[40vw] rounded-full lg:pl-6">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      className="rounded-[0.4rem]"
                      src={labImage}
                      alt={"previous lab layout"}
                      sizes="100vw"
                      priority={false}
                    />
                  </AspectRatio>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-md lg:mx-10 py-8">
              <CardContent className="p-4 lg:p-8 flex gap-6 lg:gap-24 flex-col lg:flex-row justify-between items-center">
                <div className="flex-1 md:px-4">
                  <h3 className="text-2xl font-bold mb-5">Christmas Tree</h3>
                  <p className="text-gray-600 text-lg">
                    A fun little side project - dynamic Christmas tree lights
                    inspired by{" "}
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?v=TvlpIojusBE"
                    >
                      Matt Parker
                    </a>
                    . This uses computer vision to calculate the 3D positions of
                    500 LEDs and display live effects.
                  </p>
                </div>
                <div className="flex-1 w-[75vw] lg:w-[40vw] rounded-full lg:pr-6">
                  <XmasPhotoCarousel />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-md lg:mx-10 py-8">
              <CardContent className="p-4 lg:p-8 flex gap-6 lg:gap-24 flex-col lg:flex-row-reverse justify-between items-center">
                <div className="flex-1 sm:px-10 md:px-4">
                  <h3 className="text-2xl font-bold mb-5">
                    Chinese New Year Dragons
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Uncover the wonder of crafting Gradient Chinese New Year
                    Dragons with 3D printers, a captivating process that turns
                    filament into eye-catching, vibrant creations. Delve into
                    the fascinating technique of mixing colors and precise
                    printing. The outcome? Dragons that are not just visually
                    appealing but also showcase the innovative capabilities of
                    3D printing technology.
                  </p>
                </div>
                <div className="flex-1 w-[75vw] lg:w-[40vw] rounded-full lg:pl-6">
                  <div className="flex-1 w-[75vw] lg:w-[40vw] rounded-xl">
                    <DragonPhoto />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-5">
            Join Us
          </h2>
          <p className="text-center text-white mb-10">
            We are looking for skilled and passionate individuals to join our
            team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-white rounded-xl shadow-md grid grid-cols-1 justify-between">
              <CardHeader className="p-4">
                <h3 className="text-2xl text-center font-bold">Tech Member</h3>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600 pb-8">
                  A tech member provides essential expertise to navigate and
                  implement technological solutions. They contribute to
                  innovation, problem-solving, and project development,
                  fostering a dynamic learning environment. As a technical
                  member you will both learn and build upon skills in the
                  following areas:
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 xl:pl-10 text-gray-600 list-disc pl-5">
                  <li>CAD Designing</li>
                  <li>Advanced Manufacturing</li>
                  <li>3D Printing</li>
                  <li>Robotics</li>
                  <li>Software Development</li>
                  <li>Maintenance</li>
                  <li>Achieving project objectives</li>
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  className="text-lg font-semibold text-blue-500 hover:underline"
                  href="https://forms.gle/B4nR4griC5d3ryHP7"
                >
                  Apply Now
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-white rounded-xl shadow-md grid grid-cols-1 justify-between">
              <CardHeader className="p-4">
                <h3 className="text-2xl text-center font-bold">
                  Business Member
                </h3>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600 pb-8">
                  A business member brings strategic acumen and managerial
                  skills to ensure project success. They bridge the gap between
                  ideas and market viability and financial sustainability. As a
                  Business member you will both learn and build upon skills in
                  the following areas:
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 xl:pl-10 text-gray-600 list-disc pl-5">
                  <li>Recruitment</li>
                  <li>Team planning & collaboration</li>
                  <li>Financial management</li>
                  <li>Networking with industry</li>
                  <li>Social Media</li>
                  <li>Accounting</li>
                  <li>HR tasks</li>
                  <li>Team processes optimization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  className="text-lg font-semibold text-blue-500 hover:underline"
                  href="https://forms.gle/dwEZDEWWVrC3txd77"
                >
                  Apply Now
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="py-20 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href={"https://www.linkedin.com/company/monash-automation/"}>
            <LinkedinIcon className="w-6 h-6 text-white" />
          </Link>
          <Link href={"https://github.com/monash-automation"}>
            <GithubIcon className="w-6 h-6 text-white" />
          </Link>
          <Link
            href={
              "https://www.facebook.com/people/Monash-Automation/pfbid026XUKiXRYCwcPRtFsfkNYj3TcXynP4bRmYTL1K8RW9e3P8k5oAner2BP8jQToPMUFl/"
            }
          >
            <FacebookIcon className="w-6 h-6 text-white" />
          </Link>

          <Link href={"https://www.instagram.com/automation_monash/"}>
            <InstagramIcon className="w-6 h-6 text-white" />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UC-A9u1wU4D13SND8eDFBQIQ"}
          >
            <YoutubeIcon className="w-6 h-6 text-white" />
          </Link>
          {/*<FaXTwitter className="w-6 h-6 text-white" />*/}

          <Link href={"https://www.tiktok.com/@monashautomation"}>
            <PiTiktokLogo className="w-6 h-6 text-white" />
          </Link>
        </div>
        <p className="text-white">
          Building 60, Monash University Clayton campus, Australia
        </p>
        <p className="text-white">Copyright © 2023 Monash Automation</p>
      </footer>
    </div>
  );
}

function FacebookIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function GithubIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
