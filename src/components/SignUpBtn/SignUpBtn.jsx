import { Link } from "react-router-dom";

const SignUpBtn = ({ imgSrc, primaryText, secondaryText, link }) => {
  return (
    <Link to={link} className="inline-block">
      <button className="btn flex py-[10px] px-6 rounded-[360px] gap-[9px] font-jakarta items-center bg-secondaryButton text-primaryColor border border-[#D3F3AA]">
        <img src={imgSrc} alt="" />
        <div className="text-start">
          <p className="text-[12px] font-bold">{primaryText}</p>
          <p className="text-2xl font-bold">{secondaryText}</p>
        </div>
      </button>
    </Link>
  );
};

export default SignUpBtn;
