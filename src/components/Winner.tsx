"use client";
import Lottie from "lottie-react";

import Trophy from "@/app/assets/trophy.json";

import Celebration from "@/app/assets/celebration.json";

interface Props {
  name?: string;
  prize?: string;
}

export default function Winner({ name, prize }: Props) {
  return (
    <>
      <div>
        <Lottie animationData={Trophy} loop={true} />
      </div>
      <div className="animate-bounce">
        <p className="text-xl font-bold italic text-center text-white">
          축하합니다! {name}님은
          <br />
          {prize}
          <br />에 당첨되셨습니다!!
        </p>
      </div>
      <div className="fixed top-0">
        <Lottie animationData={Celebration} loop={true} />
      </div>
    </>
  );
}
