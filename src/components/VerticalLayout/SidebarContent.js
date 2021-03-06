import React, { useEffect } from "react";
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaBuilding } from "react-icons/fa";

const SidebarContent = (props) => {
  useEffect(() => {
    const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;

    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      return false;
    }
    return false;
  }

  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="bx bx-home-circle"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/agencies" className="waves-effect">
              <i className="bx bx-buildings"></i>
              <span>Agencies</span>
            </Link>
          </li>
          <li>
            <Link to="/audit" className="waves-effect">
              <i className="bx bx-stats"></i>
              <span>Audit</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="waves-effect">
              <i className="bx bx-slider-alt"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default withRouter(SidebarContent);
