// 한/영/일 드롭다운 컴포넌트
import "./dropDown.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLang, setIsLang] = useState("En");
  return (
    <div>
        <div className="button-wrap" onClick={() => setIsOpen(!isOpen)}>
            <button className="button">
                <span className="w-20">{isLang} <a className="text-[10px]"> ▼</a></span>
            </button>
            <div className="button-shadow"></div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, scaleY: 0.9, y: -4 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0.95, y: -4 }}
              transition={{ duration: 0.18, ease: [0.2, 0.7, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="mt-2 flex flex-col items-center justify-center gap-1 bg-[#F7F4F4] text-[#A69494] text-[13px] w-20 rounded-xl py-2 shadow"
            >
              <li className="cursor-pointer" onClick={() => {setIsLang("En"); setIsOpen(false);}}>En</li>
              <div className="h-px w-12 bg-white/70" />
              <li className="cursor-pointer" onClick={() => {setIsLang("한"); setIsOpen(false);}}>한</li>
              <div className="h-px w-12 bg-white/70" />
              <li className="cursor-pointer" onClick={() => {setIsLang("あ"); setIsOpen(false);}}>あ</li>
            </motion.ul>
          )}
        </AnimatePresence>
    </div>

  );
}
