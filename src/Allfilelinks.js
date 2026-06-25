import ConditionalComponents from "./ConditionalComponent";
import Cssmoduls from "./Cssmoduls";
import Externalcss from "./Externalcss";
import Inlinecss from "./Inlinecss";
import Styledcomponents from "./Styledcomponents";
import TernaryOperator from "./TernaryOperator";
import Three from "./Three";

function Allfilelinks(){
    return(
        <div>
              <h1>hlo this is props example</h1>
      <Three firstname="deekshith" lastname="donthamsetti"/>
      <ConditionalComponents/>
      <TernaryOperator/>
      <Inlinecss/>
      <Externalcss/>
      <Cssmoduls/>
      <Styledcomponents/>
        </div>
    );
}
export default Allfilelinks;