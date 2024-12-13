import  { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const { token } = useParams();

  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const response = await axios.post(
            `${backendUrl}/api/user/reset-password/${token}`,
            {
              password,
              confirmPassword,
            }
          );

      if (response.data.success) {
        // Navigate to login or show success message
        console.log(response.data);
        
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-full min-h-[60vh] max-w-sm p-8 space-y-3 flex flex-col justify-center rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-xl font-bold text-center">Reset Password</h1>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block dark:text-gray-600">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => togglePasswordVisibility("password")}
              >
                {showPassword ? (
                  <EyeOff className="text-gray-500" size={20} />
                ) : (
                  <Eye className="text-gray-500" size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-1 text-sm relative">
            <label
              htmlFor="confirmPassword"
              className="block dark:text-gray-600"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {showConfirmPassword ? (
                  <EyeOff className="text-gray-500" size={20} />
                ) : (
                  <Eye className="text-gray-500" size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
