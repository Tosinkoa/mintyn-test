import { MdSpeed, MdSupportAgent } from "react-icons/md";
import { BsWallet, BsWallet2, BsRecordCircle } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { GrNotes, GrDocumentNotes } from "react-icons/gr";
import { FaRegUser, FaTimes} from "react-icons/fa";
import {FcAbout} from 'react-icons/fc'
import { MdEventNote } from "react-icons/md";

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
        <div className="dropdown_header" onClick={dropdownHandler}>
        <div className="sidebar_logo">
              <div className="third_navbar_background">
                <div className="dropdown_logo">TransMonitor</div>
              </div>
            </div>
          <div className="right-20">
            <FaTimes onClick={dropdownHandler} className="dropdown_close" />
          </div>
        </div>

        <div className="border-b  border-2"></div>
        {/* List */}

        <ul className="sidebar_list_background">
          <p className="generate_voice">GENERATE INVIOCE</p>
          <li className="sidebar_title">Main</li>
          <li className="sidebar_menu">
            <div className="flex items-center">
              <MdSpeed />
              <span className="ml-2">Overview</span>
            </div>
          </li>

          <li className="sidebar_title pb-2">Payments</li>
          <li className="sidebar_menu">
            <div className="flex items-center">
              <BsWallet />
              <span className="ml-2">All Payments</span>
            </div>
          </li>

          <li className="sidebar_menu">
            <a className="flex items-center">
              <div className="relative ">
                <BsWallet2 />
              </div>
              <span className="ml-2 ">Reconcilled Payments</span>
            </a>
          </li>

          <li className="sidebar_menu">
            <a className="flex items-center">
              <BiWalletAlt />
              <span className="ml-2 ">Un-Reconcilled Payments</span>
            </a>
          </li>

          <li className="sidebar_menu">
            <a className="flex items-center">
              <BsRecordCircle />
              <span className="ml-2 ">Manual Settlement</span>
            </a>
          </li>

          <li className="sidebar_title">Orders</li>
          <li className="sidebar_menu">
            <a className="flex items-center">
              <GrNotes />
              <span className="ml-2 ">All Orders</span>
            </a>
          </li>

          <li className="sidebar_menu">
            <a className="flex items-center">
              <GrDocumentNotes />
              <span className="ml-2 ">Pending Orders</span>
            </a>
          </li>

          <li className="sidebar_menu">
            <a className="flex items-center">
              <MdEventNote />
              <span className="ml-2 ">Reconcilled Orders</span>
            </a>
          </li>

          <li className="sidebar_menu ">
            <a className="flex items-center mt-4">
              <FaRegUser />
              <span className="ml-2  ">Merchant Profile</span>
            </a>
          </li>

          <li className="sidebar_menu ">
            <a className="flex items-center">
              <MdSupportAgent />
              <span className="ml-2  ">Support</span>
            </a>
          </li>

          <li className="sidebar_menu ">
            <a className="flex items-center">
              <FcAbout />
              <span className="ml-2  ">FAQ</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
