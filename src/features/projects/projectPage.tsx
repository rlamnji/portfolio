import ProjectCard from "./components/projectCard";
import ViewType from "./components/viewType";

function ProjectPage() {
    return (
        <div className="p-20">
            {/* 제목 (공통 스타일) */}
            <div className="flex flex-row justify-between items-center">
                <p className="category-title">
                    <span className="text-[64px]">P</span>roject
                </p>

                <div className="flex flex-row">
                    <div className="text-primary">* What Im Skilled In</div>
                </div>
            </div>

            <ViewType/>

            <ProjectCard/>
        </div>
    );
}

export default ProjectPage;
