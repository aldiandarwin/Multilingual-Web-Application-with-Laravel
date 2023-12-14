import { Menu } from '@headlessui/react';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'

export default function LanguageToggle() {
const className = 'flex items-center gap-x-3 w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200'
  return (
      <Menu className="relative" as="div">
          <Menu.Button>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
              </svg>
          </Menu.Button>
          <Menu.Items className="absolute py-0.5 rounded-lg w-56 right-0 top-full mt-1 border shadow-sm bg-white">
              {/* Use the `active` render prop to conditionally style the active item. */}
              <Menu.Item>
                  <Link
                      className={className}
                      data={{ name: 'id' }}
                      href="/language"
                      method="post"
                      as="button"
                  >
                      <span>🇮🇩</span>
                      <span>Bahasa</span>
                  </Link>
              </Menu.Item>
              <Menu.Item>
                  <Link
                      className={className}
                      data={{ name: 'en' }}
                      href="/language"
                      method="post"
                      as="button"
                  >
                      <span>🇺🇸</span>
                      <span>English</span>
                  </Link>
              </Menu.Item>
              {/* ... */}
          </Menu.Items>
      </Menu>
  );
}
