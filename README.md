# Vailla Redux

## 바닐라자바스크립트 리덕스와 리엑트 리덕스에 대한 학습

## Pure Redux

1. 스토어를 만든다. (스토어는 데이터를 저장하는 곳)
2. reducer(함수)을 만든다. reducer는 데이터를 수정하는 곳
3. createStore 안에 있는 dispatch를 통해 action(무조건 객체, type 이여만 한다.)을 실행 시켜 reducer에서 state를 수정한다.
4. subscribe를 통해 바뀐 state를 상태를 확인 할 수 있다.
5. reducer안에 if문 보다 switch문을 사용하고, 액션이 실행되는 것들의 값을 변수로 만들어 놓고 사용한다.
