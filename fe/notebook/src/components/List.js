import { createElement, PropTypes } from 'rax';
import OneList from './oneList';

const List = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo => 
        <OneList
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
  </ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default List;