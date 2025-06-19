import { useState } from "react";
import registerImg from "../assets/images/register.png";
import { useNavigate } from "react-router-dom"; // ✅ Corrected import
import { useAuth } from "../store/Auth";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

 

  const navigate = useNavigate(); // ✅ Corrected usage
 const {storeTokenInLS} = useAuth();
  // rest of your code...


  const handleInput = (e) => {
    const { name, value } = e.target;

    // Map non-standard names to actual state keys
    const fieldMap = {
      reg_username: "username",
      reg_email: "email",
      reg_phone: "phone",
      reg_password: "password",
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
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const response_data = await response.json();
        console.log("✅ Register Success:", response_data);
        storeTokenInLS(response_data.token);
        // localStorage.setItem("token",response_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }



    } catch (error) {
      console.log('register error', error)
    }

  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={registerImg}
              alt="a nurse with a cute look"
              className="w-[400px] h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Registration Form */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2 capitalize">
              registration form
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <div>
                <label htmlFor="reg_username" className="block text-gray-600 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="reg_username"
                  value={user.username}
                  onChange={handleInput}
                  placeholder="Enter your username"
                  autoComplete="off"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="reg_email" className="block text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="reg_email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  autoComplete="new-email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="reg_phone" className="block text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="number"
                  name="reg_phone"
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="Enter your phone number"
                  autoComplete="new-tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="reg_password" className="block text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="reg_password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
