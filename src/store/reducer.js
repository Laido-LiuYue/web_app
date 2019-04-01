import {combineReducers} from 'redux';

let counter=(state=0,action)=>{
    switch(action.type){
        case 'ADD':
            // return state+1;
            return state+1;
        case 'DEC':
            return state-1;
        case 'add_odd':
            return state+1;
        case 'add_async':
            return state+1;
        default:
            return state;
    }
}

let initValue={
    list:[1,2,3]
}
let todo=(state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState=JSON.parse(JSON.stringify(state));
            // let obj=Object.assign({},state,{a:100})
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            console.log(action.value);
            let newSta=JSON.parse(JSON.stringify(state));
            newSta.list.splice(action.value,1);
            return newSta;
        default:
            return state;
    }
}

export default combineReducers({counter,todo});