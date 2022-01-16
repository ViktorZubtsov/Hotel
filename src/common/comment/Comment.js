import React from "react";
// const  Comment  =(props)=>  {
//     const {name, timeline} = props;
//

//
// }
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date:  new Date()
        }
    }
    render() {
        return <div>
            <div>
                <img src="#" alt="avatar"/>
                <h3>{this.props.name}</h3>
                <div>{}</div>
            </div>
            <div>
                <div>like</div>
                <div>dmcme</div>
            </div>


        </div>;
    };
}
export default Comment