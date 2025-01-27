import React from 'react'

import feedzup from "@/assets/feedzup.jpeg";
import socialSizer from "@/assets/ss.png";
import blog from "@/assets/blog.png";
import youtube from "@/assets/youtube.png";
import xAnime from "@/assets/x-anime.jpg";
import ProjectsCard from '../Cards/ProjectsCard';
import gix from "@/assets/gix.png"
import FooterCard from '../Footer';
import snapcart from "@/assets/snapcart.png"
import chatty from "@/assets/chatty.png"

const Projects = () => {
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
        "Feedz Up is a full-stack web platform built with Next.js, where users can remain anonymous and share there thoughts. It features a custom sign-up process and uses NextAuth for secure authentication. Email verification is handled via NodeMailer.",
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
      projectIcon: youtube,
      title: "Youtube Backend",
      description:"Youtube backend is a backend service for youtube built with Node.js and Express. File uploading for videos and thumnbail are managed by cloudinary.",
      githubLink: "https://github.com/tauhid-476/Backend-learning-"
    },
    {
      projectIcon: xAnime,
      title: "X Anime",
      description: "A fun and engaging tool where you can discover what your favorite anime character thinks about you based on insights from your Twitter profile. Experience a blend of anime magic and social media!",
      githubLink: "https://github.com/tauhid-476/anime-tw",
      liveLink: "https://x-anime-pink.vercel.app/",
    },
    {
      projectIcon: gix,
      title: "Gix-Gain",
      description: "A robust backend solution crafted for freelancing platforms. Users can seamlessly post and apply for gigs while receiving automated rejection or hiring emails via Nodemailer. Built with PostgreSQL, Prisma ORM, and NextAuth for secure authentication.",
      githubLink: "https://github.com/tauhid-476/freelance-platform",
    },
  ];


  return (
    <div className="flex flex-col gap-y-5">
      <p className="text-3xl md:text-5xl font-bold underline decoration-wavy decoration-purple-600 md:text-center">
          ~PROJECTS~
        </p>
      <p className='text-2xl md:text-3xl md:text-center'>
        Here are some of my recent projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-y-5">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
      <p className='md:text-center md:text-3xl text-2xl'>More to come...</p>
      <FooterCard />
    </div>
  );
}

export default Projects;