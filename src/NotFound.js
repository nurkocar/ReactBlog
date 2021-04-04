import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>The page is not found</p>
            <Link to = '/' >Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;