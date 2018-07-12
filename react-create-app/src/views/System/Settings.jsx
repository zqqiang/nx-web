import React from 'react';

import Grid from '@material-ui/core/Grid';
// import InputLabel from "@material-ui/core/InputLabel";

import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
// import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  }
};

function Settings(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Settings</h4>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="HTTP Port"
                    id="http-port"
                    formControlProps={{ fullWidth: true }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary">Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Settings);
