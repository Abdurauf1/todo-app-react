import { ReactComponent as DeleteIcon } from './icons/delete.svg'
import ListGroup from 'react-bootstrap/ListGroup'
import { Button } from 'react-bootstrap'

function Todo({ text, todos, todo, setTodos }) {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    return (
        <div className='d-flex w-100px my-1'>
            <ListGroup.Item as='li'>
                {text}
            </ListGroup.Item>
            <Button  style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} variant='danger' onClick={deleteHandler}>
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default Todo;
