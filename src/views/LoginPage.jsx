import { useFormik } from "formik";
import { schema } from "../schema";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    // initial values of the form data
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    // it works when form submit
    onSubmit: async (values, actions) => {
      // api simülation
      await new Promise((resolve) => {
        setTimeout(resolve, 1900);
      });

      //   send user to local
      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));

      // redirect to homepage
      navigate("/home");

      //   clears the form
      actions.resetForm();
    },
    // validation schema
    validationSchema: schema,
  });
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/c-logo.png" alt="logo" />
          <h2>Coin World</h2>
        </div>
        {/* form field */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}

          <button disabled={formik.isSubmitting} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// array for inputs
const inputs = [
  { label: "Email", name: "email", type: " email" },
  { label: "Age", name: "age", type: "number" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "confirmPassword", type: "text" },
];

// component for input field
const InputField = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      {/* if there's an email error it presses the screen*/}
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
