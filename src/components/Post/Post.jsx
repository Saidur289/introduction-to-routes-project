import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const userStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '20px'
    }
    const navigate = useNavigate()
    const handleShow = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>My Post Id :{id}</h2>
            <p>{title}</p>
            <Link to = {`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShow}>Show Full Details</button>
            
        </div>
    );
};

export default Post;