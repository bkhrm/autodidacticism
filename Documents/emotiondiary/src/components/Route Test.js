import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      {/* Link 컴포넌트는 to로 연결시킴 */}
      <br />
      <Link to={"/edit"}>EDIT</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
    </>
  ); //SPA 방식, 즉 CSR되는 컴포넌트륾 만들어줄 것임. 그 컴포넌트의 이름은 link임. import 해야 사용가능.
};

export default RouteTest;
