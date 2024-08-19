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
                    <h3>Thinks to do</h3>
                    <div className='todo-items'>
                        <Item />
                    </div>
                </div>
                <div className='todo-section'>
                    <h3>Thinks in progress</h3>
                    <div className='todo-items'>
                        <Item />
                    </div>
                </div>
                <div className='todo-section'> 
                    <h3>Finished thinks</h3>
                    <div className='todo-items'>
                        <Item />
                    </div>
                </div>
            </div>
    </div>
    )
}

export default TodoList;