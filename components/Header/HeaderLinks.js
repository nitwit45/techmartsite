/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/test"
          color="transparent"
          
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons}>unarchive</HomeIcon> Home
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="links"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <LocalShippingIcon className={classes.icons} /> Import
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <HelpIcon className={classes.icons}>unarchive</HelpIcon> About Us
        </Button>
      </ListItem>


      
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PersonIcon className={classes.icons} /> Sign In
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>


      {/* Extra Space For another social Media icon */}
      
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/techmart.io/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/techmart.io/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
