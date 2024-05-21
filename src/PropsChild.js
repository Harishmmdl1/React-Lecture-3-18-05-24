import React from "react";
import PropsParent from "./PropsParent";

// Using Class Component


// class PropsChild extends React.Component{
//     constructor(){
//         super();
  
//     }
//     render(){
//         return(
//             <div>
//                 <h1 style={{textAlign:"center"}}> Using Props shiwing Institute Details </h1>
//                 <h2> My Institute Details </h2>
//                 <p> Institute Name - {this.props.name}</p>
//                 <p> Institute Address - {this.props.add}</p>
//                 <p> Institute Contact Number - {this.props.mob}</p>
//             </div>
//         )

//     }
// }



// Using Functional Component


// const PropsChild = (props) => {

//     return (
//         <div>
//             <h1 style={{textAlign:"center"}}> Using Props shiwing Institute Details </h1>
//             <h2> My Institute Details </h2>
//             <p> Institute Name - {props.name}</p>
//             <p> Institute Address - {props.add}</p>
//             <p> Institute Contact Number - {props.mob}</p>
//         </div>
//     )

// }

// With Destructuring

// const PropsChild = ({name,add,...rest}) => {
const PropsChild = (props) => {

    const {name,add,...rest} = props
    return (
        <div>
            <h1 style={{textAlign:"center"}}> Using Props shiwing Institute Details </h1>
            <h2> My Institute Details </h2>
            <p> Institute Name - {name}</p>
            <p> Institute Address - {add}</p>
            <p> Institute Contact Number - {rest.mob}</p>
        </div>
    )

}




export default PropsChild;