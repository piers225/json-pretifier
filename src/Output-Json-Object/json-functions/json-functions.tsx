import { JsonArray } from "../json-array/json-array"
import { JsonField } from "../json-field/json-Field";
import { JsonNull } from "../json-null/json-null";
import { JsonObject } from "../json-object/json-object"


export function analyseJsonNode(jsonNode : any) : JSX.Element {

    if ( Array.isArray(jsonNode)) {
        return JsonArray(jsonNode);
    }
    if ( jsonNode instanceof Object ) {
        return JsonObject(jsonNode);
    }
    if ( typeof jsonNode === "string" || typeof jsonNode === "boolean"  || typeof jsonNode === "number" ) {
        return JsonField(jsonNode )
    }
    if ( jsonNode === null ) {
        return JsonNull()
    }

    throw 'Unknown type of json node ' + typeof jsonNode
}