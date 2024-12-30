"use client";

import Image from "next/image";
import { Card, CardContent } from "../../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/carousel";
import { Button } from "../../../ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../ui/dialog";
import { FaGithub } from "react-icons/fa";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "../../../ui/badge";

export default function ProjectsGalery() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-item",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".project",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);
  const projects = [
    {
      title: "Gam3rStore",
      logo: "/projects/logo-texto.png",
      description:
        "Gam3rStore is a modern, user-friendly online store focused on providing a fast and efficient shopping experience, both on desktop and mobile. With a simple, functional design, it ensures smooth and convenient navigation for customers.",
      images: [
        "/projects/gam3rstore4.png",
        "/projects/gam3rstore2.png",
        "/projects/gam3rstore3.png",
        "/projects/gam3rstore1.png",
      ],
      link: "",
      repo: "https://github.com/nielassis/gam3r.store",
      category: "Online Store",
    },
    {
      title: "inOrbit",
      logo: "/projects/logo-inorbit.svg",
      description:
        "InOrbit is an app that helps you easily set and track your goals. It offers a simple and intuitive interface, making it easy to see your progress and stay motivated. With a clean, modern design, InOrbit ensures a smooth experience on both desktop and mobile, helping you achieve your goals efficiently.",
      images: [
        "/projects/inorbit1.png",
        "/projects/inorbit2.png",
        "/projects/inorbit3.png",
      ],
      link: "",
      repo: "https://github.com/nielassis/inorbit",
      category: "Productivity",
    },
    {
      title: "Nearby: benefit club",
      logo: "/projects/logo-nearby.svg",
      description:
        "Nearby is an app that offers exclusive discounts and benefits at local businesses, featuring a map and QR code scanner to easily access nearby promotions, making everyday life more affordable and convenient.",
      images: [
        "/projects/nearby1.png",
        "/projects/nearby2.png",
        "/projects/nearby3.png",
        "/projects/nearby4.png",
        "/projects/nearby5.png",
      ],
      link: "",
      repo: "https://github.com/nielassis/nearby-app",
      category: "LifeStyle",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 project">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group relative flex flex-col p-4 rounded-md shadow-md mx-auto w-full transform transition-all hover:scale-110 hover:ease-in-out duration-300 project-item "
          >
            <div className="flex gap-2 items-center justify-start">
              <div className="bg-red-500 w-2 h-2 rounded-full"></div>
              <div className="bg-yellow-400 w-2 h-2 rounded-full"></div>
              <div className="bg-green-500 w-2 h-2 rounded-full"></div>
            </div>
            <CardContent className="flex flex-col items-center">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-20 h-20 object-contain mb-4 sm:w-24 sm:h-24 group-hover:blur-sm transition-all duration-300"
                width={80}
                height={80}
              />

              <Carousel className="relative overflow-hidden w-full sm:h-52 group-hover:blur-sm transition-all duration-300">
                <CarouselContent className="relative flex gap-2">
                  {project.images.map((image, i) => (
                    <CarouselItem
                      key={i}
                      className="relative flex-shrink-0 w-full h-full flex justify-center items-center bg-gray-100 rounded-md"
                    >
                      <Image
                        src={image}
                        alt={`Screenshot ${i + 1}`}
                        className="w-full h-48 object-cover rounded-md border border-gray-200 shadow-sm"
                        width={400}
                        height={300}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <p className="text-xs sm:text-sm text-gray-700 mt-2 line-clamp-2 group-hover:blur-sm transition-all duration-300">
                {project.description}
              </p>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View Project</Button>
                  </DialogTrigger>
                  <div className="flex py-8 justify-center">
                    <DialogContent className="flex-[1] h-screen w-96 p-8">
                      <DialogHeader>
                        <DialogTitle className="mb-4">
                          <div className="flex justify-between items-center">
                            {project.title}
                            <div className="flex flex-row">
                              <Link href={project.repo} target="_blank">
                                <FaGithub className="w-6 h-6 text-gray-500 hover:text-gray-800 transition-colors duration-300 mr-4" />
                              </Link>
                            </div>
                          </div>
                        </DialogTitle>
                        <Carousel className="relative overflow-hidden w-full sm:h-52 group-hover:blur-sm transition-all duration-300">
                          <CarouselContent className="relative flex gap-2">
                            {project.images.map((image, i) => (
                              <CarouselItem
                                key={i}
                                className="relative flex-shrink-0 w-full h-full flex justify-center items-center bg-gray-100 rounded-md"
                              >
                                <Badge className="absolute top-2 right-2 bg-white text-white font-medium shadow-md rounded-full px-2 py-1 gap-2 bg-opacity-10">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                  {project.category}
                                </Badge>
                                <Image
                                  src={image}
                                  alt={`Screenshot ${i + 1}`}
                                  className="w-full h-48 object-cover rounded-md border border-gray-200 shadow-sm"
                                  width={400}
                                  height={300}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full shadow-md transition-transform hover:scale-110 z-10" />
                          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full shadow-md transition-transform hover:scale-110 z-10" />
                        </Carousel>
                        <DialogDescription>
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </div>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12 hover:scale-110 transition-transform">
        <Link href="/projects">
          <Button>See More</Button>
        </Link>
      </div>
    </>
  );
}
