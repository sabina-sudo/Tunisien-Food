import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { editfood } from "../../store/features/foodSlice";
import { useDispatch } from "react-redux";

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


export default function EditFood({food}) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[changeinfo, setChangeinfo] = useState({
    name:food.name,
    description:food.description,
    ingredients:food.ingredients,
    history: food.history,
    images:food.images,
  });
  

  const handelChangeInfo=(event)=>{
    const {name,value}=event.target
    setChangeinfo (prev=>({
      ...prev,
      [name]:value
    }))
  }

  const handelSave=()=>{
    const id= food._id
    dispatch(editfood({id,changeinfo}))
    handleClose()
  }

  



  return (
    <div className="buttonContainer">
      <ModeEditIcon onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" mb={4}>
            Edit Food
          </Typography>
          <TextField onChange={handelChangeInfo}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Food-basic"
            label="name"
            variant="outlined"
            name="name"
            value={changeinfo.name}
            required
          />
          <TextField onChange={handelChangeInfo}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="Category-basic"
            label="description"
            variant="outlined"
            name="description"
            value={changeinfo.description}
            required
          />
          <TextField onChange={handelChangeInfo}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="ingredients-basic"
            label="ingredients"
            variant="outlined"
            name="ingredients"
            value={changeinfo.ingredients}
            required
          />
          <TextField onChange={handelChangeInfo}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="history-basic"
            label="history"
            variant="outlined"
            name="history"
            value={changeinfo.history}
            required
          />
          <TextField  onChange={handelChangeInfo}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            color="warning"
            id="images-basic"
            label="images"
            variant="outlined"
            name="images"
            value={changeinfo.images}
            required
          />
          <img src={food.images} width='150' alt="food"  />
          <div style={{textAlign:'right'}}>
            <Button onClick={handleClose} variant="outlined" color="warning" sx={{marginRight:'1rem'}} >
              Cancel
            </Button>
            <Button 
            onClick={handelSave}
            variant="contained" 
            color="success">
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
