// 그리드 선택 모달창
import type { ProjectData } from "../../../data/projectData";

import github from "../../../assets/github.svg";
import notion from "../../../assets/notion.svg";
import testLogo from "../../../assets/react.svg";

export default function GridModal({
    data,
    setModal,
}: {
    data: ProjectData;
    setModal: (value: boolean) => void;
}) {
    const { title, description, skills, contents } = data;

    return (
        <div className="w-180 h-200 border border-gray-200 bg-white p-6 rounded-xl shadow-xl shadow-[#B4A9A9]">
            <div className="w-10 ml-160">
            <button
                className="cursor-pointer bg-primary rounded-full w-6 h-6 text-white"
                onClick={() => setModal(false)}
            >
                X
            </button>
            </div>


            <div className="flex flex-row justify-between pl-5 pr-5 pt-3 items-center">
                <div className="flex flex-col ">
                    <div className="flex flex-row justify-between items-center gap-2 mb-3">
                        <div className="text-[28px] font-semibold text-primary">
                            {title}
                        </div>
                        <div className="flex flex-row w-15 gap-x-2 items-center">
                            <div>
                                <img src={github} />
                            </div>
                            <div>
                                <img src={notion} />
                            </div>
                        </div>
                    </div>

                    <span className="text-[14px] text-project-content mt-4 mb-3 w-80 h-10 overflow-auto">
                        {description}
                    </span>

                    <div className="grid gap-2 grid-cols-4 mt-4 w-80">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center w-18 h-7 bg-[#5F5F5F] rounded-full text-white"
                            >
                                <img
                                    src={testLogo}
                                    alt="Skill Logo"
                                    className="w-4 h-4 mr-1"
                                />
                                <span className="text-white text-[14px]">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-60 h-60 bg-gray-200">test imgg</div>
            </div>

            {/* 여기에 프로젝트 상세 내용 추가 */}
            <div className="w-full h-115 border border-gray-200 rounded-xl overflow-auto mt-3 p-4">{contents}</div>
        </div>
    );
}
