const ListItems = (props) => {
  const {link, text} = props.value
  return (
      <li>
        <a href={link}>{text}</a>
      </li>
  )
}
export default ListItems