import { useState } from "react";
import loginImg from "../assets/images/login.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // ✅ FIX: Destructure storeTokenInLS properly
  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;

    const fieldMap = {
      user_email: "email",
      user_password: "password",
    };

    const stateKey = fieldMap[name];

    setUser({
      ...user,
      [stateKey]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const response_data = await response.json();

      if (response.ok) {
        console.log("✅ Login Success:", response_data);

        // ✅ Store token
        // ✅ Store token string only
        storetokenInLS(response_data.token);


        // Reset form
        setUser({ email: "", password: "" });

        // Navigate to homepage or dashboard
        navigate("/home");
      } else {
        console.error("❌ Login failed:", response_data.message || "Unknown error");
        alert(response_data.message || "Login failed. Please try again.");
      }

    } catch (error) {
      console.log("login error", error);
      alert("Network error or server not reachable.");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={loginImg}
              alt="login visual"
              className="w-[400px] h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Login Form */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2 capitalize">
              Login Form
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <div>
                <label htmlFor="user_email" className="block text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="user_password" className="block text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="user_password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
