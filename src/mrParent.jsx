import Link from "next/link";
import { useRouter } from "next/navigation";
const Parent = ({ children }) => {
  const home = useRouter();
  return (
    <div className="hello">
      <div className="footer">
        <button onClick={() => home.push(`/`)} className="btn">
          Home
        </button>
        <button onClick={() => home.push(`/post`)} className="btn">
          addPost
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Parent;
