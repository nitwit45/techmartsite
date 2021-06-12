import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why Us?</h2>
          <h5 className={classes.description}>
            Check out all the services that we offer including product tracking, 
            On-Time Delivery and much more. If you want your items delivered 
            right to your doorstep without having to worry about any taxes, 
            overpriced shipping charges or customs clearence issues, We Will Get 
            It Done!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Live Chat"
              description="Having trouble sending us the links or having doubts? Our Team is ready to help you our through a Live Chat!"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Product Tracking"
              description="Track your items all the way from the factory right to your doorstep with timestamps."
              icon={LocationOnIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="On Time Delivery"
              description="We will make sure that your package reaches your location within the given time without faliure."
              icon={AssignmentTurnedInIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
