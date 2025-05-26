import React from 'react'
import { motion } from "framer-motion"; // Import framer-motion

import feedzup from "@/assets/feedzup.jpeg";
import socialSizer from "@/assets/ss.png";
import blog from "@/assets/blog.png";
import youtube from "@/assets/youtube.png";
import xAnime from "@/assets/x-anime.jpg";
import ProjectsCard from '../Cards/ProjectsCard';
import FooterCard from '../Footer';
import snapcart from "@/assets/snapcart.png"
import chatty from "@/assets/chatty.png"
import startupHub from "@/assets/startuphub.png"
import scoreMore from "@/assets/score-more.jpg"
import introHaven from "@/assets/introhaven.png"

const Projects = () => {
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const projects = [
    {
      projectIcon: snapcart,
      title: "Snap Cart",
      description:
        "SnapCart is a full-stack e-commerce platform built with Next.js, offering seamless user authentication via NextAuth. It features real-time file uploads powered by ImageKit and secure payment processing with Razorpay. The app is backed by MongoDB for robust data management and styled with DaisyUI for a modern and intuitive interface.",
      githubLink: "https://github.com/tauhid-476/imaegkit-ecomm",
      liveLink: "https://imaegkit-ecomm.vercel.app/",
    },
    {
      projectIcon: feedzup,
      title: "Feedz Up",
      description:
        "Feedz Up is a full-stack web platform built with Next.js, where users can remain anonymous and share there feedbacks. It features a custom sign-up process and uses NextAuth for secure authentication. Email verification is handled via NodeMailer.",
      githubLink: "https://github.com/tauhid-476/ama-next/tree/main",
      liveLink: "https://ama-next.vercel.app/",
    },
    {
      projectIcon: chatty,
      title: "Chat More",
      description:
        "ChatMore is a full-stack MERN project designed to explore and implement WebSocket functionality. It features custom authentication, Cloudinary for backend file handling, and state management with Zustand. Styled with DaisyUI, the app offers a clean interface with 32 customizable themes for a personalized user experience.",
      githubLink: "https://github.com/tauhid-476/chat-app",
      liveLink: "https://chat-app-ryd5.onrender.com/",
    },
    {
      projectIcon: startupHub,
      title: "Startup-Hub",
      description: "Startup Hub is a full-stack platform built with Next.js, PostgreSQL, and NextAuth for authentication. It allows users to register as either candidates or founders, enabling seamless hiring and collaboration. The platform features automatic email notifications for hiring and acceptance updates. ImageKit is used for efficient image uploading, and the entire project is developed with TypeScript for a robust and scalable codebase. 🚀",
      githubLink: "https://github.com/tauhid-476/startup",
      liveLink: "https://startup-link-unvieled.vercel.app/",
    },
    {
      projectIcon: introHaven,
      title: "Intro Haven",
      description:
        "Intro Haven is a full-stack web app designed for introverts to share stories anonymously and connect with like-minded users. Built with Next.js, it allows users to read or post stories with a title, description, and optional image. Users can send friend requests and chat in real-time — this functionality was implemented using Stream SDK. Image uploads are handled via ImageKit, and all data is managed with a PostgreSQL database. The app focuses on privacy, self-expression, and meaningful connections.",
      liveLink: "https://introvert-platform.vercel.app",
    },
    {
      projectIcon: socialSizer,
      title: "Social Sizer",
      description:
        "Social Sizer is a user-friendly media resizing tool built with Next.js, allowing users to compress videos and resize images according to social media requirements. It integrates Cloudinary for media handling and Clerk for authentication, with a sleek interface powered by DaisyUI.",
      githubLink: "https://github.com/tauhid-476/social-sizer",
      liveLink: "https://social-sizer.vercel.app/home",
    },
    {
      projectIcon: blog,
      title: "Write Space",
      description:
        "Write Space is a lightweight blog app built with React and styled using DaisyUI. It utilizes Appwrite for backend services, providing a simple platform for users to share their thoughts and ideas.",
      githubLink: "https://github.com/tauhid-476/Blog-App",
      liveLink: "https://blog-app-khaki-sigma.vercel.app/",
    },
    {
      "projectIcon": scoreMore,
      "title": "Score More",
      "description": "Score More is an AI-powered platform designed to help students excel in their semester exams. It utilizes Gemini AI to analyze uploaded PDFs, categorize questions based on repetition, and generate solutions for effective preparation. The platform is built with a sleek and modern UI using ShadCN, ensuring a seamless and intuitive user experience.",
      "githubLink": "https://github.com/tauhid-476/score-more",
      "liveLink": "https://score-more-seven.vercel.app/"
    },
    {
      projectIcon: youtube,
      title: "Youtube Backend",
      description: "Youtube backend is a backend service for youtube built with Node.js and Express. File uploading for videos and thumnbail are managed by cloudinary.",
      githubLink: "https://github.com/tauhid-476/Backend-learning-"
    },
    {
      projectIcon: xAnime,
      title: "X Anime",
      description: "A fun and engaging tool where you can discover what your favorite anime character thinks about you based on insights from your Twitter profile. Experience a blend of anime magic and social media!",
      githubLink: "https://github.com/tauhid-476/anime-tw",
      liveLink: "https://x-anime-pink.vercel.app/",
    }
  ];

  return (
    <div className="flex flex-col gap-y-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-3xl md:text-5xl font-bold underline decoration-wavy decoration-purple-600 md:text-center">
          ~PROJECTS~
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className='text-2xl md:text-3xl md:text-center'>
          Here are some of my recent projects
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectsCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className='md:text-center md:text-3xl text-2xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        More to come...
      </motion.p>

      <FooterCard />
    </div>
  );
}

export default Projects;