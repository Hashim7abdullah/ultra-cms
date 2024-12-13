import  { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(backendUrl + "/api/user/forgot-password", {
          email,
        })
        .then((response) => {
          console.log(response);

          if (response.data.success) {
            alert("Check your email for password reset link");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-full h-[50vh] max-w-sm p-8 space-y-3 flex flex-col justify-center rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-xl font-bold text-center">Forgot Password?</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
