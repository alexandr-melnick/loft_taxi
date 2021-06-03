import { combineReducers } from "redux";
import { auth } from "./auth";
import { register } from "./register"
import { addressesList } from "./addressesList"
import { route } from "./route"

export default combineReducers({ auth, register, addressesList, route });
