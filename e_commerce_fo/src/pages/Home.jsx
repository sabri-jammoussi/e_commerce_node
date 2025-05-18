import React from "react";
import Banner from "../components/carroussel/Banner";
function Home() {
  return (
    <div>
      {/* banner component  */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner></Banner>
      </div>
    </div>
  );
}

export default Home;
