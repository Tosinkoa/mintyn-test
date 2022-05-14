import Image from "next/image";
import { MdSpaceDashboard, MdChatBubbleOutline } from "react-icons/md";
import { FaWallet, FaTimes, FaUserTie, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineTransaction, AiFillPayCircle } from "react-icons/ai";
import { RiLuggageDepositFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import Link from "next/link";

const Dropdown = ({ dropdownHandler, showDropdown }) => {
  return (
    <div>
      {!showDropdown ? (
        ""
      ) : (
        <>
          <div onClick={dropdownHandler} className="backdrop"></div>
        </>
      )}
      <div
        className={`dropdown_background ${
          showDropdown ? "translate-x-0" : "-translate-x-full"
        } animate ease-in-out duration-700 `}
      >
        <Link href="/" passHref>
          <div className="dropdown_header" onClick={dropdownHandler}>
            <div className="flex ">
              <Image
                src="/assets/images/Zelta-Pay-Logo.png"
                alt="zeltapay-logo"
                width={50}
                height={50}
                objectFit="cover"
                className="mt-2"
              />
              <span className="dropdown_header_title">ZeltaPay</span>
            </div>
            <div className="right-20">
              <FaTimes onClick={dropdownHandler} className="dropdown_close" />
            </div>
          </div>
        </Link>
        <div className="border-b  border-2"></div>
        {/* List */}

        <ul className="flex flex-col mt-2">
          <li className="sidebar_title">Main</li>
          <Link href="/" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <div>
                  <MdSpaceDashboard className="text-xl" />
                </div>
                <span className="ml-2 text-sm">Dashboard</span>
              </a>
            </li>
          </Link>
          <Link href="/messages" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <div className="relative ">
                  <p className="messagebackground">2</p>
                  <MdChatBubbleOutline className="text-lg" />
                </div>
                <span className="ml-2 text-sm">Messages</span>
              </a>
            </li>
          </Link>

          <li className="sidebar_title">Lists</li>

          <Link href="/users" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <HiUserGroup />
                <span className="ml-2 text-sm">Users</span>
              </a>
            </li>
          </Link>
          <Link href="/transactions" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <AiOutlineTransaction />
                <span className="ml-2 text-sm">Transactions</span>
              </a>
            </li>
          </Link>
          <Link href="/deposits" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <RiLuggageDepositFill className="text-lg" />
                <span className="ml-2 text-sm">Deposits</span>
              </a>
            </li>
          </Link>
          <Link href="/withdrawals" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center  focus:bg-blue-500" onClick={dropdownHandler}>
                <RiMoneyDollarBoxFill className="text-lg" />
                <span className="ml-2 text-sm">Withdrawals</span>
              </a>
            </li>
          </Link>
          <Link href="/bill-payments" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <AiFillPayCircle className="text-lg" />
                <span className="ml-2 text-sm">Bill Payments</span>
              </a>
            </li>
          </Link>
          <Link href="/transfers" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <BiTransfer className="text-lg" />
                <span className="ml-2 text-sm">Transfers</span>
              </a>
            </li>
          </Link>
          <Link href="/wallets" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <FaWallet className="text-lg" />
                <span className="ml-2 text-sm">Wallets</span>
              </a>
            </li>
          </Link>
          <li className="sidebar_title">User</li>
          <Link href="/profile" passHref>
            <li className="sidebar_menu">
              <a className="flex items-center" onClick={dropdownHandler}>
                <FaUserTie />
                <span className="ml-2 text-sm">Profile</span>
              </a>
            </li>
          </Link>
          <Link href="/login" passHref>
            <li className="sidebar_menu">
              <div className="flex items-center">
                <FaSignOutAlt />
                <span className="ml-2 text-sm">Logout</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
