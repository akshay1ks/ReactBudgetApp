import { take, delay, put, call } from 'redux-saga/effects';

function double(number){
    return number * 2;
}

export function* testSaga(){
    while (false) {
        console.log("starting saga"); 
        const state = yield take('TAKE_MASSAGE');
        const a = yield call(double, 2);
        console.log("call", a);
        const b = yield double(3);
        console.log("no call", b);
        console.log("finishing saga", state);
    }
}

export function* dispatchTest(){
    while(false){
        yield delay(1000);
        yield put({ type: 'TAKE_MASSAGE', payload: 1000 });
    }
}