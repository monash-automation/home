import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import * as React from "react";

export function ProjectName({
  className,
  children,
}: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-2xl font-bold mb-5", className)}>{children}</h3>
  );
}

export function ProjectDescription({
  className,
  children,
}: React.ComponentProps<"p">) {
  return <p className={cn("text-gray-600 text-lg", className)}>{children}</p>;
}

export function ProjectInfo({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("m-2 lg:m-4 text-balance", className)}
      aria-description="Project name and a detailed introduction"
    >
      {children}
    </div>
  );
}

export function ProjectImage({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-full m-2 lg:m-4", className)}
      aria-description="Project images"
    >
      {children}
    </div>
  );
}

export function ProjectCard({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <Card
      className={cn("bg-white rounded-xl shadow-md", className)}
      aria-description="Description of the project"
    >
      <CardContent
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 justify-center items-center content-center",
          "gap-3 md:gap-6 lg:gap-10",
          "p-4 md:p-6 lg:p-10",
          className,
        )}
        aria-description="project card content"
      >
        {children}
      </CardContent>
    </Card>
  );
}
