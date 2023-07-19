import { useEffect, useState } from "react";
import { VideoCard } from "./videoCard";

export const Home = () => {
  return (
    <div div data-theme="light" className="w-screen h-screen py-20">
      <div className="flex">
        <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-2 gap-y-4 px-6 overflow-hidden">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div class=" mx-auto p-5 sm:p-10 md:p-16">
  <div class="gap-10 flex flex-row overflow-scroll">
    <VideoCard />
    <VideoCard />
    <VideoCard />
    <VideoCard />
    <VideoCard />
    <VideoCard />
  </div>
</div> */
}
