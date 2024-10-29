import Link from "next/link";
const Parent = ({ children }) => {
  return (
    <div className="hello">
      <div className="footer">
        <Link href={`http://localhost:3000/`}>
          <button className="btn">Home</button>
        </Link>
        <Link href={`http://localhost:3000/post`}>
          <button className="btn">addPost</button>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Parent;
