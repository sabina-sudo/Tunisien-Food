import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { deletefoods } from "../../store/features/foodSlice";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteProduct=()=>{
    dispatch(deletefoods(id))
    handleClose()
  }

  const dispatch = useDispatch();

  return (
    <div>
      <DeleteIcon sx={{ color: "red" }} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" mb={2} component="h2">
            Would you like to delete this food
          </Typography>
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              color="warning"
              sx={{ marginRight: "1rem" }}
            >
              Cancel
            </Button>
            <Button
              onClick={deleteProduct}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
