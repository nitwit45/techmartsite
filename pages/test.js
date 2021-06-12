import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GetAppIcon from '@material-ui/icons/GetApp';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TextField from "@material-ui/core/TextField";






import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Techmart.io"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.png">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Import Your Items Now!</h1>
              <h4>
                We import your goods from CHINA. Call us for risk free
                importation and get your quote now. Don't Worry about taxes or
                customs! Express Delivery within 2-3 Weeks. We are specialized
                in importation of electronics from China to Sri Lanka.
              </h4>
              <br />
              <Button
                color="rose"
                size="lg"
                href="/links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-shipping-fast" />
                IMPORT NOW
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
