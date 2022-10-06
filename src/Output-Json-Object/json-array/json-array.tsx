import "./json.array.css"
import { analyseJsonNode } from "../json-functions/json-functions"

export function JsonArray(jsonArray : any[]) : JSX.Element {
    return (
        <span className="array">
            <span className="bracket">[</span>
            {  
                jsonArray.map((f, i) => (
                    <div className="array-item" key={i}> 
                        { analyseJsonNode(f) } 
                        { i === jsonArray.length - 1 ? undefined : "," } 
                    </div>)
                ) 
            }
            <span className="bracket">]</span>
        </span>
    )
}