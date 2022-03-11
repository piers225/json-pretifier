import React from 'react';
import './App.css';
import { InputJsonText } from './Input-Json-Text/Input-Json-Text';
import { OutputJsonText } from './Output-Json-Object/Output-Json-Object';

class App extends React.Component<{ }, { json : object }> { 
  constructor(props : {}) {
    super(props) ;

    this.state = {
      json : {}
    }
  }

  jsonChange(newJson : {}) {
    this.setState({ json : newJson});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Parse Json Strings
        </header>
        <section className="App-Body">
          <InputJsonText onJsonChange={(json) => this.jsonChange(json)} />

          <OutputJsonText jsonValue={this.state.json} />
        </section>
      </div>
    );
  }
}

export default App;