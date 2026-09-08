import services from '../assets/data/services.js';
import EastIcon from '@mui/icons-material/East';

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-gray-50 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            What I Do
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            My Services
          </h2>
        </div>

        {/* Services */}
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.s_no}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">
                  {service.s_no}
                </span>

                <EastIcon
                  className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fontSize="small"
                />
              </div>

              <h3 className="mt-10 text-2xl font-semibold">{service.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <button
                type="button"
                className="mt-8 text-sm font-semibold transition-colors hover:text-gray-500 cursor-pointer"
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
