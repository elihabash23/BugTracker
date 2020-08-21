import React, { Component } from 'react';
import './App.css';
import Auth from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import AddBug from './components/AddBug/AddBug';
import BugTable from './components/BugTable/BugTable';

Auth.configure(awsconfig);
class App extends Component {

  render() {

    const marginTop = {
      marginTop: "20px"
    }

    return (
      <Router>
         <AmplifyAuthenticator>
          <AmplifySignOut />
          <NavigationBar />
          <Container>
            <Row>
              <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/add" exact component={AddBug} />
                <Route path="/table" exact component={BugTable} />
              </Switch>
              </Col>
            </Row>
          </Container>
          {/* <InternalApp /> */}
          <Footer />
        </AmplifyAuthenticator>
      </Router>
    );
  }

}

export default App;
//export default withAuthenticator(App, {includeGreetings: true});
