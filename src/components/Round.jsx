import "../styles/Round.css";

 const Round = (props) => {
     return(
     <div>
         <h5>{props.name}</h5>
         <img  className="pic" src="../../public/images/duck.jpg" width="60px" height="50px"/>
     </div>)
 }

export default Round;