import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"; // Import framer-motion
import abtme from '@/assets/aboutme.jpg'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { MailIcon } from 'lucide-react'
import Xlogo from '@/assets/x-logo-full.png'
import FooterCard from '@/components/Footer'

export default function About() {
  return (
    <div className="container mx-auto px-4 flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
      >
        <span className="underline decoration-wavy decoration-purple-600">
          About Me
        </span>
      </motion.h1>

      {/* Images and texts */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start"
        >
          <Image
            src={abtme}
            width={325}
            height={325}
            alt="Tauhids profile picture"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl">
              Hello, I&apos;m{" "}
              <Link href="https://x.com/tauhid_khan476" className="text-purple-600 font-bold">
                Tauhid
              </Link>{" "}
              👋
            </p>
            <p className="text-lg">
              I&apos;m a second-year Computer Engineering student in Mumbai, Maharashtra and a self-taught developer. My interest in software engineering started when one of my friends introduced me to programming.
            </p>
            <p className="text-lg">
              I enjoy coding, learning new technologies, and building projects.
              <br />
              (I use Windows btw😅). I&apos;m also looking to participate in hackathons and explore new opportunities to grow as a developer.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Connect with me Section*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="connects mt-7 flex flex-col"
      >
        <p className="text-2xl md:text-3xl">Connect with me:</p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            staggerChildren: 0.1
          }}
          viewport={{ once: true }}
          className="links flex mt-6 gap-x-4 h-auto md:gap-x-7"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://github.com/tauhid-476">
              <GitHubLogoIcon className="md:h-9 md:w-9 h-7 w-7" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://x.com/tauhid_khan476">
              <Image
                src={Xlogo}
                alt="x-logo"
                className="md:h-9 md:w-9 h-7 w-7 rounded-full"
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="mailto:tauheedxd90@gmail.com">
              <MailIcon className="md:h-9 md:w-9 h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 mb-6"
      >
        <p className="text-xl font-semibold md:text-2xl">
          I am currently looking for freelance opportunities to expand my experience and work on exciting projects.
          If you have any ideas or collaborations in mind, let's connect! I'm eager to meet new people and build amazing projects together.
        </p>
      </motion.div>

      <FooterCard />
    </div>
  )
}