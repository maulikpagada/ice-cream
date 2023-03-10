import React from 'react';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';


function Contact(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Please enter Name"),
        email: yup.string().email('Invalid email').required("Please enter Email"),
        subject: yup.string().required("Please enter Subject"),
        message: yup.string().required("Please enter Message"),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const {handleSubmit, handleChange , handleBlur, errors, touched} = formikObj;

    console.log(errors, touched);

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">Contact Us For Any Query</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="contact-form bg-light rounded p-5">
                            <div id="success" />
                            <Formik values={formikObj}>
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.name !== '' && touched.name ? <span>{errors.name}</span>:null}
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input
                                                type="email"
                                                className="form-control p-4"
                                                id="email"
                                                placeholder="Your Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.email !== '' && touched.email ? <span>{errors.email}</span>:null}
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="subject"
                                            placeholder="Subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.subject !== '' && touched.subject ? <span>{errors.subject}</span>:null}
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control p-4"
                                            rows={6}
                                            id="message"
                                            placeholder="Message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.message !== '' && touched.message ? <span>{errors.message}</span>:null}
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contact;