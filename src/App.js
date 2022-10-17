
import Blogs from './components/blogs';
import Footer from './components/footer';
import Header from './components/header';
import NewBlog from './components/newblog';
import { useState } from 'react';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
// JS : imerative approach.
// const papa = document.createElement('p');
// papa.textContent = "Introduction to js";
// document.getElementsById('root').append(papa);

let defaultBlogList = [
  {
      id: "uniqueId-1",
      title: "Blog Title",
      subtle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },
  {
      id: "uniqueId-2",
      title: "Blog Title",
      subtle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-3",
      title: "Blog Title",
      subtle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-4",
      title: "Blog Title",
      subtle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-5",
      title: "Blog Title",
      subTitle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-6",
      title: "Blog Title",
      subTitle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-7",
      title: "Blog Title",
      subTitle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-8",
      title: "Blog Title",
      subTitle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },{
      id: "uniqueId-9",
      title: "Blog Title",
      subTitle: "Sub Title",
      content: "This is going to be very long line.",
      author: "Username of the user",
  },

]


function App() {
    // yha tak sara kuchh add kar diye.
    let [blogList,setBlogList]= useState(defaultBlogList);
    let addNewBlog = (newBlogObject)=>{
        setBlogList([...blogList,newBlogObject]);
        }
  return (
    <>
    <Routes>
        <Route path='/newBlog' element={<NewBlog addBlogFunction={addNewBlog}/>}></Route>
        <Route path='/' element={ <Blogs blogList={blogList} />}></Route>
    </Routes>
  <Header/>
  <Footer/>
 </>
 );
}   
export default App;
