"use client";

import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  //false def-close
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/">Movieverse</Link>
        </div>
        <ul className="nav">
          <li>
            <Link href="/">
              <a /> Home
            </Link>
          </li>
          <li>
            <Link href="/Popular">
              <a /> Popular
            </Link>
          </li>
          <li>
            <Link href="/toprated">
              <a /> toprated
            </Link>
          </li>
          <li>
            <Link href="/upcoming">
              <a /> Upcoming
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
