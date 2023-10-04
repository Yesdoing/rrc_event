"use client";
import Lottie from "lottie-react";

import LottieLoser from "@/app/assets/loser.json";

export default function Loser() {
  return (
    <>
      <div>
        <Lottie animationData={LottieLoser} loop={true} />
      </div>
      <div className="animate-bounce">
        <p className="text-xl font-bold italic text-center text-white flex-1">
          아쉽게도 당첨되지 못하셨습니다. <br />
          다음 이벤트를 기대해주세요!
        </p>
      </div>
      <div className="fixed top-0">
        {/* <Lottie animationData={Celebration} loop={true} /> */}
      </div>
    </>
  );
}
