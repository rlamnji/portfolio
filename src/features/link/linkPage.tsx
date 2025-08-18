import BackGround from "./components/backGround";
import LinkCard from "./components/linkCard";
import LineBar from "../../common/components/lineBar";
//import testBack from "../../assets/testBackground.svg";
//import { useContainerScrollNavigateBi } from "../../common/hook/useScrollNavigate";
//import { useRef } from "react";

function LinkPage() {

    return (
        <div className="h-screen">
            <div className="pl-20 pr-20 pt-15 pb-10">
                {/* 제목 (공통 스타일) */}
                <div className="flex flex-row justify-between items-center">
                    <p className="category-title">
                        <span className="text-[64px]">L</span>ink
                    </p>

                    <div className="flex flex-row items-center w-96 gap-2">
                        <LineBar msg="* Linked In" />
                    </div>
                </div>

                {/* link 카드 */}
                <LinkCard />

                {/* 상단, 하단 아이콘 (공통 컴포넌트) */}
                <div className="flex flex-row items-center w-96 gap-2 scale-x-[-1]">
                    <LineBar msg="* Linked In" />
                </div>
            </div>

            {/* 배경 (별, 배경선) */}
            <BackGround />
        </div>
    );
}

export default LinkPage;
