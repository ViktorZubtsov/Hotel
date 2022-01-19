function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
}

function Menu(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      // Правильно! Ключ нужно определять внутри массива:
      <ListItem key={number.toString()} value={number} />
  );
  return (
      <ul>
        {listItems}
      </ul>
  );
}


export default Menu