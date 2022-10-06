import "./json-object.css"
import { analyseJsonNode } from "../json-functions/json-functions";



export function JsonObject(jsonObject : { [key : string] : any }) {

    return (
        <span className="object">
            <span className="bracket">&#123;</span>
            { Object.keys(jsonObject).map((key, index) => (
                <div className="object-key" key={index} >
                    <span className="object-key-name">"{ key }"</span> : { analyseJsonNode(jsonObject[key]) }
                </div>))  
            }
            <span className="bracket">&#125;</span>
        </span>
    )
}