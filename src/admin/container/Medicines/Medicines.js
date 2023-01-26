import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';
import { DataGrid } from '@mui/x-data-grid';

function Medicines(props) {

    const [medData, setMedData] = useState([]);

    useEffect(() => {

        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData != null) {
            setMedData(localData)
        }
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
    ];

    let schema = yup.object().shape({
        name: yup.string().required("Please enter Name"),
        price: yup.number().positive("Must be more than 0").integer("Must be more than 0").required("This field is required"),
        quantity: yup.number().required("Please enter Quantity"),
    });

    const handleAdd = (values) => {

        let localData = JSON.parse(localStorage.getItem("medicines"));

        let idData = Math.round(Math.random() * 1000);

        let data = { ...values, id: idData };

        if (localData !== null) {
            localData.push(data)
            localStorage.setItem("medicines", JSON.stringify(localData))
            setMedData(localData)
        } else {
            localStorage.setItem("medicines", JSON.stringify([data]))
            setMedData(data)
        }
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
            handleAdd(values)
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
                <Button sx={{ variant: "outlined", left: "1300px", border: "2px solid blue", borderRadius: "10px", marginBottom: "10px" }} onClick={handleClickOpen}>
                    Add Medicines
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicines</DialogTitle>
                    <DialogContent>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit}>
                                <TextField
                                    margin="dense"
                                    id="Add Medicines"
                                    label="Medicines Name "
                                    type="text"
                                    fullWidth
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {errors.name !== '' && touched.name ? <span>{errors.name}</span> : null}

                                <TextField
                                    margin="dense"
                                    id="price"
                                    label="Medicines Price"
                                    type="number"
                                    fullWidth
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                
                                {errors.price !== '' && touched.price ? <span>{errors.price}</span> : null}

                                <TextField
                                    margin="dense"
                                    id="quantity"
                                    label="Medicines Quantity "
                                    type="number"
                                    fullWidth
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.quantity !== '' && touched.quantity ? <span>{errors.quantity}</span> : null}

                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Add</Button>
                                </DialogActions>
                            </Form>
                        </Formik>

                    </DialogContent>

                </Dialog>
            </div>

            <div style={{ height: 400, width: '100%', marginTop: "20px" }}>
                <DataGrid
                    rows={medData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div >

    );
}

export default Medicines;