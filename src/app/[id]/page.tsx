"use client";

import { useState, useEffect } from "react";
import { get_description, get_image } from "@/utils";

const styles = {
  navbar: {
    textAlign: "center",
    padding: "1em",
    background: "#025043",
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "2.5rem",
  },
  content: {
    padding: "2em",
    width: "70%",
    margin: "0 auto",
    textAlign: "justify",
    marginBottom: "5rem",
  },

  footer: {
    padding: "1em",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    background: "#025043",
    color: "#fff",
    textAlign: "center",
  },

  banner: {
    width: "20%",
    height: "30%",
    margin: "0 auto",
    textAlign: "right",
    borderRadius: "1rem",
    marginTop: "1rem",
  },
};

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
    <div>
      <nav style={styles.navbar}>
        <div>{params.id}</div>
      </nav>

      <img style={styles.banner} src={image} />

      <div style={styles.content}>
        <p>{text}</p>
      </div>

      <footer style={styles.footer}>
        <p>Thank you for Visiting !!</p>
      </footer>
    </div>
  );
}
