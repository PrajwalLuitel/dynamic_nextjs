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
    <div className="bg-gray-100">
      <nav className="bg-teal-700 text-white text-center py-4">
        <div className="text-3xl font-bold">{params.id}</div>
      </nav>

      <img
        className="w-1/5 h-1/3 mx-auto mt-4 rounded-md shadow-md"
        src={image}
        alt="Sunset Banner"
      />

      <div className="p-8 w-3/4 mx-auto text-justify mb-20">
        <p>{text}</p>
      </div>

      <footer className="bg-teal-700 text-white text-center py-4 fixed bottom-0 w-full">
        <p>Thank you for Visiting!!</p>
      </footer>
    </div>
  );
}
