import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DropDown from "../../Container/DropDown/index";
import "./HeaderStyle.css";
import "../../style.css";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "/resume.pdf" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginTop : "10px",
    marginRight: "20px",
    color: "white",
    backgroundColor: "black",
    borderRadius: 0,
    height: 30,
    border: "2px solid gray",
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
  },
}));

export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <div className="flex-between headerContainer">
            <div className="logoContainer">
              <Avatar className={styles.avatar}>Logo</Avatar>
            </div>
            <Hidden xsDown>
              <div className="dropDownContainer flex-between">
                <div className="dropDownItemWidth">
                  <DropDown
                    name="Services"
                    option={[
                      { option1: "option1" },
                      { option1: "option2" },
                      { option1: "option3" },
                    ]}
                  />
                </div>
                <div className="dropDownItemWidth">
                  <DropDown
                    name="Projects"
                    option={[
                      { option1: "option1" },
                      { option1: "option2" },
                      { option1: "option3" },
                    ]}
                  />
                </div>
                <div className="dropDownItemWidth">
                  <DropDown
                    name="Branch"
                    option={[
                      { option1: "option1" },
                      { option1: "option2" },
                      { option1: "option3" },
                    ]}
                  />
                </div>
              </div>
            </Hidden>
          </div>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
