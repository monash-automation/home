import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import React from "react";
import { cn } from "@/lib/utils";

export function TeamCardTitle({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <CardHeader
      className={cn(
        "p-4 space-y-0",
        "flex flex-row items-center content-center justify-between",
        "text-2xl font-bold",
        className,
      )}
    >
      {children}
    </CardHeader>
  );
}

export function TeamCardDescription({ children }: React.ComponentProps<"p">) {
  return (
    <CardContent className="p-4">
      <p className="text-gray-600">{children}</p>
    </CardContent>
  );
}

export function TeamCard({ className, children }: React.ComponentProps<"div">) {
  return (
    <Card
      className={cn("bg-white rounded-xl shadow-md overflow-hidden", className)}
    >
      {children}
    </Card>
  );
}

function ManuTeamCard() {
  return (
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
  );
}
