import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MailIcon, ChevronRight, MailPlusIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/TypingAnimation";
import Link from "next/link";
import SkillsShowcase from "../Cards/SkillsCards";
import ProjectsCard from "../Cards/ProjectsCard";
import Xlogo from "@/assets/x-logo-full.png";
import Image from "next/image";
import scoreMore from "@/assets/score-more.jpg";
import xAnime from "@/assets/x-anime.jpg";
import FooterCard from "../Footer";

const Home = () => {
  const handleViewMore = () => {
    alert(
      "Just click the left chevron in the navbar to unveil more projects! 😄"
    );
  };

  const homePageProjects = [
    {
      "projectIcon": scoreMore,
      "title": "Score More",
      "description": "Score More is an AI-powered platform designed to help students excel in their semester exams. It utilizes Gemini AI to analyze uploaded PDFs, categorize questions based on repetition, and generate solutions for effective preparation. The platform is built with a sleek and modern UI using ShadCN, ensuring a seamless and intuitive user experience.",
      "githubLink": "https://github.com/your-github/Score-More",
      "liveLink": "https://score-more.tauhid.me/"
    },
    {
      projectIcon: xAnime,
      title: "X Anime",
      description: "A fun and engaging tool where you can discover what your favorite anime character thinks about you based on insights from your Twitter profile. Experience a blend of anime magic and social media!",
      githubLink: "https://github.com/tauhid-476/anime-tw",
      liveLink: "https://anixlyzer.tauhid.me/",
    }
  ];

  return (
    <div className="md:mt-20 mt-10 flex flex-col justify-center">
      {/* introTexts with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-3"
      >
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
      </motion.div>

      {/* Links with animation */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="links flex mt-6 gap-x-4 h-auto md:gap-x-7"
      >
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
      </motion.div>

      {/* Skills with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="skills flex md:justify-center flex-col md:mt-18 mt-16 h-auto"
      >
        <p className="text-3xl md:text-5xl font-bold underline decoration-wavy decoration-purple-600 md:text-center">
          ~SKILLS~
        </p>
        <p className="text-2xl md:text-3xl mt-4 md:mt-8 text-gray-500">
          MY TECH STACK INCLUDES
        </p>
        <SkillsShowcase />
      </motion.div>

      {/* PROJECTS with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="projects flex flex-col md:justify-center md:mt-18 mt-16 h-auto"
      >
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
      </motion.div>

      {/* Contact Me with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center mt-16 md:mt-24 text-center"
      >
        <div className="mt-4 md:text-xl text-lg">
          I&apos;m super active on{" "}
          <Link href="https://x.com/tauhid_khan476">
            <span className="text-purple-600 font-bold">X</span>
          </Link>{" "}
          connecting with passionate individuals.
          <br />
          You can also contact me via email at
          <br />
          <div className="flex justify-center items-center gap-x-2 mt-3 md:mt-4 text-xl md:text-2xl">
            <MailPlusIcon className="h-7 w-7 mt-2" />
            <a href="mailto:tauheedxd90@gmail.com" className="text-purple-600">
              tauheedxd90@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Shoutout with animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center mt-16"
      >
      </motion.div>

      <FooterCard />
    </div>
  );
};

export default Home;