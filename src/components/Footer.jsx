import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <footer className="px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Stephen</h2>

            <p className="mt-4 max-w-lg leading-7 text-gray-600">
              Web developer focused on building practical web applications,
              learning modern technologies, and understanding the systems behind
              the code.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:ml-auto md:max-w-md">
            <h3 className="font-semibold">Stay connected</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              More functionality will be added here as the portfolio evolves.
            </p>

            <div className="mt-5 flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition focus:border-gray-900"
              />

              <button
                type="button"
                className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <Divider sx={{ margin: '40px 0 24px' }} />

        <div className="flex flex-col gap-5 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; 2026 Stephen Omondi. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <button className="transition-colors hover:text-black">
              Terms of Service
            </button>

            <button className="transition-colors hover:text-black">
              Privacy Policy
            </button>

            <button className="transition-colors hover:text-black">
              Connect with me
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
