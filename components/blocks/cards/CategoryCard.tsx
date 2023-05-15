import React from "react";

export default function CategoryCard() {
  return (
    <a
      className="rounded-lg transition-all flex flex-col items-center shadow-lg hover:shadow-xl sm:hover:scale-105 justify-center text-center md:min-w-[8rem] min-w-[7rem] md:h-32 h-28 bg-white text-inherit hover:bg-light-200 snap-start"
      href="/delicious/desserts"
    >
      <div className="w-10 h-10 img">
        <img
          src="https://img.freepik.com/free-icon/macaron_318-937755.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.183644258.1674764907&amp;semt=sph"
          alt="Image of Desserts"
          className="object-contain object-center w-full h-full rounded-lg"
        />
      </div>
      <div className="font-bold name">Desserts</div>
      <div className="text-xs numberOfItems text-zinc-400"></div>
    </a>
  );
}
