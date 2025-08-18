// 캐러셀 프로젝트 컴포넌트
// 1. 캐러셀 라이브러리를 피그마 디자인에 맞게 커스텀한다
// 2. center에 있는 캐러셀만 클릭가능, 클릭 시 상세 컴포넌트로 갈 수 있도록 한다.(react-scroll)
// 클릭 시 상세 컴포넌트로 슬라이드가 안 된다.. 왜지

import { useState, type SetStateAction } from "react";
import { projectData, type ProjectData } from "../../../data/projectData";
import { TechLogos } from "../../../data/techLogos";

import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Element } from "react-scroll";

// 캐러셀 카드 컴포넌트(상세 내용)
// id 값으로 해당 프로젝트의 상세 내용을 보여주는 컴포넌트
const CarouselContent = ({ data }: { data: ProjectData }) => {
    return (
        <div className="w-screen h-screen p-20">
            {/* 배너 영역 */}
            <div
                className="w-full overflow-hidden rounded-xl border border-gray-200 mb-5
                        aspect-[21/6] max-md:aspect-[16/9]"
            >
                <img
                    src={data.mainImg}
                    alt={data.title ?? "project banner"}
                    className="w-full h-full object-cover object-[center_30%] block"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-row items-center gap-5 mt-10 mb-4 max-md:flex-col max-md:items-start">
                <div className="text-[#8A6E6F] text-[48px] font-bold">
                    {data.title}
                </div>
                <div className="text-[#8C8C8C] text-[20px]">
                    {data.description}
                </div>
            </div>

            <div className="border border-gray-200 h-[500px] rounded-xl p-10 text-[#8C8C8C]">
                {data.contents}
            </div>
        </div>
    );
};

// 캐러셀 카드 컴포넌트
export default function CarouselCard() {
    const [data] = useState(projectData);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const settings: Settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        // 기본(대형 화면)
        afterChange: (index: SetStateAction<number>) =>
            setCurrentSlideIndex(index),
        responsive: [
            // 대형
            { breakpoint: 1920, settings: { centerPadding: "200px" } },
            // 노트북
            { breakpoint: 1536, settings: { centerPadding: "90px" } },
            // 태블릿 세로
            {
                breakpoint: 820,
                settings: { slidesToShow: 1, centerPadding: "72px" },
            },
            // 모바일 centerMode 끔
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <>
            <div className="slider-container">
                {/* 현재 i값 카드와 나머지 카드의 스타일을 다르게 한다. */}
                <Slider
                    {...settings}
                    className="flex justify-center items-center"
                >
                    {data.map((item, i) => (
                        <div key={i}>
                            <div className="flex flex-row justify-center items-center mt-10">
                                <div
                                    className={`flex items-center h-[700px] mb-5 p-10 ${i === currentSlideIndex ? "z-10 cursor-pointer" : "opacity-40"}`} // 현재 카드에만 z-index와 투명도 적용
                                >
                                    <div
                                        className={`border border-gray-200 w-[300px] h-[450px] bg-white shadow-xl rounded-2xl flex flex-col p-6 
                                            ${i === currentSlideIndex ? "scale-120 w-[430px] h-[500px] hover:scale-125 transition-transform duration-300 ease-in-out" : ""}`}
                                        onClick={() => {
                                            console.log(i);
                                        }}
                                    >
                                        <div className="flex justify-center">
                                            {i === currentSlideIndex ? (
                                                <img
                                                    src={item.mainImg}
                                                    className="border w-90 h-65 rounded-xl border-gray-200 mb-5"
                                                    alt="test"
                                                />
                                            ) : (
                                                <div className="w-60 h-60 border border-white rounded-xl mb-5"></div>
                                            )}
                                        </div>
                                        <h2
                                            className={`text-[20px] text-[#8A6E6F] font-bold mb-2 ${i === currentSlideIndex ? "text-[24px]" : " "}`}
                                        >
                                            {item.title}
                                        </h2>
                                        <span
                                            className={`h-30 overflow-auto text-[14px] text-[#8C8C8C] ${i === currentSlideIndex ? "text-[16px]" : " "}`}
                                        >
                                            {item.description}
                                        </span>

                                        <div className="flex flex-row items-center mt-3">
                                            {item.skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-row w-10 h-10 items-center justify-center"
                                                >
                                                    <img
                                                        src={TechLogos[skill]}
                                                        alt="Skill Logo"
                                                        className="w-7 h-7 pointer-cursor hover:scale-120 transition-transform duration-200"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <Element
                name="cc"
                className="flex justify-center items-center mt-[200px]"
            >
                <CarouselContent data={data[currentSlideIndex]} />
            </Element>
        </>
    );
}
