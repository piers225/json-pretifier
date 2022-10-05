import "./json-object.css"
import { analyseJsonNode } from "../json-functions/json-functions";



export function JsonObject(jsonObject : { [key : string] : any }) {

    return (
        <span>
             &#123;
            { Object.keys(jsonObject).map((key, index) => (
                <div className="object-key" key={index} >
                    "{ key }" : { analyseJsonNode(jsonObject[key]) }
                </div>))  
            }
             &#125;
        </span>
    )
}