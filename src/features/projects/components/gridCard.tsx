// 단일 프로젝트 카드 컴포넌트
import testImg from "../../../assets/notion.svg";
import testLogo from "../../../assets/react.svg";
import type { ProjectData } from "../../../data/projectData";

export default function ProjectCard({
    data,
    setModal,
    setID,
}: {
    data: ProjectData;
    setModal: (value: boolean) => void;
    setID: (id: number) => void;
}) {
    const { title, description, skills } = data;

    const onClick = (type: boolean) => {
        setModal(type);
        // 모달을 열 때 선택된 프로젝트의 ID를 전달
        setID(data.id);
        console.log(type);
    };

    return (
        <div
            className="flex flex-col w-80 h-100 max-md:w-60 max-md:h-80 border border-[#dddddd7e] p-4 rounded-[20px] shadow-xl cursor-pointer"
            onClick={() => onClick(true)}
        >
            <img
                src={testImg}
                alt="Project Thumbnail"
                className="w-80 h-50 max-md:h-40 border border-[#dddddd7e] rounded-xl mb-2"
            />

            {/* 프로젝트명 + 설명 */}
            <h3 className="text-lg font-semibold text-project-title p-2">
                {title}
            </h3>
            <p className="h-30 max-md:h-20 text-sm text-project-content overflow-auto pl-2 pr-2 mb-2">
                {description}
            </p>

            {/* 사용기술 스택 */}
            {/* 2개 이상이면 상위 2개만 노출 */}
            {/* 나머지는 갯수로 노출 */}
            <div className="flex flex-row gap-2 items-center">
                {skills.slice(0, 3).map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center p-2 h-7 bg-[#5F5F5F] rounded-full text-white"
                    >
                        <img
                            src={testLogo}
                            alt="Skill Logo"
                            className="w-4 h-4 mr-1"
                        />
                        <span className="text-white text-[14px] font-light">
                            {skill}
                        </span>
                    </div>
                ))}

                {skills.length > 3 && (
                    <div className="flex items-center justify-center w-7 h-7 bg-[#5F5F5F] rounded-full text-white text-[14px] font-light">
                        +{skills.length - 3}
                    </div>
                )}
            </div>
        </div>
    );
}
