import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setTodo } from '../redux/modules/todo';


const useFoundData = () => {
    const todolist = useSelector(setTodo);
    const previos = useNavigate()
    const param = useParams();
    const foundData = todolist.find( (todo) => {
        return todo.id === parseInt(param.id)
      })
    return [previos, foundData]
}


export default useFoundData