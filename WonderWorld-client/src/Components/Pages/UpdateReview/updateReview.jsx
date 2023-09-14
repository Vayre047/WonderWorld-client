import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function UpdateReview() {
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
            <h3>Update your Review</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </label>
                <button type="submit">Update Review</button>
            </form>
        </div>
    );
}

export default UpdateReview;
