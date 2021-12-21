import { fork, call, put, takeLatest, join, cancel } from "redux-saga/effects";
import homeTypes from "../types/home";
import home from "../actions/home";
import axios from "../../services/axios";

function* LoginUser({ payload }) {
    debugger
    try {
        if (payload.email && payload.password) {
            const res = yield call(axios.request, {
                method: "POST",
                url: `/S3Users/login?include=["user"]`,
                data: payload

            });
            localStorage.setItem('user', JSON.stringify(res));
            yield put(home.LoginUserSuccess(res))
        }
    }
    catch (err) {
        console.log("err", err.message)
        yield put(home.LoginError(err.message))
    }
}


function* homeSaga() {
    yield takeLatest(homeTypes.LOGIN_USER, LoginUser);
    // yield takeLatest(authTypes.LOGOUT, Logout)
}

export default homeSaga;
