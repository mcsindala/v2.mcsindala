// // import { IconButton } from '@mui/material';
// import profile from '../assets/images/profile_.png';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="scroll-mt-20 flex min-h-[calc(100vh-80px)] items-center px-5 py-16 md:px-8 md:py-20"
//     >
//       <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
//         {/* Profile Image */}
//         <div className="mb-8">
//           <img
//             src={profile}
//             alt="Stephen"
//             className="w-56 object-contain md:w-64"
//           />
//         </div>

//         {/* Introduction */}
//         <div className="max-w-4xl">
//           <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
//             Web Developer
//           </p>

//           <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
//             I'm Stephen.
//             <br />I build things for the web.
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
//             I'm a software developer based in Nairobi, Kenya, focused on
//             building practical web applications and learning the systems behind
//             them. I enjoy turning ideas into useful, well-structured interfaces
//             and continuously improving the code that powers them.
//           </p>

//           <p className="mt-5 text-base font-medium text-gray-800 md:text-lg">
//             Let's build something meaningful together.
//           </p>
//         </div>

//         {/* Actions */}
//         <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//           <button
//             type="button"
//             className="rounded-full border border-gray-900 bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-700 cursor-pointer"
//           >
//             Connect with me
//           </button>

//           <button
//             type="button"
//             className="rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-50 cursor-pointer"
//           >
//             {/* <IconButton  aria-label="download my resume">
//               <FileDownloadIcon />
//             </IconButton> */}
//             <FileDownloadIcon className="mr-3" fontSize="small" />
//             My Resume
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import profile from '../assets/images/profile_.png';
import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';

const Hero = () => {
  const techStack = [
    'React',
    'Node.js',
    'Express JS',
    'Tailwind CSS',
    'MySQL',
    'Postgresql',
    'Prisma',
    'Next JS',
    'Svelte',
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-5 py-16 md:px-8 md:py-24"
    >
      {/* Subtle Background Radial Accent */}
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & Actions */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <span className="inline-block rounded-full bg-gray-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gray-600">
              Web Developer
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              I'm Stephen. <br />
              <span className="text-gray-600">I build things for the web.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              I'm a web developer based in Nairobi, Kenya, focused on
              building practical web applications and learning the systems
              behind them. I enjoy turning ideas into useful, well-structured
              tools.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#portfolio"
                className="flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800"
              >
                <FolderIcon fontSize="small" />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100"
              >
                <DownloadIcon fontSize="small" />
                Resume
              </a>
            </div>

            {/* Tech Badges */}
            <div className="mt-10 pt-6 border-t border-gray-100 w-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Technologies I work with
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-50 border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Graphic Accent */}
          <div className="relative flex justify-center lg:col-span-5">
            {/* Background Circle Decorative Frame */}
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 sm:h-80 sm:w-80 -z-10" />

            <img
              src={profile} // Replace with your image path
              alt="Stephen"
              className="h-72 w-72 rounded-full object-cover shadow-lg border-4 border-white sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
