import { useContext } from "react";
import { JiwonContext } from "../context/JiwonContext";

function SideBar() {
  const [members, setMembers] = useContext(JiwonContext);
  console.log("체크 : ", members);
  return (
    <div className="sidebar">
      <ul>
        {members.map((member) => (
          <li key={member.mid}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
