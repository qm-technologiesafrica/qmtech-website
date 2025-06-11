import Image from "next/image";
import React from "react";

const featured = [
  "/givanduan.svg",
  "/certina.svg",
  "/drom.svg",
  "/google.svg",
  "/amazon.svg",
  "/godaddy.svg",
];

const Featured = () => {
  return (
    <div className="bg-neutral-50 min-h-[500px] flex flex-col justify-center py-10">
      <div className=" container space-y-10">
        <p className=" text-black sm:text-4xl text-3xl md:text-5xl gap-3 flex items-center">
          Featured <span className=" text-primary-800 italic">On?</span>
        </p>
        <p className=" text-xl">
          Check out list of amazing brand QM Technologies has featured on
        </p>
        <div className="flex sm:flex-row flex-col  gap-10 items-center md:justify-between justify-center">
          {featured.map((image, index) => (
            <Image src={image} height={100} width={100} alt="" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
