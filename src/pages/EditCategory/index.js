import React, { Component } from "react";
import { Grid, AppBar, Tabs, Tab } from "@material-ui/core";
import Category from "../../components/Category";
import TabPanel from "../../components/TabPanel";

export default class EditCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "information",
      isNotify: false,
      notifyType: "warning",
      notifyMessage: "",
      nameValid: false,
      descriptionValid: false,
    }; 

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState(prevState => ({
      category: {
        ...prevState.category,
          _id: id
      }
    }));
  }

  handleChangeTab(event, value) {
    this.setState({value});
  }

  tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <Grid container>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChangeTab} aria-label="simple tabs example">
            <Tab value="information" label="Informações" {...this.tabProps('information')} />
            <Tab value="itens" label="Itens" {...this.tabProps('itens')} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index='information'>
          <Category {...this.props} />
        </TabPanel>
        <TabPanel value={value} index='itens'>
          Itens
        </TabPanel>
      </Grid>
    );
  }
}
