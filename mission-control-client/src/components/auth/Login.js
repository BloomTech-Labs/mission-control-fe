import React from "react";
import axios from "axios";
import {withStyles} from "@material-ui/core";
import {withFormik} from "formik";
import {useHistory, Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
const URL = "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";

const styles = () => ({});

function Form({
    classes,
    errors,
    touched,
    values,
    handleSubmit
}) {
    const history = useHistory();
    return (
        <div>
            <h1>
                Sign in
            </h1>
            <p>
                Don't have an account? <Link to="/register">Create One</Link>
            </p>
            <form
                history={history}
                onSubmit={handleSubmit}
            >
                <Card>
                    <CardContent>
                        <TextField 
                            type="email"
                            name="email"
                        />
                        {touched.email && errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                        <TextField 
                            type="password"
                            name="password"
                        />
                        {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
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
