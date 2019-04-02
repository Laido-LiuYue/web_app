import{ ADD_TODO_ITEM,DEL_TODO_ITEM } from './ActionTypes';
//import *  as types from './ActionTypes';或者引入所有写星号,别名为types
export const add_todo = (value) => ({type:ADD_TODO_ITEM,value:value})
export const del_todo = (index) => ({type:DEL_TODO_ITEM,index:index})