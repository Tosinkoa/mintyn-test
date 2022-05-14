import Head from "next/head";
import { useState } from "react";

const Layout = ({ title, keywords, description, children }) => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const showUser = useSelector((state) => state.showUser.showUser);

  const dropdownHandler = () => setShowDropdown(!showDropdown);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <div>
          <div>
              <h1>TransMonitor</h1>
          </div>
      <div>
          {children}
      </div>
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