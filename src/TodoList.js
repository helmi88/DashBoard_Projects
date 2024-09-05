import './todolist.css';
import Item from './Todolist/Item';

function TodoList() {

    var handleitems = () => {
        
    }

    return (
    <div className='todo-container'>
            <h1 className='todo-entete'>Container for the project Todo Lists</h1>
            <div className='todo-body'>
                <div className='todo-section'>
                    <h3>To Do</h3>
                    <div className='todo-items'>
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
                <div className='todo-section'>
                    <h3>In Progress</h3>
                    <div className='todo-items'>
                        <Item />
                    </div>
                </div>
                <div className='todo-section'> 
                    <h3>Finished</h3>
                    <div className='todo-items'>
                        <Item />
                    </div>
                </div>
            </div>
    </div>
    )
}

export default TodoList;