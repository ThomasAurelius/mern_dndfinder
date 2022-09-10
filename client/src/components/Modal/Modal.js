import { Modal, Button, Box } from '@material-ui/core';

import React from 'react'
import Form from '../Form/Form';

const PostModal = () => {

   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant="contained" color="primary" onClose={handleClose} onClick={handleOpen}>Create Post</Button>
      <Modal open={open} >
         <Box>   
            <Form />
         </Box>
      </Modal>
    </>
  )
}

export default PostModal