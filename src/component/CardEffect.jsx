"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-8 border">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-neutral-600 dark:text-white">
          looking too good today shawty nice ass
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-4 dark:text-neutral-300">
          That wasn't me ... I was doing tasks... trust me...
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-8">
          <img
            src="https://media1.tenor.com/m/CQc61Bq-rfQAAAAC/sonic-exe-freaky.gif" 
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-24">
          <CardItem
            translateZ={20}
            as="a"
            href="#"
            target="__blank"
            className="px-6 py-3 rounded-xl text-lg font-normal dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            Try Me now 
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-6 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            sluurrrrppp
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}