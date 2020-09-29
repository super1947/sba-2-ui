import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/todoReducer';

const TodoInput = () => {
  // todo가 CRUD 대상(obejct)입니다. -> 속성
  const [todo, setTodo] = useState(null); // Redux를 사용하는 중..
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const newTodo = {
      todoId: uuid(),
      name: todo,
      complete: false,
    };
    addTodo(newTodo);
    setTodo('');
  };
  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };
  const addTodo = (todo) => {
    dispatch(addTodoAction(todo));
  };

  return (
    <>
      <h1>할일 등록</h1>
      <form onSubmit={submitForm} method="POST">
        <div>
          <input type="text" name="todo" onChange={handleChange} />
          <br />
          <input type="submit" value="ADD TODO" />
        </div>
      </form>
    </>
  );
};

export default TodoInput;
