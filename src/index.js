import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODOS = "ADD_TODO";
const DELETE_TODOS = "DELETE_TODO";

const INITIAL_STATE = [];

const addToDo = (text) => {
  return {
    type: ADD_TODOS,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODOS,
    id,
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODOS:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Del";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
