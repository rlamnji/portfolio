// 단일 프로젝트 카드 컴포넌트
import testImg from '../../../assets/notion.svg';

export default function ProjectCard() {
    return (
        <div className="flex flex-col lg:w-80 lg:h-100 border border-[#dddddd7e] p-4 rounded-[20px] shadow-xl ">
            <img src={testImg} alt="Project Thumbnail" className="lg:w-70 lg:h-50 bg-amber-600 h-auto mb-2" />
            <h3 className="text-lg font-semibold text-[#8A6E6F] bg-amber-900">Project Title</h3>
            <p className="lg:h-30 text-sm text-gray-600 bg-blue-400 overflow-auto">Project description goes here.</p>
            <div className='flex flex-row gap-2 bg-green-400'>
                <div className='bg-primary rounded-2xl text-[14px]'>REACT</div>
                <div className='bg-primary rounded-2xl text-[14px]'>REACT</div>
                <div className='bg-primary rounded-2xl text-[14px]'>REACT</div>
                <div className='bg-primary rounded-2xl text-[14px]'>REACT</div>
            </div>
        </div>
    );
}
