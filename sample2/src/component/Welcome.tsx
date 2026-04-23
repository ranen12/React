interface WelcomeProps{
    name:string;
}
function Welcome(props:WelcomeProps) {
  return(
      <>
        <h1>반갑다 {props.name}</h1>
          
      </>
    );
  }

export default Welcome;