import { enToPerNum } from "../utils/utils";

const LinkBar = ({ index, link, length, error }) => {
  return (
    <div
      className={`w-full h-full font-firstFont text-shade rounded-md ${
        index % 2 === 0 ? "bg-hoverBtn" : "bg-dark"
      }`}
    >
      {link ? (
        <a
          className="block cursor-pointer w-full h-full text-[10px] text-center p-3"
          href={`${link}`}
          download
          target="_blank"
        >
          {length === 1 ? "دانلود" : `${enToPerNum(index + 1)} دانلود قسمت`}
        </a>
      ) : null}
    </div>
  );
};

export default LinkBar;
