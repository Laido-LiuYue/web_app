import React, { Component } from 'react';
// import store from './store';
import {add_todo} from './actions/redux.js';
import {del_todo} from './actions/redux.js';
import {connect} from 'react-redux';

let TodoList = ({dispatch,list})=>{
    let handleAdd = (e) =>{
        if(e.keyCode===13){
            dispatch( add_todo(e.target.value) );
        }
    }
    let handleDel = (index) =>{
        dispatch( del_todo(index) );
        console.log(index);
    }
    return (
        <div>
            <input type="text" onKeyDown={handleAdd} autoFocus />
            <button>请按回车键</button>
            <br/>
            <br/>
            <ul>
                {
                    list.map((item,index)=>(
                        <li onClick={()=>handleDel(index)} key={index}>
                        {item}
                        <button style={{marginLeft:'50px'}}>删除</button>
                        </li>  
                    ))
                }
            </ul>
        </div>
    );
}
let mapStateToProps = (state)=>{
    return{
         list:state
    }
}
export default connect(mapStateToProps)(TodoList);


// class TodoList extends Component {
//     constructor(){
//         super();
//         // this.state={
//         //     list:store.getState().list
//         // };
//         // store.subscribe(()=>{
//         //     this.setState({
//         //         list:store.getState().list
//         //     })
//         // })
//     }
//     handleAdd=(e)=>{
//         if(e.keyCode===13){
//             store.dispatch(add_todo(e.target.value));
//         }
//     }
//     // handleDel=(index,e)=>{
//     //     // console.log(index);
//     //     store.dispatch({
//     //         type:'del_item',
//     //         value:index
//     //     })
//     render() {
//         let {list} = this.props;
//         return (
//             <div>
//                 <input type="text" onKeyDown={this.handleAdd} autoFocus />
//                 <button>请按回车键</button>
//                 <br/>
//                 <br/>
//                 <ul>
//                     {
//                         list.map((item,index)=>(
//                             <li key={index}>{item}<button onClick={this.handleDel.bind(this,index)} style={{marginLeft:'30px'}}>删除</button></li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// 
// }