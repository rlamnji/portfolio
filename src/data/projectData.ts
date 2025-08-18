// 프로젝트 데이터
// 썸네일 이미지, 제목, 설명, 사용기술 스택, 깃허브 링크, 노션링크, 내용
import notYet from "../assets/projects/notyet.png";
import jellFit from "../assets/projects/jellfit.png";
import smartSubway from "../assets/projects/smartSubway.png";

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    mainImg: string;
    skills: string[];
    link: string[];
    contents: string;
}

export const projectData: ProjectData[] = [
    {
        id: 1,
        title: "rlamnji portfolio",
        description:
            "React + TypeScript + tailwindcss를 사용한 나의 포트폴리오 사이트 제작",
        mainImg: notYet,
        skills: ["React", "TypeScript", "tailwindcss", "figma"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트",
    },
    {
        id: 2,
        title: "젤핏(JellFit)",
        description:
            "피트니스 트래킹 애플리케이션 (명지대학교 2025 캡스톤디자인1)",
        mainImg: jellFit,
        skills: ["React", "tailwindcss", "FastAPI", "MediaPipe", "Scikitlearn"],
        link: [
            "https://github.com/rlamnji/jellfit-ai-stretch",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "사용자의 신체 움직임을 실시간으로 감지하고 분석하여, 스트레칭이나 간단한 운동 동작의 정확도를 판단하고 피드백을 제공하는 기능을 중심으로 설계되었습니다.",
    },
    {
        id: 3,
        title: "스마트환승철",
        description: "다익스트라 알고리즘을 활용한 최소 경로 탐색 (명지대학교 2024 팀프로젝트1)",
        mainImg: smartSubway,
        skills: ["Flutter", "Firebase"],
        link: [
            "https://github.com/rlamnji/smart-subway-transfer",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트22",
    },
    {
        id: 4,
        title: "테스트 프로젝트",
        description: "테스트 설명입니다.2",
        mainImg: notYet,
        skills: ["figma"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트",
    },
    {
        id: 5,
        title: "테스트 프로젝트(2)",
        description: "테스트 설명입니다.2",
        mainImg: notYet,
        skills: ["figma"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트",
    },
];
