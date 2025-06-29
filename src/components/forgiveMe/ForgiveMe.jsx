import React, { useState } from "react";
import bubu1 from "../../assets/bubu/bubu1.png";
import bubu2 from "../../assets/bubu/bubu2.gif";
import bubu3 from "../../assets/bubu/bubu3.gif";
import bubu4 from "../../assets/bubu/bubu4.webp";
import bubu5 from "../../assets/bubu/bubu5.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ForgiveMe() {
  const images = [
    {
      src: bubu1,
      text: "I know I messed up, Miss Night Owl 🥺... but you're too important to me to lose over one mistake. Please, talk to me like before 🙏.",
    },
    {
      src: bubu2,
      text: "Please maan jao, Miss Night Owl 🌙... I'm really sorry 💔. This version of us hurts more than the fight itself.",
    },
    {
      src: bubu3,
      text: "Miss Night Owl 😔... I know you're upset, and you have every right to be — but those 'hmm' replies just make me feel even more guilty 💭💔.",
    },
    {
      src: bubu4,
      text: "Please maan jao na, Miss Night Owl 💌... aap hi agar mujhse naaraz rahoge, toh mere paas mera kehne jaisa koi bhi nahi bachega 💔.",
    },
    {
        src:bubu5,
        text:"Thank You So much ke aap maan gye... Let's relive our some of cute memories"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNoClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // cycles back to 0
  };

  const [isForgiven, setIsForgiven] = useState(false); // add this line

    const handleYesClick = () => {
    setCurrentIndex(4);
    setIsForgiven(true); // update forgiveness status
    };



  const currentImage = images[currentIndex];
  const textWithoutEmojis = currentImage.text.replace(/[\u{1F300}-\u{1FAFF}]/gu, "");
  const emojisOnly = currentImage.text.match(/[\u{1F300}-\u{1FAFF}]/gu)?.join("") || "";

  return (
    <div className="flex flex-col justify-evenly gap-5 border h-[100vh]">
      <div className="card p-2 flex flex-col gap-10 border items-center justify-center">
        <div className="imagediv p-2 border rounded-full">
            <img src={currentImage.src} alt="" className="rounded-full w-72 h-72 object-contain"/>
        </div>
        <p className="p-2 text-xl text-justify">
          <span className="bg-gradient-to-tr from-rose-500 to-pink-500 bg-clip-text text-transparent">
            {textWithoutEmojis}
          </span>{" "}
          <span>{emojisOnly}</span>
        </p>
      </div>
      <div className="flex justify-evenly border gap-2">
  {!isForgiven && (
    <button
      className="text-xl text-white flex gap-4 bg-gradient-to-tr from-rose-300 to-pink-400 items-center border border-white rounded-2xl px-5 py-2"
      onClick={handleNoClick}
      id="no"
    >
      <FontAwesomeIcon icon={faHeartBroken} />
      <p>No</p>
    </button>
  )}

  {!isForgiven && (
    <button
      className="text-xl text-white flex gap-4 items-center border-2 bg-white border-pink-500 rounded-2xl px-5 py-2"
      onClick={handleYesClick}
    >
      <FontAwesomeIcon icon={faHeart} className="text-rose-400 text-2xl" />
      <p className="bg-gradient-to-tr from-rose-500 to-pink-500 bg-clip-text text-transparent font-bold">
        Yes
      </p>
    </button>
  )}

  {isForgiven && (
    <Link
      className="text-white flex gap-4 bg-gradient-to-tr from-rose-300 to-pink-400 items-center border border-white rounded-2xl px-5 py-2"
      to={"/Our_Moments"}
    >
      <FontAwesomeIcon icon={faHeart} className="text-rose-400 text-2xl" />
      <p className="bg-gradient-to-tr from-rose-500 to-pink-500 bg-clip-text text-transparent font-bold">
        Go To Moments Part
      </p>
    </Link>
  )}
    </div>

    </div>
  );
}

export default ForgiveMe;
