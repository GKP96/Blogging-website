import {useState} from 'react'; 
import '../css/stylesheet.css';
// we can only use hooks inside the functional component.
function Blog(props){

    let [title,setTitle] = useState(props.itemList.title);

    const onClickHandler = ()=>{
        console.log("Clicked !");
        setTitle("Updated the title");
        console.log(title);
       //console.log(setTitle);

    }   
    return (
        <div className='blogContainer' style={{border:"solid" }}>
        <h1>{props.itemList.author}</h1>
        <h3 style={{display:"inline"}}>{props.itemList.title +" "}</h3>
        <h3 style={{display:"inline"}}>{props.itemList.subTitle}</h3>
        <p>{props.itemList.content}</p>
        <h3>{props.itemList.id}</h3>
        <button onClick={onClickHandler}>Change tittle</button>
     </div>
     )
}
export default Blog;