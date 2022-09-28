import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./usuario.css";

class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dado: {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dado: json });
        console.log(json);
        console.log("aqi" + this.state.dado.address.suite);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="container-lista">
          <h1>Dados Clientes</h1>

          <article
            key={this.state.dado.id}
            className="container-lista__usuario"
          >
            <p>
              <span>ID cliente :</span> {this.state.dado.id}
            </p>
            <p>
              <span>Nome Completo : </span> {this.state.dado.name}{" "}
              {this.state.dado.username}
            </p>
            <p>
              <span>E-mail :</span> {this.state.dado.email}
            </p>
           
            
            <h3>Endereco</h3>
            <p><span>Rua :</span> {this.state.dado.address.street}</p>
            
            <p><span>Numero :</span> {this.state.dado.address.suite}</p>
            <p><span>Cidade : </span> {this.state.dado.address.city}</p>
            <p><span>CEP : </span> {this.state.dado.address.zipcode}</p>
            <h3>Localizacao</h3>
            <p><span>Latitudade : </span> {this.state.dado.address.geo.lat}</p>
            <p><span>Longetudade : </span> {this.state.dado.address.geo.lng}</p>
            
            <h3>Contatos</h3>
            <p>
              <span>Telefone :</span> {this.state.dado.phone}
            </p>
            <p>
              <span>Website :</span> {this.state.dado.website}
            </p>
            <h3>Dados Empresa</h3>
           
            <p>{this.state.dado.company.name}</p>
            <p>{this.state.dado.company.catchPhrase}</p>
            <p>{this.state.dado.company.bs}</p>
            <Link to="/">Voltar</Link>
          </article>
        </div>

        {/* Pagina Home <br/>
        <hr/>
        
        <Link to='/sobre'>Pagina Sobre</Link> */}
      </div>
    );
  }
}
export default Usuario;
