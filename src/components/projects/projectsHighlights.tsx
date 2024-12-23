import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
import Tooltip from "../Tooltip/tooltip";

export type Highlight = {
  title: string;
  logo: string;
  description: string;
  images: string[];
  link: string;
  repo: string;
  category: string;
};

export default function ProjectsHighlights() {
  const highlights: Highlight[] = [
    {
      title: "Finance AI",
      logo: "/projects/logo.svg",
      description:
        "Finance AI is an application designed to help manage personal finances, offering features to handle transactions, visualize reports, and gain financial insights intuitively.",
      images: [
        "/projects/loginScreen.jpeg",
        "/projects/dashboard.png",
        "/projects/addTrasactionScreen.jpeg",
        "/projects/transactionPageScreen.jpeg",
      ],
      link: "https://finances-ai.vercel.app",
      repo: "https://github.com/nielassis/financeai",
      category: "SaaS",
    },
  ];

  return (
    <div className="flex flex-col space-y-8 px-4 md:px-8 mb-12 sm:px-8">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-center md:items-start shadow-md rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow"
        >
          {/* Left: Information */}
          <div className="flex-[1] md:pr-4 space-y-4 text-center md:text-left">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <div className="bg-red-500 w-2 h-2 rounded-full"></div>
              <div className="bg-yellow-400 w-2 h-2 rounded-full"></div>
              <div className="bg-green-500 w-2 h-2 rounded-full"></div>
              <h2 className="text-sm font-medium text-gray-600">
                Featured Project
              </h2>
            </div>
            <div className="flex md:flex-row items-center md:items-start gap-4 mb-4 md:mb-0">
              {/* Logo */}
              <div className="flex items-center justify-center md:justify-start flex-shrink-0 md:mb-0">
                <Image
                  src={highlight.logo}
                  alt={`${highlight.title} logo`}
                  width={150}
                  height={200}
                  className="rounded-md"
                />
              </div>

              {/* Botões */}
              <div className="flex md:flex-row gap-4 items-center md:mt-0 ml-auto">
                <span className="text-xl mr-4 text-gray-700 transform hover:scale-110 transition-all duration-300">
                  <Link href={highlight.link} target="_blank">
                    <Tooltip text="Visit Website">
                      <FaExternalLinkAlt />
                    </Tooltip>
                  </Link>
                </span>
                <span className="text-xl mr-4 text-gray-700 transform hover:scale-110 transition-all duration-300">
                  <Link href={highlight.repo} target="_blank">
                    <Tooltip text="View on Github">
                      <FaGithub />
                    </Tooltip>
                  </Link>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex-[1]">
              <p className="text-gray-600 text-sm text-start">
                {highlight.description}
              </p>
              <div className="mt-8 text-xl flex flex-row text-gray-500 gap-4 sm:justify-start justify-center">
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="Next.js">
                    <RiNextjsFill />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="TypeScript">
                    <SiTypescript />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="React">
                    <SiReact />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="Prisma">
                    <SiPrisma />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="PostgreSQL">
                    <SiPostgresql />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="Node.js">
                    <SiNodedotjs />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="Shadcn">
                    <SiShadcnui />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600 transition-transform duration-300">
                  <Tooltip text="TailwindCSS">
                    <SiTailwindcss />
                  </Tooltip>
                </span>
                <span className="hover:scale-110 hover:text-gray-600  transition-transform duration-300">
                  <Tooltip text="Stripe">
                    <SiStripe />
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="flex-[1] mt-6 md:mt-0 w-full max-w-md md:max-w-full">
            <Carousel className="relative overflow-hidden w-full h-auto">
              <CarouselContent className="relative flex gap-4">
                {highlight.images.map((image, i) => (
                  <CarouselItem
                    key={i}
                    className="relative flex-shrink-0 w-full aspect-w-16 aspect-h-9 flex justify-center items-center bg-gray-100 rounded-md"
                  >
                    {/* Badge */}
                    <Badge className="absolute top-2 right-2 bg-white text-white font-medium shadow-md rounded-full px-2 py-1 gap-2 bg-opacity-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {highlight.category}
                    </Badge>
                    <Image
                      src={image}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-full object-contain rounded-md border border-gray-200 shadow-sm"
                      width={600}
                      height={300}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full shadow-md transition-transform hover:scale-110 z-10" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full shadow-md transition-transform hover:scale-110 z-10" />
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
}
