import React, {Component} from 'react';
import ListItem from "./ListItem";
import NewItem from "./NewItem";

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            todoList : [
                {content:'play game',done:true},
                {content:'learn math',done:false}
            ]
        }
    }

    //向todoList添加新条目
    addNewItem = (newItemContent) => {
        const newList =[...this.state.todoList,{content:newItemContent,done:false}];
        //"..."可用于数组合并
        this.setState({
            todoList:newList
        })
    }
        
    //点击更改完成状态
    changeDone = (changeitemContent) =>{
        const changeList = this.state.todoList.map(item =>{
            if(item.content == changeitemContent)
                return {content:item.content,done:true}
            else{
                return {content:item.content,done:item.done}
            } 
        })
        this.setState({
            todoList:changeList
        })
    }

    render(){
        return(
            <div>
                {this.state.todoList.map(item =><ListItem item={item} changeDone={this.changeDone}/>)}
                <NewItem addItem = {this.addNewItem}/>
            </div>
        );
    }
}

export default TodoList;