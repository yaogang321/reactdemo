import React, {Component} from 'react';
import './ListItem.css';



const ListItem = (props) => {
    const item = props.item;

//更改数据状态
getChangecontent = (changecontent) => {
    props.changeDone(changecontent)
}

    if(item.done){
        return <p><button className="done-item">{item.content}</button></p>
    }else{
        return <p><button className="todo-item" onClick= {this.getChangecontent(item.done)}>{item.content}</button></p>
    }
}

export default ListItem;