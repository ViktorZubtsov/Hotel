function ListItem(props) {
  const {link, text} = props.value;

  return (
      <li>
        <a href={link}>{text}</a>
      </li>
  )
}
function Menu(props) {
  const numbers = props.data;

  return (
      <ul>
        {numbers.map((number) =>
            <ListItem key={number.text} value={number} />
        )}
      </ul>
  );
}


export default Menu