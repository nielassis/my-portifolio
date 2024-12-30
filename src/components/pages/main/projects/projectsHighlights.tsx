"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Tooltip from "../../../shared/Tooltip/tooltip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsStarFill } from "react-icons/bs";

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
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".project-item",
          start: "top 600px",
          end: "bottom 300px",
          scrub: true,
        },
      }
    );
  }, []);
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
    {
      title: "Quick Builder",
      logo: "/projects/quickbuilder-logo.svg",
      description:
        "Quick Builder is an easy-to-use tool for creating and personalizing resumes. You can edit your resume in real-time, receive suggestions to improve the content, and save or export the document as a PDF.",
      images: ["/projects/quickbuilder1.png"],
      link: "https://quick-builder.vercel.app",
      repo: "https://github.com/nielassis/quick-builder",
      category: "SaaS",
    },
  ];

  return (
    <div className="flex project flex-col space-y-8 px-4 md:px-8 mb-12 sm:px-8">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className="flex project-item flex-col md:flex-row justify-between items-center md:items-start rounded-lg p-4 md:p-6 transition-shadow"
        >
          {/* Left: Information */}
          <div className="flex-[1] md:pr-4 space-y-4 text-center md:text-left">
            <div className="flex gap-2 items-center justify-start">
              <div className="bg-red-500 w-2 h-2 rounded-full"></div>
              <div className="bg-yellow-400 w-2 h-2 rounded-full"></div>
              <div className="bg-green-500 w-2 h-2 rounded-full"></div>
              <Badge className="gap-2 hover:bg-yellow-300 flex text-yellow-600 bg-yellow-400 bg-opacity-30">
                <BsStarFill />
                <h1 className="text-[10px] font-regular">Featured Project</h1>
              </Badge>
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
