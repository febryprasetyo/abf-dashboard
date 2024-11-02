import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo-fastpec.png';
// import DropdownUser from "./DropdownUser";
import { useAuth } from '../store/auth';
import DropdownUser from './DropdownUser';
import { useEffect, useState } from 'react';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { user, isLogin } = useAuth();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <header className='bg-blue-bar'>
      <div className='bg-blue-bar'>
        <div className='relative flex h-16 items-center justify-between mx-44'>
          {user?.role_id == 'adm' && (
            <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
              {/* <!-- Hamburger Toggle BTN --> */}
              <button
                aria-controls='sidebar'
                onClick={(e) => {
                  e.stopPropagation();
                  props.setSidebarOpen(!props.sidebarOpen);
                }}
                className='z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden'>
                <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                  <span className='du-block absolute right-0 h-full w-full'>
                    <span
                      className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && '!w-full delay-300'
                      }`}></span>
                    <span
                      className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && 'delay-400 !w-full'
                      }`}></span>
                    <span
                      className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && '!w-full delay-500'
                      }`}></span>
                  </span>
                  <span className='absolute right-0 h-full w-full rotate-45'>
                    <span
                      className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && '!h-0 !delay-[0]'
                      }`}></span>
                    <span
                      className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && '!h-0 !delay-200'
                      }`}></span>
                  </span>
                </span>
              </button>
              {/* <!-- Hamburger Toggle BTN --> */}

              <Link className='block flex-shrink-0 lg:hidden bg-black' to='/'>
                <div className='bg-black'>
                  <img
                    className=' h-8 w-auto lg:block md:justify-center'
                    src={Logo}
                    alt='Your Company'
                  />
                </div>
              </Link>
            </div>
          )}
          <div />
          {user?.role_id != 'adm' && (
            <div className='bg-black'>
              <img
                className=' h-8 w-auto lg:block md:justify-center'
                src={Logo}
                alt='Your Company'
              />
            </div>
          )}
          <div></div>
          <div>
            <p className='text-white hidden lg:block uppercase font-bold'>
              COLD STORAGE CONTROL SYSTEM
            </p>
          </div>
          <div className='bg-white px-4 py-2'>
            <p className='text-black text-xs text-end hidden lg:block font-bold'>
              {date.toLocaleDateString()}
            </p>

            <p className='text-black text-lg hidden lg:block font-bold'>
              {date.toLocaleTimeString()}
            </p>
          </div>
          <div className='flex items-center gap-3 2xsm:gap-7'>
            {/* <!-- User Area --> */}
            {isLogin && <DropdownUser />}
            {/* <!-- User Area --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
