import React, { Component, forwardRef } from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {
  Add,
  Clear,
  Search,
  Delete,
  Edit,
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  ArrowUpward
} from "@material-ui/icons";

import {
  ContentButton,
  LabelButton,
  Paper,
  ContentIcon,
  LinkIcon
} from "./styles";
import { Button } from "../../styles/components";
import { DeleteItemDialog } from "../../components/DeleteItemDialog";
import api from "../../services/api";

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Nome", field: "name" },
        { title: "Descrição", field: "description" },
        {
          title: "Actions",
          detailPanelColumnAlignment: "right",
          headerStyle: { color: "black", textAlign: "right" },
          render: rowData => (
            <ContentIcon>
              <LinkIcon to={`/categories/${rowData._id}`}>
                <Edit />
              </LinkIcon>
              <LinkIcon
                to="/"
                onClick={e =>
                  this.handleDialogOpen(e, `/categories/${rowData._id}`)
                }
              >
                <Delete />
              </LinkIcon>
            </ContentIcon>
          )
        }
      ],
      data: [],
      openDialog: false,
      destroyItem: null
    };

    this.handleDestroyItem = this.handleDestroyItem.bind(this);
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    api
      .get(`/categories`)
      .then(resp => {
        const { data } = resp;
        this.setState({ data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDestroyItem() {
    const { destroyItem } = this.state;
    api
      .delete(destroyItem)
      .then(resp => {
        this.setState({ openDialog: false, destroyItem: "" });
        this.getData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDialogOpen(e, link) {
    e.preventDefault();

    this.setState({ openDialog: true, destroyItem: link });
  }

  handleDialogClose() {
    this.setState({ openDialog: false, destroyItem: "" });
  }

  render() {
    const tableIcons = {
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
      )),
      PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
      )),
      SortArrow: forwardRef((props, ref) => (
        <ArrowUpward {...props} ref={ref} />
      ))
    };

    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper>
            <ContentButton item xs={12}>
              <Button>
                <LabelButton>Adicionar</LabelButton> <Add />
              </Button>
            </ContentButton>
            <Grid item xs={12}>
              <MaterialTable
                title="Categorias"
                columns={this.state.columns}
                data={this.state.data}
                icons={tableIcons}
              />

              {this.state.openDialog && (
                <DeleteItemDialog
                  handleDestroyItem={this.handleDestroyItem}
                  handleDialogClose={this.handleDialogClose}
                />
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
