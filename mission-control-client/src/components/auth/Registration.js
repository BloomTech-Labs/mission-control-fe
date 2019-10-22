import React from "react";
import axios from "axios";
import {withFormik} from "formik";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
const URL = "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/register";
// TODO: encrypt password

const styles = () => ({
    container: {
        position: "absolute",
        width: "1760px",
        height: "897px",
        left: "80px",
        top: "176px",
        background: "#FFFFFF",
        borderRadius: "5px"
    },
    header: {
        position: "absolute",
        width: "136px",
        height: "43px",
        left: "217.5px",
        top: "313.5px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "36px",
        lineHeight: "43px",
        textAlign: "center",
        letterSpacing: "0.06em",
        color: "#0051BE"
    }
});
function Form({
    classes,
    errors,
    touched,
    values,
    handleSubmit
}) {
    const history = useHistory();
    return (
        <div className={classes.container}>
            <h1 
                className={classes.header}
            >
                Sign Up
            </h1>
            <p>Already have an account? Sign In</p>
            <form
                history={history}
                onSubmit={handleSubmit}
            >
                <Card>
                    <CardContent>
                        <TextField 
                            type="text"
                            id="firstName"
                            name="firstName"
                            label="First Name"
                        />
                        {touched.firstName && errors.firstName && (
                            <p className="error">{errors.firstName}</p>
                        )}
                        <TextField 
                            type="text"
                            id="firstName"
                            name="lastName"
                            label="Last Name"
                        />
                        {touched.lastName && errors.lastName && (
                            <p className="error">{errors.lastName}</p>
                        )}
                        <TextField 
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                        />
                        {touched.email && errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                        <TextField 
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                        />
                        {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                        <TextField 
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                        />
                        {touched.confirmPassword && errors.password && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}
                        <Button 
                            color="primary" 
                            type="submit"
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}

const RegistrationForm = withStyles(styles)(Form);

export default withFormik({
    mapPropsToValues({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || ""
        };
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .required("Please, enter first name."),
        lastName: Yup.string()
            .required("Please, enter last name."),
        email: Yup.string().email("Invalid email")
            .required("Please, enter a valid email"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters.")
            .max(16, "Password cannot be more than 16 characters.")
            .required("Please, enter a password between 8 and 16 characters."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match.")
            .required("Please, confirm password")
    }),
    handleSubmit(values, {props :{history}}) {
        const packet = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            roleId: "abc123"
        };
        axios.post(URL, packet)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", res.data.user.userId);
                localStorage.setItem("fname", res.data.user.firstName);
                history.push(`/dashboard/${localStorage.getItem("user")}`);
                // history.push(`/dashboard/${res.data.user.userId}`);
            })
            .catch(err => console.log(err));
    }
})(RegistrationForm)
