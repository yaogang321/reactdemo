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
        

    render(){
        return(
            <div>
                {this.state.todoList.map(item =><ListItem item={item}/>)}
                <NewItem addItem = {this.addNewItem}/>
            </div>
        );
    }
}

export default TodoList;