import Link from "next/link";

import { isEmpty, isArray } from "lodash";
import { sanitize } from "../../../utils/helpers";
import { getIconComponentBySlug } from "../../../utils/iconsMap";
import { cloneElement } from "react";

const Footer = ({ footer, footerMenus }) => {
  if (isEmpty(footerMenus) || !isArray(footerMenus)) {
    return null;
  }

  console.log({ footer });

  return (
    <footer className="bg-teal p-6">
      <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
        {/* Widget One */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne) }} />
        </div>

        {/* Widtet Two */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo) }} />
        </div>

        {/* Menus */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <ul>
            {footerMenus.map((item) => (
              <li key={item?.node?.id}>
                <Link href={item?.node?.path}>
                  <a>{item?.node?.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="my-8 flex flex-wrap -mx-1 overflow-hidden">
        {/* Copyright text */}
        <div class="my-1 px-1 w-full overflow-hidden sm:w-full xl:w-1/2">
          <div className="text-white">{footer?.copyrightText ?? "Denny Hong | 2020"}</div>
        </div>

        {/* Social links */}
        <div class="my-1 px-1 w-full overflow-hidden sm:w-full xl:w-1/2">
          {!isEmpty(footer?.socialLinks) && isArray(footer?.socialLinks) && (
            <ul className="flex gap-2">
              {footer.socialLinks.map((link) => (
                <li key={link.iconName}>
                  <a className="text-white w-4  " href={link.iconUrl}>
                    {cloneElement(getIconComponentBySlug(link.iconName), {
                      className: "w-6 text-white fill-current",
                    })}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
