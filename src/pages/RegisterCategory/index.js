import React, { Component } from "react";
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Row, Title, CircleField, ContainerForm, ContentField, TextField } from './styles';
import { LinkButton, Button } from '../../styles/components';

export default class RegisterCategory extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      category: {
        name: ' ',
        description: 'tes'
      }
    };
  
    this.handleChangeFormValue = this.handleChangeFormValue.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.match;

    if (params !== undefined) {
      this.getData(params);
    }
  }

  getData(data) {
    const { id } = data;

    api
      .get(`/categories/${id}`)
      .then(resp => {
        const category = resp.data;
        this.setState({ category });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangeFormValue = event => {
    const {category} = this.state;
    const { name, value } = event.target;
    this.setState({ ...category, [name]: value });
    console.log(name, value )
  };

  submitFormHandler = event => {
    event.preventDefault();

    console.log(this.state)
    console.log(this.refs);
  }

  render() {
    const { category } = this.state;
    return (
        <Grid container>
          <Row spacing={1}>
              <CircleField><Add /></CircleField>
          </Row>
          <Row>
            <Title variant="h6">Criar Categoria</Title>
          </Row>
          <ContainerForm noValidate autoComplete="off" onSubmit={this.submitFormHandler}>
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
                  <LinkButton to="/categories">
                    Voltar
                  </LinkButton>
                </ContentField>
                <ContentField container item md={6} xs={12} alignItems="flex-start" justify="flex-end" direction="row">
                  <Button type="submit">
                    Adicionar
                  </Button>
                </ContentField>
              </Row>
          </ContainerForm>
        </Grid>
    );
  }
}
