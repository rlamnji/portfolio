import BackGround from "./components/backGround";
import LinkCard from "./components/linkCard";
import LineBar from "../../common/components/lineBar";
import DropDown from "../../common/components/dropDown";

export default function LinkPage() {
    return (
        <div className="h-screen overflow-y-scroll">
            {/* 상단바 */}
            <div className="fixed top-4 right-8 z-50">
                <DropDown />
            </div>

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

                {/* 하단 아이콘 */}
                <div className="flex flex-row items-center w-96 gap-2 scale-x-[-1]">
                    <LineBar msg="* Linked In" />
                </div>
            </div>

            {/* 배경 */}
            <BackGround />
        </div>
    );
}
