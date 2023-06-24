import React, { useState } from "react";
import Card from "./card";
import Favourite from "./favourite";
import Playlist from "./playlist";
import './home.css'
import { fetchShazam } from "../redux/features/services/shazamCore";
import { log } from "console";
import { useEffect } from 'react';


type Props = {
};

 async function  Home()  {

  // const allSongs = await fetchShazam();

  // console.log(allSongs);
  

  return (
    <div className="container-fluid col">
      <h1 className="heading">Home</h1>
      <div>
          <Card/>
      </div>
    </div>
  );
};

export default Home;

