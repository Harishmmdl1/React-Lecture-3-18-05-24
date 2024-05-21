import React from "react";
import PropsChild from "./PropsChild";


class PropsParent extends React.Component{
    constructor(){
        super();

        // const InsName = "10K Coders..";
        // const Add = "KPHB Colony";
        // const Mob = 8149829116;

  

    }
    render(){
        return(
            <div>
                <PropsChild name={"10K Coders.."} add={"KPHB Colony"} mob={8149829116} />
            </div>
        )

    }
}

export default PropsParent;