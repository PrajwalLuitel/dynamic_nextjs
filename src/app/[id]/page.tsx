"use client";

import { useState, useEffect } from "react";
import { get_description, get_image } from "@/utils";

export default function landing({ params }: any) {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const fetchText = async () => {
    const response: any = await get_description(params.id);
    const { result }: { result: string } = response;
    setText(result);
  };

  const fetchImage = async () => {
    const response = await get_image(params.id);
    const { imageData } = response;
    setImage(imageData);
  };

  useEffect(() => {
    fetchText();
    fetchImage();
  }, []);

  return (
    <>
      <nav className="bg-teal-700 text-white text-center py-4">
        <div className="text-3xl font-bold">{params.id}</div>
      </nav>

      <div className="flex items-center justify-between p-10 max-md:flex-col">
        <img
          className="flex-1 w-2/5 h-1/3 mx-auto mt-4 rounded-2xl max-md:w-4/5 translate-x-11 max-md:-translate-x-0 max-lg:translate-x-2 -z-10 shadow-2xl"
          src={image}
          alt="Sunset Banner"
        />

        <div className="flex-1 py-[5%] px-4 bg-gray-100 text-teal-900 rounded-3xl w-3/4 max-md:w-full max-md:text-sm text-justify mb-20 shadow-2xl">
          <p>{text}</p>
        </div>
      </div>

      <footer className="bg-teal-700 text-white text-center py-4 fixed bottom-0 w-full">
        <p>Thank you for Visiting!!</p>
      </footer>
    </>
  );
}
