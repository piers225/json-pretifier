import React from 'react';
import './Input-Json-Text.css';

interface InputJsonTextProps {
    onJsonChange : (json : {}) => void ;
}

export class InputJsonText extends React.Component<InputJsonTextProps, { valid : boolean }> { 

        constructor(props : InputJsonTextProps) {
            super(props);

            this.state = {
                valid : true
            }

        }

        properties : {
            json : string,
            escaped : boolean 
        } = {
            json : '',
            escaped : false
        };

        private jsonChange(str : string) {
            this.properties.json = str;
            this.parse();
        }

        private escapedChange( escaped : string) {
            this.properties.escaped = escaped === 'on';
            this.parse();
        }

        private parse () {
            if (!this.properties.json) {
                this.setState({ valid : false});
                return;
            }
            let json = this.properties.json;

            if (this.properties.escaped) {
                json = json.replace(/\\"/g, "\"")
            }
            
            try {
                const jsonObject = JSON.parse(json);
                this.setState({ valid : true});
                this.props.onJsonChange(jsonObject);
            }
            catch(e )
            {
                console.error(e);
                this.setState({ valid : false});
            }
        }

        render() {
            return (
                <div>
                    <textarea name="Text1" cols={40} rows={5} onChange={(event) => this.jsonChange(event.target.value) } defaultValue={''} ></textarea>
                    <br />
                    Remove Escaped string <input type="checkbox" value="on" onChange={(event) => this.escapedChange(event.target.value)}  ></input>
                    <br />
                    { this.state.valid ? <span></span> : <span className="error">Invalid Json Entered</span> }
                </div>
            )
        }
}