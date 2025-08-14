import LinkCard from "./components/linkCard";
import testBack from "../../assets/testBackground.svg";

function LinkPage() {
    return (
        <>
            <div className="p-20">
                {/* 제목 (공통 스타일) */}
                <div className="flex flex-row justify-between items-center">
                    <p className="category-title">
                        <span className="text-[64px]">L</span>ink
                    </p>

                    <div className="flex flex-row">
                        <div className="text-primary">* What Im Skilled In</div>
                    </div>
                </div>

                {/* link 카드 */}
                <LinkCard />

                {/* 상단, 하단 아이콘 (공통 컴포넌트) */}
                <div className="flex flex-row">
                    <div className="text-primary">* What Im Skilled In</div>
                </div>
            </div>

            {/* 배경 (별, 배경선) 예시 */}
            <div className="absolute inset-0 items-center p-20">
                <img
                    src={testBack}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
}

export default LinkPage;
