'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)
  const pathname = usePathname()

  // Detect whether the user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-black backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/events">
                  <p className={`font-medium ${pathname === '/events' ? 'font-extrabold text-white' : 'text-gray-300'} hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Events</p>
                </Link>
              </li>
              <li>
                <Link href="/leads">
                  <p className={`font-medium ${pathname === '/leads' ? 'font-extrabold text-white' : 'text-gray-300'} hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Leads</p>
                </Link>
              </li>
              <li>
                <Link href="/members">
                  <p className={`font-medium ${pathname === '/members' ? 'font-extrabold text-white' : 'text-gray-300'} hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Members</p>
                </Link>
              </li>
              <li>
                <Link href="/achievements">
                  <p className={`font-medium ${pathname === '/achievements' ? 'font-extrabold text-white' : 'text-gray-300'} hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Achievements</p>
                </Link>
              </li>
              <li>
                <Link href="mailto:admin@pointblank.club">
                  <p className={`btn-sm text-black bg-white mx-3 rounded-xl`}>
                    <span>Contact Us</span>
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p className={`btn-sm text-black bg-white mx-3 rounded-xl`}>
                    <span>Login/Signup</span>
                  </p>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}