// 배경(별, 선) 컴포넌트
import { motion } from "framer-motion";

const stars = [
    { left: "5%", top: "50%" },
    { left: "20%", top: "60%" },
    { left: "35%", top: "30%" },
    { right: "50%", top: "20%" },
    { right: "30%", top: "40%" },
    { right: "20%", top: "30%" },
    { right: "5%", top: "35%" },
];

export default function BackGround() {
    return (
        <>
            <div className="pointer-events-none absolute inset-0 p-20">
                <div className="relative w-full h-[50%] mt-3">
                    {stars.map((pos, i) => (
                        <motion.span
                            key={i}
                            className="absolute text-primary text-2xl"
                            style={pos}
                            animate={{
                                opacity: [0.3, 1, 0.3], // 반짝임
                                scale: [1, 1.5, 1], // 살짝 커졌다 작아짐
                            }}
                            transition={{
                                duration: Math.random() * 2 + 1.5, // 1.5~3.5초 랜덤
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                            }}
                        >
                            *
                        </motion.span>
                    ))}
                </div>
            </div>
        </>
    );
}
