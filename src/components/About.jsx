import AboutMe from '../assets/images/AboutMe.png';

const skills = [
  { name: 'HTML & CSS', level: '60%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'React JS', level: '78%' },
  { name: 'Express JS', level: '75%' },
  { name: 'Next JS', level: '55%' },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            About Me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            A developer who enjoys
            <br className="hidden md:block" /> understanding how things work.
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Image */}
          <div>
            <img
              src={AboutMe}
              alt="Stephen"
              className="w-full max-w-md rounded-3xl object-cover"
            />
          </div>

          {/* Text + Skills */}
          <div>
            <div className="space-y-5 text-base leading-7 text-gray-600 md:text-lg">
              <p>
                I'm a web developer focused on building practical, reliable web
                applications. I enjoy working across the frontend and backend,
                especially when a project gives me the opportunity to understand
                how the different pieces fit together.
              </p>

              <p>
                My current focus is on modern JavaScript development,
                particularly React, Node.js, PostgreSQL and the tools that
                connect them. I'm less interested in simply making something
                work and more interested in understanding why it works.
              </p>

              <p>
                I'm continuously improving my skills through projects,
                experimentation and solving problems that are just outside my
                current comfort zone.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10 space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gray-900"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 border-t border-gray-200 pt-10 sm:grid-cols-3">
          <div className="py-5 text-center sm:border-r sm:border-gray-200">
            <h3 className="text-4xl font-semibold">3+</h3>
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
              Years Learning & Building
            </p>
          </div>

          <div className="py-5 text-center sm:border-r sm:border-gray-200">
            <h3 className="text-4xl font-semibold">15+</h3>
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
              Projects Built
            </p>
          </div>

          <div className="py-5 text-center">
            <h3 className="text-5xl font-semibold">∞</h3>
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
              Things Left to Learn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
