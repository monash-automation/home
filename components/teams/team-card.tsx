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
        "text-2xl font-bold text-gray-900 bg-white bg-opacity-20",
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
      <p className="text-white">{children}</p>
    </CardContent>
  );
}

export function TeamCard({ className, children }: React.ComponentProps<"div">) {
  return (
    <Card
      className={cn("bg-white bg-opacity-20 rounded-xl shadow-md overflow-hidden", className)}
    >
      {children}
    </Card>
  );
}



