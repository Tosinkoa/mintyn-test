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
      <div className=" inline-flex  w-full h-full ">
        {router.pathname !== "/login" && router.pathname !== "/register" ? (
          <div className="sidebar_background ">
            <div className="fixed bg-gray-50 min-h-screen">
              <div className="sidebar_logo">
              <div className="third_navbar_background">
                <div className="text-blue-700 sm:text-lg font-extrabold md:text-xl sm:hidden lg:flex" >TransMonitor</div>
              </div>
              </div>
              <div className="border-b border right-0"></div>
              {/* List */}
              <ul className="sidebar_list_background">
                <li className="sidebar_title">Main</li>
                <Link href="/" passHref>
                  <li className="sidebar_menu">
                    <div className="flex items-center">
                      <MdSpaceDashboard />
                      <span className="ml-2">Dashboard</span>
                    </div>
                  </li>
                </Link>
                <Link href="/messages" passHref>
                  <li className="sidebar_menu">
                    <a className="flex items-center">
                      <div className="relative ">
                        <div className="sidebar_message">2</div>
                        <MdChatBubbleOutline />
                      </div>
                      <span className="ml-2 ">Messages</span>
                    </a>
                  </li>
                </Link>
                <li className="sidebar_title">Lists</li>

                <Link href="/users" passHref>
                  <li className="sidebar_menu">
                    <a className="flex items-center">
                      <HiUserGroup />
                      <span className="ml-2 ">Users</span>
                    </a>
                  </li>
                </Link>
                <Link href="/transactions" passHref>
                  <li className="sidebar_menu">
                    <a className="flex items-center">
                      <AiOutlineTransaction className="text-indigo-700 " />
                      <span className="ml-2 ">Transactions</span>
                    </a>
                  </li>
                </Link>
                <Link href="/deposits" passHref>
                  <li className="sidebar_menu">
                    <div className="flex items-center">
                      <RiLuggageDepositFill />
                      <span className="ml-2 ">Deposits</span>
                    </div>
                  </li>
                </Link>
                <Link href="/withdrawals" passHref>
                  <li className="sidebar_menu">
                    <div className="flex items-center  ">
                      <RiMoneyDollarBoxFill />
                      <span className="ml-2 ">Withdrawals</span>
                    </div>
                  </li>
                </Link>
                <Link href="/bill-payments" passHref>
                  <li className="sidebar_menu">
                    <div className="flex items-center">
                      <AiFillPayCircle />
                      <span className="ml-2 ">Bill Payments</span>
                    </div>
                  </li>
                </Link>
                <Link href="/transfers" passHref>
                  <li className="sidebar_menu">
                    <div className="flex items-center">
                      <BiTransfer />
                      <span className="ml-2 ">Transfers</span>
                    </div>
                  </li>
                </Link>
                <Link href="/wallets" passHref>
                  <li className="sidebar_menu">
                    <div className="flex items-center">
                      <FaWallet />
                      <span className="ml-2 ">Wallets</span>
                    </div>
                  </li>
                </Link>
                <li className="sidebar_title">User</li>
                <Link href="/profile" passHref>
                  <li className="sidebar_menu">
                    <a className="flex items-center">
                      <FaUserTie />
                      <span className="ml-2 ">Profile</span>
                    </a>
                  </li>
                </Link>
                <Link href="/login" passHref>
                  <li className="sidebar_menu">
                    <a className="flex items-center">
                      <FaSignOutAlt />
                      <span className="ml-2 ">Logout</span>
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* NavBar */}
        <NavBar dropdownHandler={dropdownHandler}>{children}</NavBar>
        {/* NavBar */}
      </div>
    </div>
  );
};

export default Sidebar;