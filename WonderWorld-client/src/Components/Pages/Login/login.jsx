import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/context.auth";
import './login.css';

const API_URL = "http://localhost:5005";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { email, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/wonder/card");
            })
            .catch((error) => {
                const errorMessage = error.response.data.message;
                setErrorMessage(errorMessage);
            })
    }

    return (
        <div className="w-full max-w-xs flex flex-col justify-center items-center positionForm">
            <h1 className=" text-center text-4xl pt-5">Log In</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="signUpField block text-xl text-black text-left text-sm font-bold mb-2">
                        Email:
                    <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                <label className="signUpField block text-xl text-black text-left text-sm font-bold mb-2 pb-4">
                        Password:
                    <input type="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                <button type="submit" className="border border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Log In</button>
                    <div>
                        {errorMessage && <p>{errorMessage}</p>}
                    <p className="text-black rounded font-bold py-4 px-4 focus:outline-none focus:shadow-outline">Do not have an account yet</p>
                    <Link to="/signup" className=" rounded text-blue font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Sign Up</Link>
                    </div>
            </form>
        </div>
    );
}

export default LogIn;