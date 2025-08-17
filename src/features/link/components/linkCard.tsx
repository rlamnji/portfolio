import github from "../../../assets/github.svg";
import notion from "../../../assets/notion.svg";
import velog from "../../../assets/velog.svg";

export default function LinkCard() {
    return (
        <div className="flex flex-col mt-20 mb-40 gap-10 items-center text-center justify-center">
            <div className="font-bold text-[#997D7E] text-[30px] [letter-spacing:0.2em]">
                Thank you
            </div>
            <div className="flex flex-row bg-[#997D7E] rounded-[10px] pl-[15px] pr-[15px]">
                <span className=" text-[#ffffff] text-[24px] font-extralight [letter-spacing:0.15em]">
                    connect to
                </span>
            </div>
            <div className="flex flex-row items-center gap-7">
                <a href="https://github.com/rlamnji" target="_blank" rel="noopener noreferrer">
                    <img src={github} className="w-10" alt="GitHub" />
                </a>
                <a href="https://github.com/rlamnji" target="_blank" rel="noopener noreferrer">
                    <img src={notion} className="w-10" alt="Notion" />
                </a>
                <a href="https://velog.io/@rlamnji/posts" target="_blank" rel="noopener noreferrer">
                    <img src={velog} className="w-10" alt="Velog" />
                </a>
            </div>
            <div className="text-[#997D7E] font-extralight text-[20px] mt-30 [letter-spacing:0.15em]">
                ** rlamnji@naver.com **
            </div>
        </div>
    );
}
