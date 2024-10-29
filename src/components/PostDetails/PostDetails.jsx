import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {title, id} = post
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Post Information of Id {id}</h1>
            <p>{title}</p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;