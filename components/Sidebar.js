import NavBar from "./NavBar";
import {  MdSpeed } from "react-icons/md";
import {BsWallet, BsWallet2, BsRecordCircle} from 'react-icons/bs'
import {BiWalletAlt} from 'react-icons/bi'
import {GrNotes, GrDocumentNotes} from 'react-icons/gr'
import { FaRegUser } from "react-icons/fa";
import {MdEventNote} from 'react-icons/md'


const Sidebar = ({ children, dropdownHandler }) => {

  return (
    <div>
      <div className=" inline-flex w-full h-full">
        <div className="sidebar_background ">
          <div className="fixed bg-gray-50 min-h-screen w-2/12">
            <div className="sidebar_logo">
              <div className="third_navbar_background">
                <div className="sidebar_title_logo">TransMonitor</div>
              </div>
            </div>
            <div className="border-b shadow-xl border right-0"></div>
            {/* List */}
            <ul className="sidebar_list_background">
              <p className="sidebar_generate_invoice">GENERATE INVIOCE</p>
              <li className="sidebar_title">Main</li>
              <li className="sidebar_menu">
                <div className="flex items-center">
                  <MdSpeed className="text-lg" />
                  <span className="ml-2">Overview</span>
                </div>
              </li>

              <li className="sidebar_title pb-2">Payments</li>
              <li className="sidebar_menu">
                <div className="flex items-center">
                  <BsWallet className="text-lg" />
                  <span className="ml-2">All Payments</span>
                </div>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <div className="relative ">
                    <BsWallet2 className="text-lg" />
                  </div>
                  <span className="ml-2 ">Reconcilled Payments</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <BiWalletAlt className="text-xl" />
                  <span className="ml-2 ">Un-Reconcilled Payments</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <BsRecordCircle className="text-lg" />
                  <span className="ml-2 ">Manual Settlement</span>
                </a>
              </li>

              <li className="sidebar_title">Orders</li>
              <li className="sidebar_menu">
                <a className="flex items-center">
                  <GrNotes className="text-lg" />
                  <span className="ml-2 ">All Orders</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <GrDocumentNotes className="text-lg" />
                  <span className="ml-2 ">Pending Orders</span>
                </a>
              </li>

              <li className="sidebar_menu">
                <a className="flex items-center">
                  <MdEventNote className="text-lg" />
                  <span className="ml-2 ">Reconcilled Orders</span>
                </a>
              </li>

              <li className="sidebar_menu ">
                <a className="flex items-center mt-4">
                  <FaRegUser className="text-lg" />
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
