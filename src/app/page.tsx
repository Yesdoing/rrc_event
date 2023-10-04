"use client";
import Modal from "@/components/Modal";
import { members } from "@/constants/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!members.includes(name)) {
      setOpen(true);
      return;
    }

    router.push(`/draw?name=${name}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="flex w-full flex-col space-between items-center">
        <Image
          src="/icon_rrc.png"
          alt="RRC ICON"
          width={150}
          height={150}
          priority
        />
        <div className="pt-6">
          <p className="text-2xl font-bold italic text-center text-white">
            Rising Running Crew
            <br />
            행운복권 Event
          </p>
        </div>
        <div className="pt-20 w-full max-w-[327px]">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="성함을 입력해주세요."
              className="block w-full rounded-md border-0 px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
            />
            <div className="mt-24">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 w-full py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} />
    </main>
  );
}
