import {Link} from "react-router-dom";

const Menu = (props: any) => {
    const { links } = props;

    return(
        <ul>
            {
                links.map((item: {name: string, link: string})=>
                    <Link key={item.name.length} to={item.link} >{item.name}</Link>
                )
            }
        </ul>
    )
}
export default Menu