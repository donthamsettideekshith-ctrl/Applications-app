
function Inlinecss() {
   const container={
    color:'red',
    backgroundColor:'blue',
   };

  return (
    <div >
    <p style={{color:'white',background:'blue'}}>hi iam a developer</p>
    <p style={container}>hello is this deekshith</p>
    </div>
  );
}

export default Inlinecss;