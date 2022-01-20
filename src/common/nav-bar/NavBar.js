import ListItems from "./list-items/ListItems";

const NavBar  = (props) => {
  const linkList = props.linkList;

  return (
      <ul>
        {
          linkList.map((item)=>
            <ListItems
                key={item.text}
                value={item}
            />

          )
        }
      </ul>
  )
}
export default NavBar