import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function SignIn() {
    const initialValues = {
        name: "",
        birthday: "",
        username: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const AnanyaSubmitted = (e) => {
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        alert("Ananya has Submitted");
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigate('/home');
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Full name is required!";
        }
        if (!values.birthday) {
            errors.birthday = "Birthday is required!";
        }
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed 10 characters";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Please confirm your password";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    };

    return (
        <>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={AnanyaSubmitted}>
                    <h1>Sign In</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        {/* Name Field */}
                        <div className="field">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.name}</p>

                        {/* Birthday Field */}
                        <div className="field">
                            <label>Birthday</label>
                            <input
                                type="date"
                                name="birthday"
                                value={formValues.birthday}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.birthday}</p>

                        {/* Username Field */}
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>

                        {/* Password Field */}
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>

                        {/* Confirm Password Field */}
                        <div className="field">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>

                        {/* Submit Button */}
                        <button className="button">Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignIn;
