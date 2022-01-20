import React from "react";

class AuthBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  render() {
    const switchStatus = () => {
     this.setState((state) => ({
       isAuth: !state.isAuth
     }))
    }
    return(
        <article>
          {
            this.state.isAuth? <button onClick={switchStatus} >ЛК.</button> : <button onClick={switchStatus} >Войти </button>
          }
        </article>
    )
  }

}

export default AuthBtn