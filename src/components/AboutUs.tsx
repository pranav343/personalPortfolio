"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Link from "next/link";
import Image from "next/image";

// content
const content = [
  {
    title: " About Myself",
    description: (
      <span>
        A proficient<b> MERN stack developer </b> , and an enthusiast of Data
        Structures and Algorithms. <br></br>I also find myself drawn to the
        realm of IoT robots, I&#39;m equally passionate about playing Guitar and
        games. <br></br>I have
        <b> solved more than 300 DSA questions</b> on platforms like{" "}
        <Link className="text-base text-teal-600 font-semibold tracking-wide"
          href={"https://leetcode.com/u/pranav343/"}
          target="_blank"
        ><b>Leetcode</b></Link> and  
        <Link className="text-base text-teal-600 font-semibold tracking-wide"
          href={"https://www.naukri.com/code360/profile/pranav343"} 
          target="_blank"
        ><b> Coding Ninja&#39;s </b></Link>
        etc.
      </span>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/PicsArt_12-03-01.55.22.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Work Experiance",
    description: (
      <span>
        <b className="text-base text-teal-600 font-semibold tracking-wide">Department Of Design , IIT-Delhi</b> <br></br>
        <b>Leading a team</b> in developing a cutting-edge website
        revolutionizing job recruitment, I leverage <b>MERN stack and Python</b>{" "}
        to integrate machine learning for <b>interview analysis</b>.I
        spearheaded a project focusing on recording interviews, analyzing data,
        and generating insightful reports for process enhancement.
      </span>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Work Experiance
      </div>
    ),
  },
  {
    title: "Awards/Skills/Certificates",
    description: (
      <span>
        <b className="text-base text-teal-600 font-semibold tracking-wide">Winner</b> , Eminence (Tech Event at JIIT)<br></br>
        <br></br>
        <b className="text-base text-teal-600 font-semibold tracking-wide"> Techkriti&#39;23, IIT Kanpur.</b>Qualified for the final.
        <br></br>
        <br></br>
        <b className="text-base text-teal-600 font-semibold tracking-wide">Certifications:</b> ∘ The Complete 2023 Web Development Bootcamp
        (Angela Yu , Udemy)  <br /> ∘ Google Cloud Computing Foundation with Kubernetes
        <br /> ∘ LinkedIn Certified Marketing Insider
      </span>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Awards/Skills/Certificates
      </div>
    ),
  },
  {
    title: "Positions Of Responsibility",
    description:
      ( <span>
      <b className="text-base text-teal-600 font-semibold tracking-wide">Chief Page Strategist, JIIT</b>- I manage all social media platforms for my college, maintaining its public image and overseeing
promotions using strategic content creation and engagement tactics. <br />
<b className="text-base text-teal-600 font-semibold tracking-wide">Digital Coordinator, Ucr</b>  (Robotics Hub), JIIT - Mentored over 100+ students in the field of robotics.
      </span>),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Positions Of Responsibility
      </div>
    ),
  },
];

function AboutUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default AboutUs;
