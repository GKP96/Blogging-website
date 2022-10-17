import Blog from "./blog";
import '../css/stylesheet.css';
function Blogs(props){
    return (
        <div className="blogs">
            <h1> My Blog List !</h1>
            <ul className="blog">
                {
                props.blogList.map( item =>{
                 return(
                    <Blog itemList={item} />
                 )
                }
                  )    
        }
            </ul>

        </div>
    )
}

export default Blogs;