import { createContext, useContext } from "react";

// ✅ Step 1: Create Context
export const AuthContext = createContext();

// ✅ Step 2: Provider
export const AuthProvider = ({ children }) => {
  // ✅ storetokenInLS function defined here
  const storetokenInLS = (token) => {
    localStorage.setItem("token", token); // Store only the token string
  };

  return (
    <AuthContext.Provider value={{ storetokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Step 3: Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
