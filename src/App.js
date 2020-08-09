import React, { Component } from 'react';
import './App.css';
import Auth from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from 'aws-amplify-react';
import InternalApp from './components/InternalApp/InternalApp';
//import { withAuthenticator } from 'aws-amplify-react';

Auth.configure(awsconfig);
class App extends Component {
  render() {
    
    const myTheme = {
      button: { backgroundColor: "green", borderColor: "red" }
    }

    return (
      <div className="App">
        <header className="App-header">
          <Authenticator hideDefault={false} amplifyConfig={awsconfig} theme={myTheme}>
            <InternalApp authState={this.props.authState} onStateChange={this.props.onStateChange} />
          </Authenticator>
        </header>
      </div>
    );
  }

}

export default App;
//export default withAuthenticator(App, {includeGreetings: true});
