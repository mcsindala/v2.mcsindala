import mywork from '../assets/data/mywork.js';
import EastIcon from '@mui/icons-material/East';
import Card from './Card';

const MyWork = () => {
  return (
    <section id="portfolio" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
              Selected Projects
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              My Work
            </h2>
          </div>

          <p className="max-w-md leading-6 text-gray-600">
            A selection of projects I've built while learning, experimenting,
            and putting different technologies into practice.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-3">
          {mywork.map((item) => (
            <Card key={item.id} project={item} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="flex items-center rounded-full border border-gray-900 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white"
          >
            View More
            <EastIcon className="ml-3" fontSize="small" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
