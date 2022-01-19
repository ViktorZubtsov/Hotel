function ListItem(props) {
  const {link, text} = props.number;

  return (
      <li>
        <a href={link}>{text}</a>
      </li>
  )
}
export default ListItem