

export function JsonField(props : Number | String | Boolean) {
    if ( typeof props === "string" ) {
        return <span>"{ props }"</span>
    }
    if (typeof props === "boolean") {
        return <span>{ props ? "true" : "false" }</span>
    }
    
    return <span>{ props }</span>
    
}