import React from "react";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";

const Watches = () => {
  return (
    <div style={{display:"flex",gap:"40px",margin:"auto",justifyContent:"center"}}>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        <WatchCard/>
      </div>
    </div>
  );
};

export default Watches;
