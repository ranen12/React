import Welcome from "./Welcome";

interface TestProps{
  age:string;
}
function Test(props:TestProps) {
  return(
    <>
    내 나이{props.age}이 어때서
    </>
  );
}

export default Test;