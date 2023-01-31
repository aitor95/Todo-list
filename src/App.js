import './App.css';
import { Divider } from './styles/Divider';
import { Container } from './styles/Container';
import { List } from './styles/List';
import { Input } from './styles/Input';
import { Form } from './styles/Form'
import { FlexLi } from './styles/FlexLi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function App(props) {

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState(props.tasks)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskToAdd = {
      id: tasks.length + 1,
      description: newTask
    }
    console.log(newTaskToAdd)
    setTasks([...tasks, newTaskToAdd])
    setNewTask("")
  }

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleDeleteItem = (id) => {
    const list = [...tasks];
    const updatedList = list.filter(item => item.id !== id);
    setTasks(updatedList);
  }

  return (
    <div>
      <Container>
        <h1>To-Do List</h1>
        < Divider />
        <List>
          <Form onSubmit={handleSubmit}>
            <Input type="text" value={newTask} onChange={handleChange}
            />
            {newTask.length > 0 ? <button><FontAwesomeIcon icon={faPlus} /></button> : null}
          </Form>
          {
            tasks.length === 0
              ? 'Start Creating your todo List!'
              : tasks.map(el =>
              (
                <FlexLi key={el.id}>
                  <div>
                    <input id={el.id} type="checkbox" />
                    <label htmlFor={el.id}>{el.description}</label>
                  </div>
                  <button onClick={() => handleDeleteItem(el.id)}><FontAwesomeIcon icon={faTrash} /></button>
                </FlexLi>
              )
              )
          }
        </List>
      </Container>
    </div>
  )
}

