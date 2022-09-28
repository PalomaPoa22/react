import React, { Component } from "react";
import { Link } from "react-router-dom";
import './album.css'
class Albuns extends Component {
  constructor(props){
    super(props)
    this.state={
      dados:[]
    }
    this.loaddados=this.loaddados.bind(this)
  }

componentDidMount(){
  this.loaddados()
}

loaddados(){
fetch('https://jsonplaceholder.typicode.com/albums')
.then(response =>response.json())
.then(json => {
  this.setState({dados : json})
  console.log(json)
})
}

  render() {
    return (
      <div className="container"> 

        <div className="container-lista">
          <h1>Dados Clientes</h1>
          {
            this.state.dados.map(item =>{
              return(
                <article key={item.id} className='container-lista__album'>
                  
                  <p>ID : {item.id} TITLE : {item.title}  </p>
                  
                        
                             <Link to={`/fotos/${item.id}`}>Mais detalhes</Link>
                </article>
              )
            })
          }
        </div>

        {/* Pagina Home <br/>
        <hr/>
        
        <Link to='/sobre'>Pagina Sobre</Link> */}
        <Link to='/'  className='container-lista__filme'>Voltar</Link>
      </div>
    );
  }
}
export default Albuns;
