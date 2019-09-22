/**
 * FirebaseRegisterLogin template
 * email: kidali.a.kevin@gmail.com
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import LoginComponent from "./templates/login";
import RegisterComponent from "./templates/register";
import WelcomeComponent from "./templates/welcome";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const SwitchNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeComponent,
    Login: LoginComponent,
    Register: RegisterComponent
  },
  {
    initialRouteName: "Welcome"
  }
);

const SwitchContainer = createAppContainer(SwitchNavigator);

const App = () => {
  return (
    <Fragment>
     <SwitchContainer />
    </Fragment>
  );
};

export default App;
