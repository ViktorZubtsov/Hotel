const  Comment  =(props)=>  {
    const {name, timeline} = props;

return <div>
            <div>
                <img src="#" alt="avatar"/>
                <h3>{name}</h3>
                <div>{timeline}</div>
            </div>
            <div>
                <div>like</div>
                <div>dmcme</div>
            </div>


        </div>;

}
export default Comment