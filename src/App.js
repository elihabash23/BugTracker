import React, { Component } from 'react';
import './App.css';
import Auth from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator} from 'aws-amplify-react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import InternalApp from './components/authentication/InternalApp/InternalApp';
//import { withAuthenticator } from 'aws-amplify-react';

Auth.configure(awsconfig);
class App extends Component {
  render() {
    
    // const myTheme = {
    //   button: { backgroundColor: "green", borderColor: "red" },
    //   signOutButtonIcon: {backgroundColor: "blue"}
    // }

    return (
      // <div>
      //   <header className="App-header">
      //     <div className="center">
      //       <Authenticator hideDefault={false} amplifyConfig={awsconfig} theme={myTheme}>
      //         <InternalApp authState={this.props.authState} onStateChange={this.props.onStateChange} />
      //       </Authenticator>
      //     </div>
      //   </header>
      // </div>
      <div className="center">
        <AmplifyAuthenticator>
          <div>
          <AmplifySignOut />
          <InternalApp authState={this.props.authState} onStateChange={this.props.onStateChange} />
          </div>
        </AmplifyAuthenticator>
      </div>
    );
  }

}

export default App;
//export default withAuthenticator(App, {includeGreetings: true});
