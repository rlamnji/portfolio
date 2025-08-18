import github from "../../../assets/github.svg";
import notion from "../../../assets/notion.svg";
import velog from "../../../assets/velog.svg";

type SocialItem = {
  name: "GitHub" | "Notion" | "Velog";
  href: string;
  icon: string; 
  alt: string;
};

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/rlamnji", icon: github, alt: "GitHub" },
  { name: "Notion", href: "https://www.notion.so/rlamnji", icon: notion, alt: "Notion" },
  { name: "Velog",  href: "https://velog.io/@rlamnji/posts", icon: velog,  alt: "Velog" },
] satisfies ReadonlyArray<SocialItem>;

const EMAIL = "rlamnji@naver.com" as const;

export default function LinkCard() {
  return (
    <div className="flex flex-col mt-20 mb-40 gap-10 items-center text-center justify-center">
      <div className="font-bold text-[#997D7E] text-[30px] [letter-spacing:0.2em]">
        Thank you
      </div>

      <div className="flex flex-row bg-[#997D7E] rounded-[10px] pl-[15px] pr-[15px]">
        <span className="text-white text-[24px] font-extralight [letter-spacing:0.15em]">
          connect to
        </span>
      </div>

      <div className="flex flex-row items-center gap-7">
        {SOCIALS.map(({ name, href, icon, alt }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
          >
            <img src={icon} className="w-10" alt={alt} />
          </a>
        ))}
      </div>

      <div className="text-[#997D7E] font-extralight text-[20px] mt-30 [letter-spacing:0.15em]">
        <span>** {EMAIL} **</span>
      </div>
    </div>
  );
}
