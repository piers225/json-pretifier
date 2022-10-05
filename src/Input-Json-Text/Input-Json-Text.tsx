import React from 'react';
import './Input-Json-Text.css';

interface InputJsonTextProps {
    onJsonChange : (json : {} | [] | string | number | boolean | null) => void ;
}

type InputJsonTextState = { valid : true } | { valid : false, error : Error };

export class InputJsonText extends React.Component<InputJsonTextProps, InputJsonTextState> { 

        constructor(props : InputJsonTextProps) {
            super(props);

            this.state = {
                valid : true
            }

        }
      
        private jsonChange (json : string) {
            
            try {
                const jsonObject = JSON.parse(json);
                this.setState({ valid : true});
                this.props.onJsonChange(jsonObject);
            }
            catch(e : unknown)
            {
                console.error(e);
                if (e instanceof Error ) {
                    this.setState({ 
                        valid : false,
                        error : e
                    });
                }
                this.props.onJsonChange(null);
            }
        }

        render() {
            return (
                <div className="input-text">
                    <div className='form'>
                        <p>Enter Json to Format</p>
                        <textarea name="inputJsonText" cols={40} rows={5} onChange={(event) => this.jsonChange(event.target.value) } defaultValue={''} ></textarea>
                        <p>{ this.state.valid ? undefined : <span className="error">Invalid Json Entered : { this.state.error.message }</span> }</p>
                    </div>
                </div>
            )
        }
}