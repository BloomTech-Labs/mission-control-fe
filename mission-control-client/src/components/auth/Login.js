import React from "react";
import axios from "axios";
import {withStyles} from "@material-ui/core";
import {withFormik} from "formik";
import {useHistory, Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
const URL = "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";

const styles = () => ({
    background: {
        background: "#E5E5E5"
    },
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
        width: "119px",
        height: "43px",
        left: "218.5px",
        top: "313.5px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "36px",
        lineHeight: "43px",
        textAlign: "center",
        letterSpacing: "0.06em",
        color: "#0051BE"
    },
    emailInput: {
        position: "absolute",
        width: "576px",
        height: "77px",
        left: "217.5px",
        top: "518.5px",
        background: "#F4F5F9"
    },
    passwordInput: {
        position: "absolute",
        width: "576px",
        height: "77px",
        left: "217.5px",
        top: "687.5px",
        background: "#F4F5F9"
    },
    dontHave: {
        position: "absolute",
        width: "310px",
        height: "22px",
        left: "218.5px",
        top: "404.5px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "22px",
        letterSpacing: "0.06em",
        color: "#313131"
    },
    button: {
        position: "absolute",
        width: "152px",
        height: "48px",
        left: "217.5px",
        top: "887.5px",
        background: "#0051BE",
        borderRadius: "5px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#FFFFFF"
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
            <div className={classes.background}>
                <div className={classes.container}>
                <h1 className={classes.header}>
                    Sign in
                </h1>
                <p className={classes.dontHave}>
                    Don't have an account? <Link to="/register">Create One</Link>
                </p>
                <form
                    history={history}
                    onSubmit={handleSubmit}
                >
                        <CardContent>
                            <TextField
                                className={classes.emailInput} 
                                type="email"
                                name="email"
                            />
                            {touched.email && errors.email && (
                                <p className="error">{errors.email}</p>
                            )}
                            <TextField 
                                className={classes.passwordInput}
                                type="password"
                                name="password"
                            />
                            {touched.password && errors.password && (
                                <p className="error">{errors.password}</p>
                            )}
                            <Button
                                className={classes.button} 
                                color="primary"
                                type="submit"
                            >
                                LOG IN
                            </Button>
                        </CardContent>
                </form>
            </div>
        </div>
    );
}

const LoginForm = withStyles(styles)(Form);

export default withFormik({
    mapPropsToValues({
        history,
        email,
        password
    }) {
        return {
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Please, enter a valid email"),
        password: Yup.string()
            .required("Please, enter password.")
    }),
    handleSubmit(values, {setStatus, history}) {
        const packet = {
            email: values.email,
            password: values.password
        }
        axios.post(URL, packet)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", res.data.user.userId);
                localStorage.setItem("fname", res.data.user.firstName);
                history.push(`/dashboard/${localStorage.getItem("user")}`);
                // curious about the difference of security between these two
                // history.push(`/dashboard/${res.data.user.userId}`)
            })
    }
})(LoginForm)
