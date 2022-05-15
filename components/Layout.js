import { useState } from "react";
import Head from "next/head";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";

const Layout = ({ title, keywords, description, children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownHandler = () => setShowDropdown(!showDropdown);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative text-gray-700 bg-gray-200">
        <div className="layout_overlay"></div>
        <Sidebar dropdownHandler={dropdownHandler} >{children}</Sidebar>
        <Dropdown dropdownHandler={dropdownHandler} showDropdown={showDropdown} />
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Mintyn ",
  description: "Mintyn test project",
  keywords: "mintyn, test, project",
};
