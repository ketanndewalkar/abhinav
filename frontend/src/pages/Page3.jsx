import React from 'react'
import Card from '../components/Card';

const Page3 = () => {
    const arr = [
    { image: "/10.png", title: "Carbon Less Paper Rolls" ,price:"100"},
    {
      image: "/11.png",
      title: "Carbonless Cash Roll",
      price: 70,
    },
    {
      image: "/12.png",
      title: "3 Ply Carbonless Roll",
      price: 110,
    },
    {
      image: "/13.png",
      title: "Two Ply Carbonless Paper",
      price: 135,
    },
    {
      image: "/14.png",
      title: "Carbonless Paper Reams",
      price: 128,
    },
    {
      image: "15.png",
      title: "Carbonless Paper",
      price: 145,
    },
    {
      image: "/16.png",
      title: "Carbonless Paper Roll",
      price: 145,
    },
    {
      image: "/17.png",
      title: "Customized Carbonless Rolls",
      price: 145,
    }
  ];
  return (
    <div className="w-dvw pt-[13vh] relative h-fit page2">
          <div className="size-full p-[1vw] page21">
            <div className="size-full page211">
              <h1 className="text-red-600 text-[2vw] font-bold ml-[3vw] w-full page2111">
                Carbon Less Paper Roll
              </h1>
              <div className="w-full h-[2px] bg-gradient-to-r from-black to-white page2112"></div>
              <div className="w-full mt-[2vw] px-[3vw] overflow-x-auto page2113">
                <div className="flex gap-6 min-w-fit flex-wrap  pb-[3vw] justify-evenly items-start page21131">
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
  )
}

export default Page3