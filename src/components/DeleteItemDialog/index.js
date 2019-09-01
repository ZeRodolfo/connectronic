import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

export const DeleteItemDialog = props => {
  const { handleDestroyItem, handleDialogClose } = props;
  
  return (
    <Dialog
      open={true}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Você irá apagar um item
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Tem certeza que deseja apagar?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDestroyItem} color="primary" autoFocus>
          Apagar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
