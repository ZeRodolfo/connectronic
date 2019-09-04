import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";
import { Grid, Snackbar } from "@material-ui/core";
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
import { SnackbarContentWrapper } from "../SnackbarContentWrapper";

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        _id: null,
        name: "",
        description: ""
      },
      isNotify: false,
      notifyType: "warning",
      notifyMessage: "",
      nameValid: false,
      descriptionValid: false,
    };

    this.handleChangeFormValue = this.handleChangeFormValue.bind(this);
    this.handleBlurFormValue = this.handleBlurFormValue.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }).isRequired,
    // history
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { id } = this.props.match.params;

    if (id !== undefined) {
      await api
        .get(`/categories/${id}`)
        .then(resp => {
          const { _id, name, description } = resp.data;
          const category = {
            _id,
            name,
            description
          };

          this.setState({ category });
        })
        .catch(error => {
          console.log(error);
        });
    }
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

  validateFields() {
    const { category } = this.state;

    const nameValid = category.name.trim() === "";
    const descriptionValid = category.description.trim() === "";

    this.setState({ nameValid, descriptionValid });

    return nameValid || descriptionValid;
  }

  handleBlurFormValue() {
    this.validateFields();
  }

  async submitFormHandler(event) {
    event.preventDefault();

    const validForm = this.validateFields();
    if (validForm)
      return;

    const { category } = this.state;
    const { id } = this.props.match.params;

    if (id !== undefined) {
      await api
        .put(`/categories/${id}`, category)
        .then(resp => {
          const { data } = resp;

          this.setState({ category: data, isNotify: true, notifyType: "success", notifyMessage: "Categoria atualizada com sucesso." });
        })
        .catch(error => {
          console.log(error);
          this.setState({ isNotify: true, notifyType: "error", notifyMessage: "Erro ao atualizar Categoria." });
        });
    }

    if (id === undefined) {
      await api
        .post("/categories", category)
        .then(resp => {
          const { data } = resp;
          this.setState({ category: data, isNotify: true, notifyType: "success", notifyMessage: "Categoria criada com sucesso." });
          this.props.history.push('/categories');
        })
        .catch(error => {
          console.log(error);
          this.setState({ isNotify: true, notifyType: "error", notifyMessage: "Erro ao criar Categoria." });
        });
    }
  }

  handleCloseNotification() {
    this.setState({ isNotify: false });
  }

  render() {
    const { category, nameValid, descriptionValid, isNotify, notifyType, notifyMessage } = this.state;

    const notification = (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={isNotify}
        autoHideDuration={6000}
        onClose={this.handleCloseNotification}
      >
        <SnackbarContentWrapper
          onClose={this.handleCloseNotification}
          variant={notifyType}
          message={notifyMessage}
        />
      </Snackbar>
    )

    return (
      <Grid container>
        {notification}
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
          <ContentField item xs={12} sm={6}>
            <TextField
              required
              error={nameValid}
              id="name-required"
              name="name"
              label="Nome"
              value={category.name}
              margin="normal"
              variant="outlined"
              onChange={this.handleChangeFormValue}
              onBlur={this.handleBlurFormValue}
              autoFocus={true}
            />
          </ContentField>
          <ContentField item xs={12} sm={6}>
            <TextField
              required
              error={descriptionValid}
              id="description-required"
              name="description"
              label="Descrição"
              value={category.description}
              margin="normal"
              variant="outlined"
              onChange={this.handleChangeFormValue}
              onBlur={this.handleBlurFormValue}
            />
          </ContentField>
          <Row>
            <ContentField item xs={12} sm={6}>
              <LinkButton to="/categories">Voltar</LinkButton>
            </ContentField>
            <ContentField
              container
              item
              xs={12} sm={6}
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button type="submit">{category._id !== null ? 'Editar' : 'Adicionar'}</Button>
            </ContentField>
          </Row>
        </ContainerForm>
      </Grid>
    );
  }
}
