import React, { Component } from "react";
import api from "../../services/api";
import { Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import {
  Row,
  Title,
  CircleField,
  ContainerForm,
  ContentField,
  TextField
} from "./styles";
import { LinkButton, Button } from "../../styles/components";

export default class RegisterCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        _id: null,
        name: "",
        description: ""
      }
    };

    this.handleChangeFormValue = this.handleChangeFormValue.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  componentDidUpdate() {
    const { id } = this.props.match.params;

    api
      .get(`/categories/${id}`)
      .then(resp => {
        const { _id, name, description } = resp.data;
        const category = {
          id: _id,
          name,
          description
        };
        console.log("OI")
        this.setState({ category });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangeFormValue(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      category: {
        ...prevState.category,
        [name]: value
      }
    }));
  }

  async submitFormHandler(event) {
    event.preventDefault();

    const { id } = this.props.match.params;

    if (id !== undefined) {
      await api
        .put(`/categories/${id}`, this.state.category)
        .then(resp => {
          const { data } = resp;
          this.setState({ category: data });
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (id === undefined) {
      await api
        .post("/categories", this.state.category)
        .then(resp => {
          const { data } = resp;
          this.setState({ category: data });
          this.props.match.params.id = data._id;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const { category } = this.state;
    console.log("aki", category);

    return (
      <Grid container>
        <Row spacing={1}>
          <CircleField>
            <Add />
          </CircleField>
        </Row>
        <Row>
          <Title variant="h6">Criar Categoria</Title>
        </Row>
        <ContainerForm
          noValidate
          autoComplete="off"
          onSubmit={this.submitFormHandler}
        >
          <ContentField item md={6} xs={12}>
            <TextField
              required
              id="name-required"
              name="name"
              label="Nome"
              defaultValue={category.name}
              margin="normal"
              variant="outlined"
              onChange={this.handleChangeFormValue}
            />
          </ContentField>
          <ContentField item md={6} xs={12}>
            <TextField
              required
              id="description-required"
              name="description"
              label="Descrição"
              defaultValue={category.description}
              margin="normal"
              variant="outlined"
              onChange={this.handleChangeFormValue}
            />
          </ContentField>
          <Row>
            <ContentField item md={6} xs={12}>
              <LinkButton to="/categories">Voltar</LinkButton>
            </ContentField>
            <ContentField
              container
              item
              md={6}
              xs={12}
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button type="submit">Adicionar</Button>
            </ContentField>
          </Row>
        </ContainerForm>
      </Grid>
    );
  }
}
