import React from "react";
import { BiArch, BiBadge } from "react-icons/bi";
import "./sidebar.css";

type Props = {};

const sidebar = (props: Props) => {
  return (
    <div className="bg-success p-4 min-vh-100 sidebar ">
      <div className="m-2 my-4 tarang-1">
        <span className=" fs-1 tarang">Tarang</span>
      </div>
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <span className="fs-5">Home</span>
        </a>
        <a className="list-group-item py-2">
          <span className="fs-5">Favourites</span>
        </a>
        <a className="list-group-item py-2" >
          <span className="fs-5">Playlists</span>
        </a>
      </div>
    </div>
  );
};

export default sidebar;
