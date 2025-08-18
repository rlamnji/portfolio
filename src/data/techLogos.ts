// 사용 언어 이미지와 이름 매핑
import react from "../assets/tech/react.svg";
import typescript from "../assets/tech/typescript.svg";
import tailwindcss from "../assets/tech/tailwindcss.svg";
import figma from "../assets/tech/figma.svg";
import FastAPI from "../assets/tech/fastapi.svg";
import mediapipe from "../assets/tech/mediapipe.svg";
import scikitlearn from "../assets/tech/scikitlearn.svg";
import flutter from "../assets/tech/flutter.svg";
import firebase from "../assets/tech/firebase.svg";

type TechLogosMap = {
    [key: string]: string;
};

export const TechLogos: TechLogosMap = {
    React: react,
    TypeScript: typescript,
    tailwindcss: tailwindcss,
    figma: figma,
    FastAPI: FastAPI,
    MediaPipe: mediapipe,
    Scikitlearn: scikitlearn,
    Flutter: flutter,
    Firebase: firebase

};
