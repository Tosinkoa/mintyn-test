import Image from "next/image";
import { MdNotificationsNone } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ children, dropdownHandler }) => {
  const router = useRouter();

  return (
    <div className="flex-col w-full flex">
      {router.pathname === "/login" || router.pathname === "/register" ? (
        ""
      ) : (
        <div className="relative mb-16">
          <div className="navbar_background">
            <div className="sec_navbar_background">
              <div className="third_navbar_background">
                <div className="text-blue-700 sm:text-lg font-extrabold md:text-xl sm:flex lg:hidden">TransMonitor</div>
                <div className="inline-flex space-x-3 ml-40">
                  <FaSearch className="text-xl flex mt-2" />
                  <input type="search" placeholder="Search..." className="flex rounded-sm h-8 p-4" />
                </div>
              </div>

              <p className="sm:hidden lg:flex mx-5">Support</p>
              <p className="sm:hidden lg:flex mx-5">FAQ</p>

                <a className="relative navbar_icons mx-5">
                  <p className="navbar_message_bg">8</p>
                  <MdNotificationsNone className=" text-gray-700 text-2xl cursor-pointer" />
                </a>

              <div className="text-right flex flex-col text-sm font-semibold ">
                <div className="-mt-2">
                  <p>Hello</p>
                  <p>Oluwaleke Ojo</p>
                </div>
              </div>

              <div className="mx-4 relative">
                <div>
                  <div className="navbar_profile_pics">
                    <Image
                      className="h-8 w-8 rounded-full block"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="profile"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>

              <button onClick={dropdownHandler}className="navbar_icons -mr-2 lg:hidden">
                <TiThMenu className="text-2xl text-gray-800 " />
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="w-full pl-24 pr-10">{children}</div>
      </div>
    </div>
  );
};

export default NavBar;
