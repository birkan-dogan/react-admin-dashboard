import { Box, Button, Modal, TextField } from "@mui/material";

const ModalComponent = ({ handleClose, setText, text, open }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit} className="calendar-form">
          <TextField
            id="outlined-basic"
            label="New Duty:"
            variant="outlined"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Button variant="contained" type="submit">
            Add Task
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
