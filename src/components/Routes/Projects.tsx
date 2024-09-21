import React from 'react'

import feedzup from "@/assets/feedzup.jpeg";
import socialSizer from "@/assets/ss.png";
import blog from "@/assets/blog.png";
import youtube from "@/assets/youtube.png";
import ProjectsCard from '../ProjectsCard';
import FooterCard from '../Footer';


const Projects = () => {
  const projects = [
    {
      projectIcon: feedzup,
      title: "Feedz Up",
      description:
        "Feedz Up is a full-stack web platform built with Next.js, where users can remain anonymous. It features a custom sign-up process and uses NextAuth for secure authentication. Email verification is handled via NodeMailer.",
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
      githubLink: "https://github.com/tauhid-476/social-sizer"
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