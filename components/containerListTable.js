import React from "react";
import Image from "next/image";

import ContainerListTableHeader from "./containerListTableHeader";
const ContainerListTable = ({ data, listName }) => {
  return (
    <div className="bg mt-12 rounded-lg border-2 border-primaryDefaultText bg-primaryWhiteBg ">
      <ContainerListTableHeader listName={listName} />
      <div className="mt-14">
        <div className="mx-8 flex justify-between text-sm font-bold text-primaryWhiteText">
          <div className=" w-5/12 ">
            <span>Барааны нэр</span>
          </div>
          <div className="w-1/5 ">
            <span>Барааны код</span>
          </div>
          <div className="w-1/5 ">
            <span>Барааны үнэ</span>
          </div>
        </div>
        {data.data.map((el, index) => {
          const { name, price, code } = el.attributes;
          const { image } = el.attributes;
          const imageUrl = image?.data?.attributes?.url || "";
          return (
            <div
              className="mt-4 flex items-center justify-between border-t border-gray-400 px-8 text-xl text-primaryBlackText"
              key={index}
            >
              <div className=" w-5/12 ">
                <div className="flex h-24 items-center">
                  <Image
                    src={`http://localhost:1337${imageUrl}`} // Route of the image file
                    height={80} // Desired size with correct aspect ratio
                    width={80} // Desired size with correct aspect ratio
                    alt=""
                  />
                  <div className="ml-6">
                    <span>{name}</span>
                  </div>
                </div>
              </div>
              <div className="w-1/5 ">
                <span>{code}</span>
              </div>
              <div className="w-1/5 ">
                <span>{price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContainerListTable;
