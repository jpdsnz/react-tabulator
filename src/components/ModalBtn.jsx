import React, { useState } from "react";
import Tabo from "./Tabulator";
import { Dialog } from "@mui/material";
import{Button} from "@mui/material";
import {DialogTitle} from "@mui/material";

import './btn.css'

function ModalBtn() {
    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
      };

  return (
    <div className="btn">
        <Button variant='contained' color="primary" onClick={handleOpen}> 
            Create Modal
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Table Dialog</DialogTitle>
            <Tabo />
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
        </Dialog>
    </div>
  )
}

export default ModalBtn