import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addfood } from "../../store/features/foodSlice";
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




export default function AddFood() {
    const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState()
  const [ingredients, setIngredients] = React.useState("")
  const [history, setHistory] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [image, setImage] = React.useState("")

  let newFood={
    name:name,
    ingredients:ingredients,
    history:history,
    description:description,
    images:image
  }

  

  function handelName(event){
    setName(event.target.value)
    console.log(event.target.value);
  }

  function handelIngredients(event){
    setIngredients(event.target.value)
  }

  function handelHistory(event){
    setHistory(event.target.value)
  }

  function handelDescription(event){
    setDescription(event.target.value)
  }

  function handelImage(event){
    setImage(event.target.value)
  }

  function handelSave(){
   dispatch(addfood(newFood))
   handleClose()
  }

  
  return (
    <div className="buttonContainer">
      <Button onClick={handleOpen} className="addButton">
        <span>Add Food</span>
        <span>+</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" mb={4}>
            Add New Food
          </Typography>
          <TextField  onChange ={handelName}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Food-basic"
            label="Name"
            variant="outlined"
            value={name}
            required
          />
          <TextField onChange = {handelIngredients}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Category-basic"
            label="Ingredients"
            variant="outlined"
            value={ingredients}
            required
          />
          <TextField  onChange = {handelHistory}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Price-basic"
            label="history"
            variant="outlined"
            value={history}
            required
          />
          <TextField onChange = {handelDescription}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Description-basic"
            label="Description"
            variant="outlined"
            value={description}
            required
          />
          <TextField onChange={handelImage}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Photo-basic"
            label="Image"
            variant="outlined"
            value={image}
            required
          />
          <div style={{textAlign:'right'}}>
            <Button onClick={handleClose} variant="outlined" color="warning" sx={{marginRight:'1rem'}} >
              Cancel
            </Button>
            <Button onClick={handelSave}
            
            value={name}
             variant="contained" color="success">
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
