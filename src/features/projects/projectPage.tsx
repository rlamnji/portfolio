import GridCard from "./components/gridCard";
import ViewType from "./components/viewType";

import { useState} from "react";
//import { useNavigate } from "react-router-dom";
import { projectData } from "../../data/projectData";
import GridModal from "./components/gridModal";
//import { useContainerScrollNavigateBi } from "../../common/hook/useScrollNavigate";

function ProjectPage() {
    const [data] = useState(projectData);
    const [viewType, setViewType] = useState("grid");
    const [id, setID] = useState<number | null>(null);
    const [modal, setModal] = useState(false);

    return (
        <>
      <div
        className={`${modal ? "blur-sm" : ""} h-100vh overflow-y-auto`}
      >
                <div className="p-20 ">
                    {/* 제목 (공통 스타일) */}
                    <div className="flex flex-row justify-between items-center">
                        <p className="category-title">
                            <span className="text-[64px]">P</span>roject
                        </p>

                        <div className="flex flex-row">
                            <div className="text-primary">
                                * What Im Skilled In
                            </div>

                        </div>
                    </div>

                    {/* 프로젝트 보기형식 */}
                    <ViewType setViewType={setViewType} viewType={viewType} />
                </div>

                {/* 프로젝트 카드 */}
                <div className="justify-center items-center flex flex-col">
                    {viewType === "grid" && (
                        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-30 gap-y-10">
                            {data.map((data) => (
                                <GridCard
                                    key={data.id}
                                    setID={setID}
                                    data={data}
                                    setModal={setModal}
                                />
                            ))}
                        </div>
                    )}

                    {viewType === "carousel" && (
                        <div className="flex flex-cols-3 gap-x-30 gap-y-10">
                            {/*  {data.map((data) => (
                            <ProjectCard key={data.id} data={data} />
                        ))}*/}
                            carousel
                        </div>
                    )}
                </div>
            </div>

            {/* 모달창 */}
            {modal && (
                <div className="fixed inset-0 shadow-xl flex justify-center items-center">
                    <GridModal
                        data={data.find((item) => item.id === id)!}
                        setModal={setModal}
                    />
                </div>
            )}
        </>
    );
}

export default ProjectPage;
