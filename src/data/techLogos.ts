// 사용 언어 이미지와 이름 매핑
import react from '../assets/tech/react.svg';
import typescript from '../assets/tech/typescript.svg';
import tailwindcss from '../assets/tech/tailwindcss.svg';
import figma from '../assets/tech/figma.svg';

type TechLogosMap = {
  [key: string]: string;
};

export const TechLogos: TechLogosMap = {
  React: react,
  TypeScript: typescript,
  tailwindcss: tailwindcss,
  figma: figma,
};