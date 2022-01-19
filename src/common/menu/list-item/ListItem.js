function ListItem(props) {
  const {link, text} = props.data;

  return (
      <li>
        <a href={link}>{text}</a>
      </li>
  )
}
export default ListItem