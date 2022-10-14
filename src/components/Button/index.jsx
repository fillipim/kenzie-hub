import { Link } from "react-router-dom";

const Button = ({ tag, children, to, onClick, className, type }) => {
  return (
    <>
      {tag === "a" && (
        <Link className={className} to={to}>
          {children}
        </Link>
      )}
      {tag === "button" && (
        <button type={type} className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
