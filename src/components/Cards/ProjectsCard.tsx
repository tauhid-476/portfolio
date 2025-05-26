import React from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface ProjectsProps {
  projectIcon: string | StaticImageData, // assuming it's a string URL for the image
  title: string,
  description: string,
  githubLink?: string,
  liveLink?: string
}

const ProjectsCard = ({ projectIcon, title, description, githubLink, liveLink }: ProjectsProps) => {
  return (
    <div className="border border-gray-600 p-4 rounded-lg shadow-lg  flex flex-col h-full">
      {/* Left Section */}
      <div className="col-span-3 flex justify-between items-center mb-2">
        {/* Project Icon and Title */}
        <div className="flex items-center space-x-3">
        <Image 
          src={typeof projectIcon === 'string' ? projectIcon : projectIcon.src} 
          width={60} 
          height={60} 
          alt="project-icon" 
          className="rounded-full"
        />
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {githubLink && (
            <Link href={githubLink} aria-label="GitHub Repository" target="_blank">
              <GitHubLogoIcon className="h-8 w-8 text-white hover:text-purple-500 transition-colors" />
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink} aria-label="Live Demo" target="_blank">
            <ArrowUpRight className="h-8 w-8 text-white hover:text-purple-500 transition-colors" />
          </Link>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-3">
        <p className="text-white mb-2 text-xl font-bold tracking-tighter">{title}</p>
        <p className="text-gray-100">{description}</p>
      </div>
    </div>
  )
}

export default ProjectsCard
