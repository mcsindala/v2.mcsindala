import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import SideNav from './SideNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Stephen</h1>
          <p className="text-xs text-gray-500">Web Developer</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-black"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-gray-900 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white md:block"
        >
          Connect with me
        </a>

        <button
          type="button"
          onClick={handleOpenDrawer}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden cursor-pointer"
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </button>
      </div>

      <SideNav
        openDrawer={isOpen}
        closeDrawer={handleCloseDrawer}
        navItems={navItems}
      />
    </header>
  );
};

export default Navbar;
