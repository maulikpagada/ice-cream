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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function User(props) {
    const [dopen, setDOpen] = React.useState(false);

    const [aID, setaID] = useState();

    const handleDClickOpen = () => {
        setDOpen(true);
    };

    const handleDClose = () => {
        setDOpen(false);
    };

    const [medData, setMedData] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("user"));

        if (localData != null) {
            setMedData(localData)
        }
    }, [])

    const handleDelete = () => {
        let localData = JSON.parse(localStorage.getItem("user"));

        let Ddata = localData.filter((l) => l.id !== aID)

        localStorage.setItem("user", JSON.stringify(Ddata))

        setMedData(Ddata)

        handleDClose();
        setaID();
    }

    const columns = [
        { field: 'age', headerName: 'Age', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'ActionDeleteEdit',
            headerName: 'ActionDeleteEdit',
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => { setaID(params.row.id); setDOpen(true) }} aria- label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={handleClickOpen} aria- label="Edit">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        },
    ];

    let schema = yup.object().shape({
        name: yup.string().required("Please enter Name"),
        age: yup.number().required("Please enter your Age"),
        email: yup.string().email("please enter your Email")
    });

    const handleAdd = (values) => {

        let localData = JSON.parse(localStorage.getItem("user"));

        let idData = Math.round(Math.random() * 1000);

        let data = { ...values, id: idData };

        if (localData !== null) {
            localData.push(data)
            localStorage.setItem("user", JSON.stringify(localData))
            setMedData(localData)
        } else {
            localStorage.setItem("user", JSON.stringify([data]))
            setMedData(data)
        }
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
            handleAdd(values)
            setOpen(false);
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
            <h1>User</h1>
            <div>
                <Button sx={{ variant: "outlined", left: "1300px"}} onClick={handleClickOpen}>
                    Add User
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicines</DialogTitle>
                    <DialogContent>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit}>
                                <TextField
                                    margin="dense"
                                    id="Add User"
                                    label="User Name "
                                    type="text"
                                    fullWidth
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {errors.name !== '' && touched.name ? <span>{errors.name}</span> : null}

                                <TextField
                                    margin="dense"
                                    id="Add age"
                                    label="your age "
                                    type="text"
                                    fullWidth
                                    name="age"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {errors.age !== '' && touched.age ? <span>{errors.age}</span> : null}

                                <TextField
                                    margin="dense"
                                    id="Add Email"
                                    label="Email "
                                    type="text"
                                    fullWidth
                                    name="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {errors.email !== '' && touched.email ? <span>{errors.email}</span> : null}

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

            <Dialog
                open={dopen}
                onClose={handleDClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure delete id
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={() => handleDelete()} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>


        </div>

    );
}

export default User;