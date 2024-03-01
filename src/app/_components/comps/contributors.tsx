"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { contributors } from "~/lib/contributors";


export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={contributors} />
    </div>
  );
}

// export function SingleContributor() {
//   return (
//     <>
//       <AnimatedTooltipSmall items={[{id: 5, name: "Nayef Kanaan", image:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80", designation:""}]}/>
//     </>
//   )
// }