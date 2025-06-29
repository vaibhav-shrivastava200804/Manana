import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import us1 from "../../assets/us/us1.jpg";
import us2 from "../../assets/us/us2.jpg";
import us3 from "../../assets/us/us3.jpg";
import us4 from "../../assets/us/us4.jpg";
import us5 from "../../assets/us/us5.jpg";
import us6 from "../../assets/us/us6.jpg";
import us7 from "../../assets/us/us7.jpg";
import us8 from "../../assets/us/us8.jpg";
import us9 from "../../assets/us/us9.jpg";
import us10 from "../../assets/us/us10.jpg";
import us11 from "../../assets/us/us11.jpg";
import us12 from "../../assets/us/us12.jpg";
import us13 from "../../assets/us/us13.jpg";

const usImages = [
  { src: us1, text: "Woh funny wali photo jisme aap cute sa face bana rahe the — ab bhi dekh ke hasi aa jaati hai 😂. Har moment aapke saath special ban jaata hai." },
  { src: us2, text: "Miss Night Owl, har photo ek taare jaisi hai — khoobsurat, special, aur dil ke bahut kareeb 💫." },
  { src: us3, text: "Har photo ke peeche ek kahani hai — woh chhoti chhoti baatein, aapke expressions, sab kuch yaad aata hai Miss Night Owl 💭." },
  { src: us4, text: "Miss Night Owl 🌌, aapki woh smile tasveer mein bhi dil ko choo jaati hai. Jab bhi dekhta hoon, khud-ba-khud ek smile aa jaati hai 😊." },
  { src: us5, text: "Kuch photos thodi blur ho sakti hain, par unmein chhupi feeling bilkul clear hoti hai. Har ek photo mein ek pyaari yaad judi hai 📸❤️." },
  { src: us6, text: "Aapka woh cute expression, aankhon ki woh chamak, halka sa sharmaana — sab kuch ek dum dreamy lagta hai 🥹💘." },
  { src: us7, text: "Kabhi kabhi lagta hai ki photos mein bhi aap itne sundar lagte ho, lekin real mein toh usse bhi zyada khoobsurat ho 😍." },
  { src: us8, text: "Jab bhi mood off hota hai, main bas yeh photos dekh leta hoon. Aapki ek tasveer bhi sab kuch better kar deti hai Miss Night Owl 🫶." },
  { src: us9, text: "Aapko dekh kar lagta hai photo ka asli charm toh aap hi ho. Har tasveer mein aap sabse zyada chamak rahe ho ✨." },
  { src: us10, text: "Yeh tasveerein sirf yaadein nahi hain, yeh meri duniya ka ek hissa hain. Har ek mein aapka ehsaas hai 💖." },
  { src: us11, text: "Miss Night Owl 🌙, humne sirf pictures nahi li — humne lamhe capture kiye hain, jinmein sirf aap aur main the 💫." },
  { src: us12, text: "Woh photo yaad hai jisme aap muskura rahi thi aur main bas aapko dekh raha tha? Us pal mein duniya ki saari khushi thi mere liye 😊🌸." },
  { src: us13, text: "Miss Night Owl 🌙, yaad hai woh pehli photo jisme hum dono bina plan kiye twin kar gaye the? Lag hi nahi raha tha coincidence… it was just perfect 💕." },
];

function OurMoments() {
  return (
    <div className="flex flex-col items-center justify-center p-10 px-4 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Our Sweet Moments 💖</h2>
      <Swiper
        effect="cards"
        loop={true}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[90vw] max-w-md border"
      >
        {usImages.map((item, idx) => (
          <SwiperSlide key={idx} className="flex flex-col items-center bg-gradient-to-tr from-rose-400 to-pink-300 rounded-xl p-4 shadow-lg">
            <img
              src={item.src}
              alt={`Memory ${idx + 1}`}
              className="rounded-xl h-80 w-full mb-4"
            />
            <p className="text-gray-700 text-center text-sm">{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurMoments;
