import React from "react";
import "./Output-Json-Object.css"

interface OutputJsonTextJson {
    jsonValue : object;
}

export class OutputJsonText extends React.Component<OutputJsonTextJson, {  }> { 
    constructor(props : OutputJsonTextJson) {
        super(props);
    }

    render() {
        return  (
        <div className="output-json" >
            <pre>{JSON.stringify(this.props.jsonValue, null, 2) }</pre>
        </div>
        );
    }
}