import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./foto.css";
class Fotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dado: [],
    };
      }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dado: json });
        console.log(json);
      });
    }
    

  render() {
    return (
      <div className="container">
        <div className="container-lista">
          <h1>Dados Fotos</h1>
          <article  className='container-lista__foto'>
                  
                  <p>ID : {this.state.dado.id} TITLE : {this.state.dado.title}  </p>
                  <img src={this.state.dado.thumbnailUrl} alt='imagem' />
                        
                           
        <Link to={{ pathname: this.state.dado.url }} target="_blank" >Foto Grande</Link>
                </article>
        </div>
        <Link to='/albuns'  className='container-lista__button '>Voltar</Link>
      </div>
    );
  }
}
export default Fotos;
