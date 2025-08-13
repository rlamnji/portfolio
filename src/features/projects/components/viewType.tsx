// 프로젝트 보기형식 선택 컴포넌트
import React, { useState } from 'react';

export default function ViewType() {

    const [, setViewType] = useState('grid');

    const onClick = (type: string) =>{
        setViewType(type);
    }

    return (
        <div className="flex flex-row gap-4">
            <button className="cursor-pointer bg-[#C7B6B7] text-white p-2 rounded-4xl" 
            onClick={() => onClick('grid')}
            >Grid View</button>
            <button className="cursor-pointer border color-[#C7B6B7] bg-white text-[#C7B6B7] p-2 rounded-4xl" onClick={() => onClick('carousel')}>carousel</button>
        </div>
    );
}
