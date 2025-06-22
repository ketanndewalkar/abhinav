import React from "react";
import Card from "../components/Card";

const Page2 = () => {
  const arr = [
    { image: "/01.png", title: "Thermal Printer Paper Rolls" ,price:"100"},
    {
      image: "/02.png",
      title: "White Plain Thermal Paper Roll",
      price: 70,
    },
    {
      image: "/03.png",
      title: "Ribbon Thermal Roll",
      price: 110,
    },
    {
      image: "/04.png",
      title: "White Signature Thermal Paper Rolls",
      price: 135,
    },
    {
      image: "/05.png",
      title: "Lightweight coated Paper (LWC)",
      price: 128,
    },
    {
      image: "05.png",
      title: "White Plain 79 X 50 M Thermal Paper Roll",
      price: 145,
    },
    {
      image: "/07.png",
      title: "Lottery Tickets Thermal Paper Rolls",
      price: 145,
    },
    {
      image: "/08.png",
      title: "ATM Thermal Paper Roll",
      price: 145,
    },
    {
      image: "/09.png",
      title: "Thermal Fax Paper Rolls",
      price: 145,
    }
  ];
  return (
    <div className="w-dvw pt-[13vh] relative h-fit page2">
      <div className="size-full p-[1vw] page21">
        <div className="size-full page211">
          <h1 className="text-red-600 text-[2vw] font-bold ml-[3vw] w-full page2111">
            Thermal Paper Roll
          </h1>
          <div className="w-full h-[2px] bg-gradient-to-r from-black to-white page2112"></div>
          <div className="w-full mt-[2vw] px-[3vw] overflow-x-auto page2113">
            <div className="flex gap-6 min-w-fit flex-wrap  pb-[3vw] pt-[2vw] justify-evenly items-start page21131">
              {arr.map((ele, index) => (
                <>
                  <Card
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                    className="page211311"
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
