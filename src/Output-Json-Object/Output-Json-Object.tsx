import React from "react";
import { analyseJsonNode } from "./json-functions/json-functions";
import "./Output-Json-Object.css"

interface OutputJsonTextJsonProperties {
    jsonValue : {} | [] | string | number | null;
}


export function OutputJsonText(props : OutputJsonTextJsonProperties) { 

    if (props.jsonValue === null) {
        return <></>;
    }

    return  (
        <div className="output-json" >
            { analyseJsonNode(props.jsonValue) }
        </div>
    );

}