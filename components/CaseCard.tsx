"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface CaseCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const CaseCard = ({ id, title, description, imageUrl }: CaseCardProps) => {
  const isUnderConstruction = title.toLowerCase() === "under-construction";

  if (isUnderConstruction) {
    return (
      <CardContainer className="w-auto max-w-[300px]">
        <CardBody className=" backdrop-blur-md relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/30 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white/80"
          >
            Coming Soon
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-400 text-sm max-w-sm mt-2"
          >
            This case study is currently under construction. Stay tuned for updates!
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <div className="h-60 w-full rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-neutral-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span className="text-neutral-400 text-sm">Under Construction</span>
              </div>
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as="div"
              className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-400"
            >
              Coming Soon →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  }

  return (
    <BackgroundGradient className="border-black border-2 hover:border-slate-600">
      <Link href={`/cases/${id}`}>
        <CardContainer className="w-auto max-w-[300px]">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black w-auto sm:w-[30rem] h-auto hover:rounded-xl rounded-none p-6 border-none">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2"
            >
              {description}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src={imageUrl}
                height="1000"
                width="1000"
                className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${title} thumbnail`}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                <div className="flex flex-row"> 
                  <span>
                    View Case Study
                  </span>
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </Link>
    </BackgroundGradient>
  );
};