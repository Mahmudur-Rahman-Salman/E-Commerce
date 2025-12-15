import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

export default useAuth;


// First of all i created a context named AuthContext in a separate file (AuthContext.jsx) to manage authentication state across the application. The AuthProvider component wraps the application and provides the authentication state and functions to its children.
// Then, I created a custom hook named useAuth that utilizes the useContext hook to access the AuthContext. This hook checks if the context is available and throws an error if it's not, ensuring that it is used within the AuthProvider.
// Finally, I exported the useAuth hook so that it can be easily imported and used in any component that needs access to authentication state or functions. // This approach promotes code reusability and keeps the authentication logic centralized.    