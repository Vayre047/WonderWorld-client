// src/Pages/EditReview/EditReview.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './editReview.css';

const API_URL = "http://localhost:5005";

function EditReview() {
    const [content, setContent] = useState("");
    const { reviewId, wonderId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/api/wonder/${wonderId}/reviews/${reviewId}`)
            .then((response) => {
                const oneReview = response.data;
                setContent(oneReview.content); // Set the current content in the state
            })
            .catch((error) => { console.log(error) })
    }, [reviewId, wonderId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { content };

        axios.put(`${API_URL}/api/wonder/${wonderId}/reviews/${reviewId}`, requestBody)
        .then(() => {
            navigate(`/wonder/${wonderId}`);
        })
        .catch((error) => { console.log(error) });
    }

    return (
        <div>
            <h3 className="text-center text-4xl pt-5">Edit Review</h3>
            <form onSubmit={handleSubmit} className="">
                <div className="formReviewContainer">
                    <label className="textAreaConfiguration pt-3 pb-3">
                        Description:
                        <textarea className="h-32 w-72" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                    </label>
                    <button type="submit" className="editBtn border-green-600 hover:border-green-900 bg-green-600 hover:bg-green-900 text-slate-100 rounded">
                        <p className="m-1">Update Review</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditReview;
