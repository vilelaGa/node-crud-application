import "./App.css";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Axios from "axios";

function App() {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:12345/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleClickRegister = (values) => {
    Axios.post("http://localhost:12345/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };
  // const handleClickRegister = (values) => {
  //   console.log(values);
  // };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Email invalido")
      .required("Campo email obrigatorio"),
    password: yup
      .string()
      .min(8, "Minimo 8 digitos")
      .required("Senha obrigatorio"),
  });

  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("Email invalido")
      .required("Campo email obrigatorio"),
    password: yup
      .string()
      .min(8, "Minimo 8 digitos")
      .required("Senha obrigatorio"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "A senhas não são iguais")
      .min(8, "Minimo 8 digitos")
      .required("E preciso confirmar a senha"),
  });

  return (
    <div>
      <h1 className="text-center mb-5 mt-5">Login</h1>

      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="login-form-group">
                  <Field
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="text-danger"
                  />
                </div>

                <div className="login-form-group mt-3">
                  <Field
                    name="password"
                    className="form-control"
                    placeholder="Senha"
                  />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="text-danger"
                  />
                </div>

                <button className="btn btn-primary mt-3" type="submit">
                  Login
                </button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </Form>
      </Formik>

      {/* CADASTRO */}

      <h1 className="text-center mb-5 mt-5">Cadastro</h1>

      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="login-form-group">
                  <Field
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="text-danger"
                  />
                </div>

                <div className="login-form-group mt-3">
                  <Field
                    name="password"
                    className="form-control"
                    placeholder="Senha"
                  />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="text-danger"
                  />
                </div>

                <div className="login-form-group mt-3">
                  <Field
                    name="passwordConfirm"
                    className="form-control"
                    placeholder="Confirme sua senha"
                  />
                  <ErrorMessage
                    component="span"
                    name="passwordConfirm"
                    className="alert"
                  />
                </div>

                <button className="btn btn-primary mt-3" type="submit">
                  Cadastrar
                </button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
