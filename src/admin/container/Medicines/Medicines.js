import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';


function Medicines(props) {

    let schema = yup.object().shape({
        name: yup.string().required("Please enter Name"),
        price: yup.string().required("Please enter Price"),
        quantity: yup.string().required("Please enter Quantity"),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        }
    })

    const { handleSubmit, handleChange, handleBlur, errors, touched } = formikObj;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <h1>Medicines</h1>
            <div>
                <Button sx={{ variant: "outlined", left: "1300px", border: "2px solid blue", borderRadius: "2px" }} onClick={handleClickOpen}>
                    Add Medicines
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicines</DialogTitle>
                    <DialogContent>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Add Medicines"
                                    label="Medicines Name "
                                    type="Add Medicines"
                                    fullWidth
                                    variant="standard"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name !== '' && touched.name ? <span>{errors.name}</span> : null}

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Add Medicines"
                                    label="Medicines Price"
                                    type="Add Medicines"
                                    fullWidth
                                    variant="standard"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.price !== '' && touched.price ? <span>{errors.price}</span> : null}

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Add Medicines"
                                    label="Medicines Quantity "
                                    type="Add Medicines"
                                    fullWidth
                                    variant="standard"
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.quantity !== '' && touched.quantity ? <span>{errors.quantity}</span> : null}

                            </Form>
                        </Formik>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div >

    );
}

export default Medicines;