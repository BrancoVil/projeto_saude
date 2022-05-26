import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaBuscar from "../screens/TelaBuscar";
import TelaPaciente from "../screens/TelaPaciente";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="TelaBuscar" component={TelaBuscar}/>
            <Tab.Screen name="TelaPaciente" component={TelaPaciente}/>
        </Tab.Navigator>
    )
}