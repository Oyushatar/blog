import Link from "next/link";
import { useRouter } from "next/navigation";
import Parent from "@/mrParent";
const Go = ({ pass }) => {
  const { social_image } = pass;
  const { name } = pass;
  const { description } = pass;
  const { id } = pass;
  const router = useRouter();
  const redirect = () => {
    router.push(`${id}`);
  };
  return (
    <div onClick={() => redirect()} className="biggestContainer">
      <div>
        <img className="picture" src={social_image} />
        <Link href={`http://localhost:3001/${pass.url}`}>
          <button className="button">Technolygy</button>
        </Link>
        <div>{description}</div>
        <div className="littleContainer">
          <img className="chad" src={pass.user.profile_image} />
          <div className="name">{pass.user.name}</div>
        </div>
      </div>
    </div>
  );
};
export default Go;
