// 프로젝트 데이터
// 썸네일 이미지, 제목, 설명, 사용기술 스택, 깃허브 링크, 노션링크, 내용

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
        mainImg: "",
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
        mainImg: "../assets/notion.svg",
        skills: ["React", "tailwindcss", "FastAPI", "MediaPipe"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트22",
    },
    {
        id: 3,
        title: "테스트 프로젝트233",
        description: "테스트 설명입니다.2",
        mainImg: "../assets/notion.svg",
        skills: ["React", "React", "Test"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트22",
    },
    {
        id: 4,
        title: "테스트 프로젝트233",
        description: "테스트 설명입니다.2",
        mainImg: "../assets/notion.svg",
        skills: ["React", "React", "Test"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트22",
    },
    {
        id: 5,
        title: "테스트 프로젝트233",
        description: "테스트 설명입니다.2",
        mainImg: "../assets/notion.svg",
        skills: ["React", "React", "Test"],
        link: [
            "https://github.com/rlamnji/portfolio",
            "https://www.figma.com/design/hJJnOV1Zs6CLpaCs0A1L7H/portfolio?node-id=56-76&t=DCoLAvdn7ytRKFKM-0",
        ],
        contents: "테스트22",
    },
];
