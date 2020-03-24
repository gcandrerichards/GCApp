import { createAppContainer  } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';

import Welcome from "../screens/Welcome";
import Appointment from "../screens/Appointment";
import FormComplete from "../screens/FormComplete";

const AppNavigator = createStackNavigator({
    Welcome,
    Appointment,
    FormComplete
})

export default createAppContainer(AppNavigator)
