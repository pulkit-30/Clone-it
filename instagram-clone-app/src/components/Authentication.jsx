import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Authentication(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [signInOpen, setOpenSignIn] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSignInClose = () => {
    setOpenSignIn(false);
  };
  function getUsername(username) {
    props.upadteStatus(username);
  }
  function handelAuth(email, password) {
    return props.handelAuth(email, password);
  }
  function handelSignIn(email, password, state) {
    return props.handelSignIn(email, password);
    setOpenSignIn(state);
  }
  return (
    <div className="User-main flex">
      <div className="pos">
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={handleOpen}
        >
          SignUp
        </Button>
        <Button
          color="secondary"
          variant="contained"
          type="button"
          onClick={() => {
            setOpenSignIn(true);
          }}
        >
          Sign In
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <SignUp handelAuth={handelAuth} getUsername={getUsername} />
          </div>
        </Fade>
      </Modal>
      {/* ////////////
      ///////Sign In////////
      ////////////////
       */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signInOpen}
        onClose={handleSignInClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <SignIn handelSignIn={handelSignIn} />
        </Fade>
      </Modal>
    </div>
  );
}
export default Authentication;
