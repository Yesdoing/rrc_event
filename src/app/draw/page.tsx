"use client";

import Lottie from "lottie-react";
import UnboxingBox from "../assets/unboxing.json";
import Image from "next/image";
import ScratchCard from "react-scratchcard-v3";
import { useEffect, useState } from "react";
import logo from "@/app/assets/icon_rrc.png";
import Winner from "@/components/Winner";
import { motion, AnimatePresence } from "framer-motion";
import Loser from "@/components/Loser";
import { useRouter, useSearchParams } from "next/navigation";
import { members, winners } from "@/constants/constants";

type STEP = "stale" | "winner" | "loser";

export default function Draw() {
  const router = useRouter();
  const [step, setStep] = useState<STEP>("stale");
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  const is_winner = winners.find((winner) => winner.name === name);

  useEffect(() => {
    if (!members.includes(name ?? "")) {
      router.replace("/");
    }
  }, [name, router]);

  const handleOnComplete = () => {
    if (!!is_winner) {
      setStep("winner");
    } else {
      setStep("loser");
    }
  };

  return (
    <main className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step ? step : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex min-h-screen flex-col items-center flex-wrap gap-20 pt-16 "
        >
          {step === "stale" ? (
            <>
              <div className="flex justify-between">
                <Lottie
                  animationData={UnboxingBox}
                  loop={true}
                  style={{ width: 80 }}
                />
                <Lottie
                  animationData={UnboxingBox}
                  loop={true}
                  style={{ width: 80 }}
                />
                <Lottie
                  animationData={UnboxingBox}
                  loop={true}
                  style={{ width: 80 }}
                />
              </div>
              <ScratchCard
                image="/img_card.png"
                width={339}
                height={150}
                finishPercent={70}
                onComplete={handleOnComplete}
              >
                <div className="bg-gray-500 rounded-md flex justify-center">
                  <Image src={logo} alt="logo" height={150} />
                </div>
              </ScratchCard>

              <div className="animate-bounce">
                <p className="text-xl font-bold italic text-center text-white">
                  RRC 행운 카드를 긁어보세요.
                </p>
                {/* <p className="text-xl font-bold italic text-center text-white">
                  10월의 우수 참여자 중에서 랜덤 상품에 당첨될 수 있어요!
                </p> */}
              </div>
            </>
          ) : step === "winner" ? (
            <Winner name={is_winner?.name} prize={is_winner?.prize} />
          ) : (
            <Loser />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
