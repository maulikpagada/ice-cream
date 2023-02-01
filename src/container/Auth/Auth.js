import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, useFormik, Form, validateYupSchema, } from 'formik';
import { Button, FormGroup, Label, Input, Container } from 'reactstrap';

function Auth(props) {

    const [type, setType] = useState('Login');
    const [reset, setReset] = useState(false);

    let schemaObj;
    let init = {};

    if (type === 'Signup' && reset === false) {
        schemaObj = {
            Fullname: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(10).required("Please enter Name"),
            Email: yup.string().email('Invalid email').required("Please enter Email"),
            Password: yup.string().required("Please enter your password"),
            ConfPassword: yup.string()
                .oneOf([yup.ref('Password'), null], 'Passwords must match'),
            PhoneNumber: yup.number().required("please enter your number").test('PhoneNumber', 'Must be exactly 10 number.', (value) => { if (value) { return value.toString().length === 10 } }),
            Message: yup.string().required(),
            Hobby: yup.array().min(2).of(yup.string().required()).required(),
            Gender: yup.array().min(1).of(yup.string().required()).required(),
            City: yup.string().required(),
            Accept: yup.bool().oneOf([true], 'Accept Terms is required')
        };

        init = {
            Fullname: '',
            Email: '',
            Password: '',
            PhoneNumber: '',
            ConfPassword: '',
            Message: '',
            Hobby: '',
            Gender: '',
            City: '',
            Accept: false,
        }

    } else if (type === 'Login' && reset === false) {
        schemaObj = {
            Email: yup.string().email('Invalid Email').required("Please enter Email"),
            Password: yup.string().required("Please enter your password"),
        };

        init = {
            Email: '',
            Password: '',
        }

    } else if (reset === true) {
        schemaObj = {
            Email: yup.string().email('Invalid Email').required("Please enter Email"),
        };

        init = {
            Email: '',
        }
    }

    console.log(schemaObj, init);

    const handleUtili = (data) => {
        localStorage.setItem("User", JSON.stringify(data))
    }

    let schema = yup.object().shape(schemaObj);
    const formikObj = useFormik({
        initialValues: init,
        validationSchema: schema,
        enableReinitialize: true,
        onSubmit: values => {
            handleUtili(values);
            console.log(values);
        }
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched } = formikObj
    console.log(errors, touched);
    return (

        <Container>
            <div className='signincontainer'>
                <Formik values={formikObj}>
                    <Form onSubmit={handleSubmit}>
                        {
                            reset ? <h2>Reset Password</h2>
                                :
                                type === 'Signup' ? <h2>Signup</h2> : <h2>Login</h2>
                        }

                        {
                            reset === true ?
                                null :
                                type === 'Signup' ?
                                    <FormGroup>
                                        <Label for="exampleFullname">
                                            Fullname
                                        </Label>
                                        <Input
                                            id="exampleFullname"
                                            name="Fullname"
                                            placeholder="Full Name"
                                            type="Fullname"
                                            onBlur={handleBlur}
                                            onChange={e => { setFieldTouched('Fullname'); handleChange(e) }}
                                        />
                                        {errors.Fullname !== '' && touched.Fullname ? <p className='form-errors'>{errors.Fullname}</p> : null}
                                    </FormGroup>
                                    :
                                    null
                        }

                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>

                            <Input
                                id="exampleEmail"
                                name="Email"
                                placeholder="Email"
                                type="Email"
                                onBlur={handleBlur}
                                onChange={e => { setFieldTouched('Email'); handleChange(e) }}
                            />
                            {errors.Email !== '' && touched.Email ? <p className='form-errors'>{errors.Email}</p> : null}
                        </FormGroup>

                        {
                            reset === true ?
                                null :
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                            
                                    <Input
                                        id="examplePassword"
                                        name="Password"
                                        placeholder="Password"
                                        type="Password"
                                        onBlur={handleBlur}
                                        onChange={e => { setFieldTouched('Password'); handleChange(e) }}
                                    />
                                    {errors.Password !== '' && touched.Password ? <p className='form-errors'>{errors.Password}</p> : null}
                                </FormGroup>
                        }

                        <FormGroup>
                            <Label for="examplePassword">
                                ConfPassword
                            </Label>

                            <Input
                                id="exampleConfPassword"
                                name="ConfPassword"
                                placeholder="Confrom Password"
                                type="ConfPassword"
                                onBlur={handleBlur}
                                onChange={e => { setFieldTouched('ConfPassword'); handleChange(e) }}
                            />
                            {errors.ConfPassword !== '' && touched.ConfPassword ? <p className='form-errors'>{errors.ConfPassword}</p> : null}
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePhoneNumber">
                                PhoneNumber
                            </Label>

                            <Input
                                id='exampleNumber'
                                name='PhoneNumber'
                                placeholder='PhoneNumber'
                                type='text'
                                onBlur={handleBlur}
                                onChange={e => { setFieldTouched('PhoneNumber'); handleChange(e) }}
                            />
                            {errors.PhoneNumber !== '' && touched.PhoneNumber ? <p className='form-errors'>{errors.PhoneNumber}</p> : null}
                        </FormGroup>

                        <FormGroup>
                            Gender:
                            <input type={"radio"} name="Gender" value={"Male"} onChange={e => {
                                setFieldTouched('Gender');
                                handleChange(e)
                            }}
                                onBlur={handleBlur} /> Male

                            <input type={"radio"} name="Gender" value={"Female"} onChange={e => {
                                setFieldTouched('Gender');
                                handleChange(e)
                            }}
                                onBlur={handleBlur} /> Female

                            {errors.Gender !== '' && touched.Gender ? <p className='form-errors'>{errors.Gender}</p> : null}

                        </FormGroup>

                        <FormGroup>
                            Hobby:
                            <input type={"checkbox"} name="Hobby" value={"Music"} onChange={e => {
                                setFieldTouched('Hobby');
                                handleChange(e)
                            }}
                                onBlur={handleBlur} /> Music
                            <input type={"checkbox"} name="Hobby" value={"Cricket"} onChange={e => {
                                setFieldTouched('Hobby');
                                handleChange(e)
                            }}
                                onBlur={handleBlur} /> Cricket
                            <input type={"checkbox"} name="Hobby" value={"Coding"} onChange={e => {
                                setFieldTouched('Hobby');
                                handleChange(e)
                            }}
                                onBlur={handleBlur} /> Coding

                            {errors.Hobby !== '' && touched.Hobby ? <p className='form-errors'>{errors.Hobby}</p> : null}

                        </FormGroup>

                        <FormGroup>
                            <select
                                id='City'
                                name='City'
                                onChange={e => { setFieldTouched('City'); handleChange(e) }}
                                onBlur={handleBlur}
                            >

                                <option value="">Select A City</option>
                                <option value="Surat">Surat</option>
                                <option value="Bardoli">Bardoli</option>
                                <option value="Navsari">Navsari</option>
                            </select>
                            {errors.City !== '' && touched.City ? <p className='form-errors'>{errors.City}</p> : null}

                        </FormGroup>

                        <FormGroup>
                            <textarea
                                id='Message'
                                name='Message'
                                rows={4}
                                cols={50}
                                onChange={e => {
                                    setFieldTouched('Hobby');
                                    handleChange(e)
                                }}
                            />
                            {errors.Message !== '' && touched.Message ? <p className='form-errors'>{errors.Message}</p> : null}
                        </FormGroup>

                        <FormGroup>
                            <input
                                name='Accept'
                                id='Accept'
                                type='checkbox'
                                onChange={e => { setFieldTouched('Accept'); handleChange(e) }}
                                onBlur={handleBlur}
                            />

                            <Label>
                                I agree to the Terms and Conditions
                            </Label>

                            {errors.Accept !== '' && touched.Accept ? <p className='form-errors'>{errors.Accept}</p> : null}
                        </FormGroup>

                        {
                            type === 'Signup' ?
                                <button>
                                    Signup
                                </button>
                                :
                                <button>
                                    Login
                                </button>
                        }

                    </Form>
                </Formik>

                <div className='msg'>
                    {
                        type === 'Signup' ?
                            <a onClick={() => { setType('Login'); setReset(false) }}><p>already have account? Login</p></a>
                            :
                            <>
                                <a onClick={() => { setType('Signup'); setReset(false) }}><p>create an account? Signup</p></a>
                                <a onClick={() => { setReset(true) }}><p>Forget Password</p></a>
                            </>
                    }
                </div>
            </div>
        </Container>
    );
}

export default Auth;