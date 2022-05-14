import NavBar from "./NavBar";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdSpaceDashboard, MdChatBubbleOutline } from "react-icons/md";
import { FaWallet, FaUserTie, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineTransaction, AiFillPayCircle } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";
import { RiLuggageDepositFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = ({ children, dropdownHandler }) => {
  const router = useRouter();

  return (
    <div>
      <div className=" inline-flex w-full h-full">
        <div className="sidebar_background ">
          <div className="fixed bg-gray-50 min-h-screen w-2/12">
            <div className="sidebar_logo">
              <div className="third_navbar_background">
                <div className="text-blue-500 sm:text-lg font-extrabold md:text-xl sm:hidden lg:flex">TransMonitor</div>
              </div>
            </div>
            <div className="border-b border right-0"></div>
            {/* List */}
            <ul className="sidebar_list_background">
              <p className="ml-4">Generate Invoice</p>
              <li className="sidebar_title">Main</li>
              <li className="sidebar_menu">
                <div className="flex items-center">
                  <MdSpaceDashboard />
                  <span className="ml-2">Overview</span>
                </div>
              </li>

              <li className="sidebar_title">Payments</li>
              <li className="sidebar_menu">
                <div className="flex items-center">
                  <MdSpaceDashboard />
                  <span className="ml-2">All Payments</span>
                </div>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <div className="relative ">
                    <MdChatBubbleOutline />
                  </div>
                  <span className="ml-2 ">Reconcilled Payments</span>
                </a>
              </li>

              <li className="sidebar_title">Lists</li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <HiUserGroup />
                  <span className="ml-2 ">Un-Reconcilled Payments</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <AiOutlineTransaction className="text-indigo-700 " />
                  <span className="ml-2 ">Manual Settlement</span>
                </a>
              </li>

              <li className="sidebar_title">Orders</li>
              <li className="sidebar_menu">
                <a className="flex items-center">
                  <FaUserTie />
                  <span className="ml-2 ">All Orders</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <FaSignOutAlt />
                  <span className="ml-2 ">Pending Orders</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <FaSignOutAlt />
                  <span className="ml-2 ">Merchant Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* NavBar */}
        <NavBar dropdownHandler={dropdownHandler}>{children}</NavBar>
        {/* NavBar */}
      </div>
    </div>
  );
};

export default Sidebar;
