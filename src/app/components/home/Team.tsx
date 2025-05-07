import Image from "next/image";
import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const teamMember = [
  {
    name: "Jocelyn Schleifer",
    role: "Managing Director",
    image: "/team1.png",
  },
  {
    name: "Jocelyn Schleifer",
    role: "Managing Director",
    image: "/team2.png",
  },
  {
    name: "Jocelyn Schleifer",
    role: "Managing Director",
    image: "/team3.png",
  },
  {
    name: "Jocelyn Schleifer",
    role: "Managing Director",
    image: "/team4.png",
  },
  {
    name: "Jocelyn Schleifer",
    role: "Managing Director",
    image: "/team5.png",
  },
  {
    name: "Jocelyn Schleifer",
    role: "Managing Director",
    image: "/team6.png",
  },
];
const Team = () => {
  return (
    <div className="bg-zinc-900 min-h-[800px] flex items-center justify-center py-20 overflow-x-clip">
      <div className="container">
        <div className=" text-white sm:text-4xl text-3xl md:text-5xl gap-3 flex items-center">
          <MdSubdirectoryArrowRight size={26} />
          <p>Our Team</p>
        </div>
        <div className="md:grid flex flex-col lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10 mt-10">
          <p className="md:leading-[3.5rem] leading-[2.5rem] text-xl  md:text-[24px] lg:text-[36px] text-neutral-200  col-span-2 ">
            We are passionate about creating visually stunning and functional
            solutions that communicate effectively.
          </p>
          {teamMember.map(({ image, name, role }, index) => (
            <div
              key={index}
              className=" rounded-[24px] h-[378px] w-[280px] md:w-[296px] border border-neutral-300 hidden md:flex flex-col overflow-hidden "
            >
              <Image
                src={image}
                height={400}
                width={400}
                alt=""
                className=" w-full h-[70%] object-cover flex-1 grayscale"
              />
              <div className=" bg-zinc-800 flex-[.5] space-y-2 p-4 rounded-b-[24px]">
                <p className=" text-xl text-white font-semibold">{name}</p>
                <p className=" text-neutral-300">{role}</p>
              </div>
            </div>
          ))}

          <div className="md:hidden flex flex-row overflow-x-scroll  w-full gap-10 pl-[10px]">
            {teamMember.map(({ image, name, role }, index) => (
              <div
                key={index}
                className=" rounded-[24px] h-[378px] min-w-[296px] border border-neutral-300 flex flex-col overflow-hidden "
              >
                <Image
                  src={image}
                  height={282}
                  width={296}
                  alt=""
                  className=" w-full h-[70%] object-cover flex-1 grayscale"
                />
                <div className=" bg-zinc-800 flex-[.5] space-y-2 p-4 rounded-b-[24px]">
                  <p className=" text-xl text-white font-semibold">{name}</p>
                  <p className=" text-neutral-300">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
