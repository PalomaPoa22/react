import React, { Component } from "react";
import { Link } from "react-router-dom";
import './home.css'
class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      dado:[]
    }
    this.loaddado=this.loaddado.bind(this)
  }

componentDidMount(){
  this.loaddado()
}

loaddado(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(json => {
  this.setState({dado : json})
  console.log(json)
})
}

  render() {
    return (
      <div className="container"> 

        <div className="container-lista">
          <h1>Dados Clientes</h1>
          {
            this.state.dado.map(item =>{
              return(
                <article key={item.id} className='container-lista__home'>
                  
                  <p><span>ID cliente :</span> {item.id} </p>
                  <p><span>Nome Completo :</span> {item.name} {item.username}</p>
                  <p><span>E-mail :</span> {item.email}</p>
                             <Link to={`/usuarios/${item.id}`}>Mais detalhes</Link>
                </article>
              )
            })
          }
        </div>

        {/* Pagina Home <br/>
        <hr/>
        
        <Link to='/sobre'>Pagina Sobre</Link> */}
      </div>
    );
  }
}
export default Home;
