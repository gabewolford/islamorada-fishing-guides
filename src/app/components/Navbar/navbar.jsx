'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

export default function Navbar() {
  const [isSmallScreen, setisSmallScreen] = useState(false);
  
  const location = usePathname();
  const inactiveColorClass = 'text-navgrey-420';
  const chartersExcludedPaths = ['/', '/charters', '/charters/inshore-backcountry', '/charters/offshore', '/charters/eco-enviro-tours'];
  const contactExcludedPaths = ['/', '/contact', '/contact/confirmation'];

  useLayoutEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth <= 704);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
        <nav className="relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          
          <div className="flex items-center justify-between">
            <div className='flex'>
              <Link className="flex-none" href="/">
                <Image 
                src="/images/logo-header.png"
                width={112}
                height={40}
                alt='Islamorada Fishing Guides & Charters'
                priority={true}
                >
                </Image>
              </Link>
            </div>
            
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle p-0 inline-flex justify-center items-center rounded-md medium bg-white align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-420 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden w-6 h-6" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg className="hs-collapse-open:block hidden w-6 h-6" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>
          </div>

          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                  <button type="button" className={`flex items-center w-full  hover:text-cyan-420 medium
                  ${!chartersExcludedPaths.includes(location) && inactiveColorClass}`
                }
                  >
                    Charters
                    <svg className="ml-2 w-2.5 h-2.5 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.5ms] sm:duration-[200ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-50 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"
                  {...(isSmallScreen && {
                    'data-hs-collapse': '#navbar-collapse-with-animation',
                    'aria-controls': 'navbar-collapse-with-animation',
                    'aria-label': 'Toggle navigation'
                  })}>
                    
                    <Link 
                      className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-cyan-420 focus:ring-2 focus:ring-cyan-420 ${location === '/charters' && 'bold'}`}
                      href="/charters" >
                      All Charters
                    </Link>

                    <Link className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-cyan-420 focus:ring-2 focus:ring-cyan-420" ${location === '/charters/inshore-backcountry' && 'bold'}`} 
                      href="/charters/inshore-backcountry">
                      Backcountry & Inshore
                    </Link>

                    <Link 
                      className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-cyan-420 focus:ring-2 focus:ring-cyan-420 ${location === '/charters/offshore' && 'bold'}`} 
                      href="/charters/offshore">
                      Reef & Offshore
                    </Link>
                    
                    <Link className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-cyan-420 focus:ring-2 focus:ring-cyan-420 ${location === '/charters/eco-enviro-tours' && 'bold'}`} href="/charters/eco-enviro-tours">
                      Eco & Enviro Tours
                    </Link>

                  </div>
                </div>
                <Link 
                  className={`medium hover:text-cyan-420 ${(location !== '/guides' && location !== '/') && inactiveColorClass}`}
                  href="/guides"
                  {...(isSmallScreen && {
                    'data-hs-collapse': '#navbar-collapse-with-animation',
                    'aria-controls': 'navbar-collapse-with-animation',
                    'aria-label': 'Toggle navigation'
                  })}>
                  Guides
                </Link>

                <Link 
                  className={`medium hover:text-cyan-420 sm:py-6 ${(location !== '/explore-islamorada' && location !== '/') && inactiveColorClass}`}
                  href="/explore-islamorada"
                  {...(isSmallScreen && {
                    'data-hs-collapse': '#navbar-collapse-with-animation',
                    'aria-controls': 'navbar-collapse-with-animation',
                    'aria-label': 'Toggle navigation'
                  })}>
                  Explore Islamorada
                </Link>

                <Link 
                  className={`medium hover:text-cyan-420 sm:py-6 ${!contactExcludedPaths.includes(location) && inactiveColorClass}`}
                  href="/contact" 
                  {...(isSmallScreen && {
                    'data-hs-collapse': '#navbar-collapse-with-animation',
                    'aria-controls': 'navbar-collapse-with-animation',
                    'aria-label': 'Toggle navigation'
                  })}>
                  Contact
                </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}