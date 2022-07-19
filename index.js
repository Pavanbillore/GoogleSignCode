/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import { Provider } from 'react-redux'; 
// import { configureStore } from "@reduxjs/toolkit";

// import WarehouseReducer from "./Screens/redux/reducer";

// const store = configureStore({
//     reducer: {
//       warehouse: WarehouseReducer,
//     },
//   });

AppRegistry.registerComponent(appName, () => App);
