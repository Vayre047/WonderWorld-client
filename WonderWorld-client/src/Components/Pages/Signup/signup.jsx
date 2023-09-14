import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMesage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, email, password };

        axios.post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
            navigate('/login');
        })
        .catch((error) => {
            let errorDescription = "There is an error";
            if (error.response) {
                errorDescription = error.response.data.message;
            }
            setErrorMessage(errorDescription);
        })
    }

    return (
        <div className="w-full max-w-xs flex flex-col justify-center items-center positionForm">
            <h1 className="text-center text-4xl pt-5">Create An Account</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
                        Name:
                    <input type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                <label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
                        Email:
                    <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                <label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
                        Password:
                    <input type="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                <button type="submit" className="border border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Sign Up</button>
                    {errorMesage && <p>{errorMesage}</p>}
            </form>
        </div>
    );
}

export default SignUp;