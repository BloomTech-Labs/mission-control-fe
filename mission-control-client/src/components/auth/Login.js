import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
const URL = "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";

function LoginForm({
    errors,
    touched,
    values,
    handleSubmit,
    status
}) {
    const history = useHistory();
    return (
        <Form
            history={history}
        >
            <Field 
                type="email"
                name="email"
            />
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}
            <Field 
                type="password"
                name="password"
            />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            <button type="submit">Submit</button>
        </Form>      
    );
}

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
