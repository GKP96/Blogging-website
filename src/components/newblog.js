
import '../css/stylesheet.css';
import BlogForm from './blogForm';


function NewBlog(props){
    return(
        <>
       <div className="new-blog">
       <BlogForm addBlogFunction={props.addBlogFunction} />
       </div>
        </>
    )
}
export default NewBlog;