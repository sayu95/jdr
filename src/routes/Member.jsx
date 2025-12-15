import { useContext } from "react";
import { useParams, useSearchParams } from "react-router";
import { JiwonContext } from "../context/JiwonContext";

function Member() {
  const { mid, ban } = useParams(); // {mid:?}
  const [SearchParams, setSearchParams] = useSearchParams(); //useState와 사용법이 똑같은데, queryString에 대응
  const [members] = useContext(JiwonContext); // Context로 설정한 value 어디서든 useContext로 바로 가져온다.

  console.log(SearchParams.get("hero"));
  console.log(SearchParams.get("weapon"));

  // const schMembers = members.filter((member) => member.mid == mid)[0];
  // filter는 기본적으로 여러개 찾을 때 사용, 일반적으로 1개 찾을때 써도 문제 없음
  // 정말 배열 사이즈가 크고, 1개만 찾으면 되는 상황에선 find, find를 찾으면 loop를 멈춤(break);
  const schMembers = members.find((member) => member.mid == mid);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{ban}호</h1>
      <h1>{schMembers.name}</h1>
      <h1>{schMembers.feature}</h1>
      <h1>{"특징"}</h1>
    </div>
  );
}

export default Member;
