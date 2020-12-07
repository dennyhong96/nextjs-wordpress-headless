import { isEmpty } from "lodash";
import Link from "next/link";

const isMenuVisible = true;

const Nav = ({ headerMenus }) => {
  // If no menu, don't render anything
  if (isEmpty(headerMenus)) {
    return null;
  }

  console.log({ headerMenus });

  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-300 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png`}
          alt=""
          width="48"
          height="48"
          className="mr-4"
        />
        <div className="flex flex-col items-start justify-start">
          {/* <span className="font-semibold text-xl tracking-tight">{header?.siteTitle}</span> */}
          {/* <span>{header?.siteTagLine}</span> */}
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          // onClick={() => setMenuVisibility(!isMenuVisible)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? "max-h-full" : "h-0"
        } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        {!!headerMenus?.length && (
          <div className="text-sm lg:flex-grow">
            {headerMenus?.map((menu) => (
              <Link key={menu?.node.id} href={menu?.node?.path}>
                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-100 mr-4">
                  {menu?.node?.label}
                </a>
              </Link>
            ))}
          </div>
        )}
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-300 hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
