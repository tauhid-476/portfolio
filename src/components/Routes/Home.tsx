import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MailIcon, ChevronRight, MailPlusIcon } from "lucide-react";
import React from "react";
import TypingAnimation from "@/components/TypingAnimation";
import Link from "next/link";
import SkillsShowcase from "../Cards/SkillsCards";
import ProjectsCard from "../Cards/ProjectsCard";
import Xlogo from "@/assets/x-logo-full.png";
import Image from "next/image";
import feedzup from "@/assets/feedzup.jpeg";
import socialSizer from "@/assets/ss.png";
import FooterCard from "../Footer";
const Home = () => {
  const handleViewMore = () => {
    alert(
      "Just click the left chevron in the navbar to unveil more projects! 😄"
    );
  };

  const homePageProjects = [
    {
      projectIcon: feedzup,
      title: "Feedz Up",
      description:
        "Feedz Up is a full-stack web platform built with Next.js, where users can remain anonymous and share there thoughts. It features a custom sign-up process and uses NextAuth for secure authentication. Email verification is handled via NodeMailer.",
      githubLink: "https://github.com/tauhid-476/ama-next/tree/main",
      liveLink: "https://ama-next.vercel.app/",
    },
    {
      projectIcon: socialSizer,
      title: "Social Sizer",
      description:
        "Social Sizer is a user-friendly media resizing tool built with Next.js, allowing users to compress videos and resize images according to social media requirements. It integrates Cloudinary for media handling and Clerk for authentication, with a sleek interface powered by DaisyUI.",
      githubLink: "https://github.com/tauhid-476/social-sizer",
      liveLink: "https://social-sizer.vercel.app/home",
    },
  ];

  return (
    <div className="md:mt-20 mt-10 flex flex-col justify-center">
      {/* introTexts */}
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl text-gray-500">Hey There👋 </p>
        <p className="text-4xl font-bold md:text-5xl">I&apos;m Tauhid</p>
        <p className="font-bold lg:text-3xl text-xl md:text-4xl">
          {" "}
          I <TypingAnimation />
        </p>
        <p className="text-lg md:text-2xl">
          I&apos;m eager to build more{" "}
          <span className="text-purple-600 font-bold">FULL-STACK </span>projects
          and explore new opportunities.
        </p>
      </div>

      {/* Links */}
      <div className="links flex mt-6 gap-x-4 h-auto md:gap-x-7">
        <Link href="https://github.com/tauhid-476">
          <GitHubLogoIcon className="md:h-9 md:w-9 h-7 w-7" />
        </Link>
        <Link href="https://x.com/tauhid_khan476">
          <Image
            src={Xlogo}
            alt="x-logo"
            className="md:h-9 md:w-9 h-7 w-7 rounded-full"
          />
        </Link>
        <Link href="mailto:tauheedxd90@gmail.com">
          <MailIcon className="md:h-9 md:w-9 h-6 w-6" />
        </Link>
      </div>

      {/* Skills */}
      <div className="skills flex md:justify-center flex-col md:mt-18 mt-16 h-auto">
        <p className="text-3xl md:text-5xl font-bold underline decoration-wavy decoration-purple-600 md:text-center">
          ~SKILLS~
        </p>
        <p className="text-2xl md:text-3xl mt-4 md:mt-8 text-gray-500">
          MY TECH STACK INCLUDES
        </p>
        <SkillsShowcase />
      </div>

      {/* PROJECTS */}
      <div className="projects flex flex-col md:justify-center md:mt-18 mt-16 h-auto">
        <p className="text-3xl md:text-5xl font-bold underline decoration-wavy decoration-purple-600 md:text-center">
          ~PROJECTS~
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-8 md:px-4">
          {homePageProjects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>

        <div className="flex w-full justify-center items-center">
          <button
            className="text-white flex justify-center items-center bg-purple-600 px-4 py-2 rounded-lg mt-6 w-fit md:text-lg"
            onClick={handleViewMore}
          >
            View More
            <span className="bg-purple-600 text-purple-600">___</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Contact Me */}
      <div className="flex flex-col justify-center items-center mt-16 md:mt-24 text-center">
        <div className="mt-4 md:text-xl text-lg">
          I&apos;m super active on{" "}
          <Link href="https://x.com/tauhid_khan476">
            <span className="text-purple-600 font-bold">X</span>
          </Link>{" "}
          connecting with passionate individuals.
          < br />
           You can also contact me via email  at
          <br />
          <div className="flex justify-center items-center gap-x-2 mt-3 md:mt-4 text-xl md:text-2xl">
            <MailPlusIcon className="h-7 w-7 mt-2" />
            <a href="mailto:tauheedxd90@gmail.com" className="text-purple-600">
              tauheedxd90@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Shoutout */}
     <div className="flex flex-col justify-center items-center mt-16">
      <p className="text-2xl md:text-3xl">Liked the design ?</p>
      <br />
      <p className="text-xl">Inspired by <Link href="https://www.shivabhattacharjee.com/"><span className="text-purple-600 font-bold">@sh17va</span></Link></p>
     </div>


     <FooterCard />

    </div>
  );
};

export default Home;
