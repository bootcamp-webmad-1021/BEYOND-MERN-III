import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoasterService from "../../../services/coaster.service";

class CoasterDetails extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      description: "",
      inversions: "",
      length: "",
      imageUrl: "",
      err: ""
    }

    this.service = new CoasterService()
  }

  componentDidMount() {
    const id = this.props.match.params.id

    this.service.getOneCoaster(id)
      .then(response => {
        const { title, description, inversions, length, imageUrl } = response.data

        this.setState({ title, description, inversions, length, imageUrl })
      })
      .catch(err => this.setState({ err: err.response.data.err }))
  }

  render() {
    const { title, description, inversions, length, imageUrl } = this.state

    return (
      <Container>
        <h1>Detalles</h1>

        {this.state.err ?
          <h1>{this.state.err}</h1>
          :
          <Row className="justify-content-around">
            <Col md={4} style={{ overflow: "hidden" }}>
              <article>
                <h2>{title}</h2>
                <div>
                  <p>{description}</p>
                  <hr />
                  <br />
                  <p>Nº de Inversiones: {inversions}</p>
                  <p>Longitud: {length}</p>
                </div>
              </article>
            </Col>
            <Col md={6}>
              <img src={imageUrl} alt={title} ></img>
            </Col>
          </Row>}
      </Container >
    )
  }
}

export default CoasterDetails