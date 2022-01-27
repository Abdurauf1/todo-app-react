import { Button, FormControl } from 'react-bootstrap';

function Form({ setInputText, inputText, setTodos, todos }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (todos.length > 9) {
            alert('You can not add tasks more than 10 tasks');
        } else {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    id: Math.random() * 1000
                }
            ])
        }
        setInputText('')
    }
    return (
        <>
            <form
                onSubmit={submitTodoHandler}
                className='d-flex mb-3'
                style={{width: '568px'}}
            >
                <FormControl
                    style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                    required
                    value={inputText}
                    onChange={inputTextHandler}
                    placeholder='Add a task'
                    type="text"
                    className='mx-auto input'
                />
                <Button type='submit' style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>Add</Button>
            </form>
        </>
    )
}

export default Form;