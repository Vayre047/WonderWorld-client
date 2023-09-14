import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

function EditProjectPage() {
  // State Declaration 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {projectId} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API_URL}/api/projects/${projectId}`)
    .then((response)=>{
        const oneProject = response.data; 
        setTitle(oneProject.title);
        setDescription(oneProject.description);
    })
    .catch((error)=>{
        console.log(error);
    })
  }, [projectId]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const requestBody = {title, description};

    axios.put(`${API_URL}/api/projects/${projectId}`, requestBody)
        .then(()=>{
            // navigate === redirect
            navigate(`/projects/${projectId}`)
        })
        .catch((error)=>{
            console.log(error);
        })
  }

  const deleteProject = () =>{
    axios.delete(`${API_URL}/api/projects/${projectId}`)
    .then(()=>{
        navigate('/');
    })
    .catch((error)=>{
        console.log(error);
    })
  }

  return(
    <div>
        <h3>Edit Project</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={title}
                onChange={(e)=> setTitle(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={description}
                onChange={(e)=> setDescription(e.target.value)} />
            </label>
            <button type="submit">Edit</button>
        </form>
        <button onClick={deleteProject}>Delete Project</button>
    </div>
  )
}

export default EditProjectPage