import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './createReview.css';

const API_URL = "http://localhost:5005";

function CreateReview() {
    const [content, setContent] = useState("");
    const { wonderId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {content}

        try {
            const storedToken = localStorage.getItem('authToken');
            await axios.post(
                `${API_URL}/api/wonder/${wonderId}/reviews`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                }
            ).then(() => {
                navigate(`/wonder/card`);
            });
            setContent('');
            
        } catch (error) {
            console.log(error)
        }
  };

    return (
        <div class="w-full max-w-xs flex flex-col justify-center items-center positionForm">
            <h3 className="text-center text-4xl pt-5">Create a Review</h3>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="formCreateReview pb-3 mb-4">
                    <label className="createReviewField block text-xl text-black text-left text-sm font-bold mb-2">
                        Description:
                    </label>
                    <textarea value={content} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setContent(e.target.value)} />
                    
                    <button type="submit" className="createBtn border-green-600 hover:border-green-900 bg-green-600 hover:bg-green-900 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                        <p>Create</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateReview;