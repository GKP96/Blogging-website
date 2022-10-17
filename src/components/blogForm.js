import '../css/stylesheet.css';
import {useState} from 'react';

let BlogForm = (props)=>{
    let [enteredTitle,setTitle] = useState('');
    function titleChangeHandler(event){
       
        setTitle(event.target.value);
    }
    
    let [enteredSubTitle,setSubTitle] = useState('');
    function subTitleChangeHandler(event){
        
        setSubTitle(event.target.value);
    }
    let [enteredAuthor,setAuthor] = useState('');
    function authorChangeHandler(event){
       
        setAuthor(event.target.value);
    }
    let [enteredContent,setContent] = useState('');
    function contentChangeHandler(event){
      
        setContent(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        let newBlog ={
            id: Math.random().toString(),
            title:enteredTitle,
            subTitle:enteredSubTitle,
            author:enteredAuthor,
            content:enteredContent
        }
        props.addBlogFunction(newBlog);
        console.log(newBlog);

        let fetchOption = {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(newBlog)
        }

        fetch("http://localhost:8080/blog/addBlog",fetchOption)
        .then(response=> console.log(response))
        .catch(err=>console.error(err))

        setTitle('');
        setContent('');
        setAuthor('');
        setSubTitle('');

    }
   return(
    <form onSubmit={submitHandler} >
        <div className="outer-div">
        <div className="new-blog-outer-div">
        <div className="new-blog-inner-div">
            <label>Title</label><br></br>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        </div>
        <div className="new-blog-outer-div">
        <div className="new-blog-inner-div">
            <label>SubTitle</label><br></br>
            <input type="text" value={enteredSubTitle} onChange={subTitleChangeHandler} />
        </div>
        </div>
        <div className="new-blog-outer-div">
        <div className="new-blog-inner-div">
            <label>Author</label><br></br>
            <input type="text" value={enteredAuthor} onChange={authorChangeHandler}/>
        </div>
        </div>
        <div className="new-blog-outer-div">
        <div className="new-blog-inner-div">
            <label>Content</label><br></br>
            <input type="text" value={enteredContent} onChange={contentChangeHandler} />
        </div>
        </div>
        <div class="new-blog-action">
           <button id="btn" type="submit" >Add Blog</button>
        </div>
        </div>
    </form>
   
   )
}

export default BlogForm;