// 프로젝트 보기형식 선택 컴포넌트

import type { ViewTypeKey } from "../projectPage";

type ViewTypeProps = {
  viewType: ViewTypeKey;
  setViewType: React.Dispatch<React.SetStateAction<ViewTypeKey>>;
};

export default function ViewType({ setViewType, viewType }: ViewTypeProps) {
    const onClick = (type: ViewTypeKey) => {
        setViewType(type);
        console.log(type);
    };

    return (
        <div className="flex flex-row items-center gap-4 mt-5">
            <div
                className={`flex justify-center items-center cursor-pointer text-[13px] p-2 rounded-4xl w-20 h-8 ${viewType === "grid" ? "bg-[#C7B6B7] text-white" : "bg-white text-[#C7B6B7] border color-[#C7B6B7]"}`}
                onClick={() => onClick("grid")}
            >
                Grid
            </div>
            <div
                className={`flex justify-center items-center cursor-pointer border color-[#C7B6B7] text-[13px] p-2 rounded-4xl w-20 h-8 ${viewType === "carousel" ? "bg-[#C7B6B7] text-white" : "bg-white text-[#C7B6B7] border color-[#C7B6B7]"}`}
                onClick={() => onClick("carousel")}
            >
                Carousel
            </div>
        </div>
    );
}
