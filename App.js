/**
 * FirebaseRegisterLogin template
 * email: kidali.a.kevin@gmail.com
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import LoginComponent from "./templates/login";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const SwitchNavigator = createSwitchNavigator(
  {
    Login: LoginComponent
  },
  {
    initialRouteName: "Login"
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
