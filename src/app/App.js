import './App.css';
import '../common/comment/Comment'
import Comment from "../common/comment/Comment";

function App() {
  return (
    <div className="App">
      <Comment
          name={'title1'}
          timeline={'Мурад Сарафанов 25 дней назад'}
      />
        <Comment
          name={'title2'}
          timeline={'Мурад Сарафанов 5 дней назад'}
      />
    </div>
  );
}

export default App;
