import Link from "next/link";
import React from "react";
import Tooltip from "../Tooltip/tooltip";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialProps = {
  icon: LucideIcon;
  link: string;
  tooltip: string;
  className?: string;
};

export default function Socials({
  className,
  link,
  tooltip,
  icon: Icon,
}: SocialProps) {
  return (
    <div className="">
      <span
        className={cn(
          className,
          "text-2xl transform hover:scale-110 transition-all duration-300"
        )}
      >
        <Link href={link} target="_blank">
          <Tooltip text={tooltip}>
            <Icon />
          </Tooltip>
        </Link>
      </span>
    </div>
  );
}
