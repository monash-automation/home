import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

type RecruitmentCardProps = {
  title: string;
  description: string;
  skills: string[];
  link: string;
} & React.ComponentProps<"div">;

export function RecruitmentCard({
  className,
  title,
  skills,
  description,
  link,
}: RecruitmentCardProps) {
  return (
    <Card
      className={cn(
        "bg-white rounded-xl shadow-md",
        "grid grid-cols-1 justify-between",
        className,
      )}
    >
      <CardHeader className="p-4">
        <h3 className="text-2xl text-center font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-600 pb-8">{description}</p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:pl-10 text-gray-600 list-disc pl-5">
          {skills.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a
          className="text-lg font-semibold text-blue-500 hover:underline"
          href={link}
        >
          Apply Now
        </a>
      </CardFooter>
    </Card>
  );
}

const businessMemberRecruitment: RecruitmentCardProps = {
  title: "Business Member",
  link: "https://forms.gle/dwEZDEWWVrC3txd77",
  description:
    "A business member brings strategic acumen and managerial skills to ensure project success. " +
    "They bridge the gap between ideas and market viability and financial sustainability. " +
    "As a Business member you will both learn and build upon skills in the following areas:",
  skills: [
    "Recruitment",
    "Team planning & collaboration",
    "Financial management",
    "Networking with industry",
    "Social Media",
    "Accounting",
    "HR tasks",
    "Team processes optimization",
  ],
};

const techMemberRecruitment: RecruitmentCardProps = {
  title: "Tech Member",
  link: "https://forms.gle/B4nR4griC5d3ryHP7",
  description:
    "A tech member provides essential expertise to navigate and implement technological solutions. " +
    "They contribute to innovation, problem-solving, and project development, fostering a dynamic learning environment. " +
    "As a technical member you will both learn and build upon skills in the following areas:",
  skills: [
    "CAD Designing",
    "Advanced Manufacturing",
    "3D Printing",
    "Robotics",
    "Software Development",
    "Maintenance",
    "Achieving project objectives",
  ],
};

export function TechMemberRecruitmentCard() {
  return <RecruitmentCard {...techMemberRecruitment} />;
}

export function BusinessMemberRecruitmentCard() {
  return <RecruitmentCard {...businessMemberRecruitment} />;
}
