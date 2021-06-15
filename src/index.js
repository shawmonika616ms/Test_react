import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const para = {
//   color : 'red',
//   textAlign : "center"
// }


// const img_src="girl.jpg";
// const links = 'https://www.google.com';

// var myname="Monika Shaw";
// const d=new Date()
// const a=d.toLocaleDateString();
// const t = new Date().toLocaleTimeString()

// ReactDOM.render(

// <React.Fragment>

//   {/* <h1 contentEditable="true">{`my name is${myname}`}</h1> */}
//   <h1 className="first">Reacts Development</h1>
//   <p style = {para}>Current Date is : {a}</p>
//   <p>Current Time is :{t} </p>
//   <a href={links} target="_blank">
//       <img src={img_src} alt="Girl image"/>
// </a>

// </React.Fragment>,
  
//    document.getElementById("root")
//   );

const cstyle ={
  

}

const gm= new Date().getHours();
let greet= ''

if(gm >=1 && gm<12)
{
    greet = 'Morning';
    cstyle.color = 'Green';
}

else if (gm >=12 && gm <20)
{
    greet = 'Evening';
    cstyle.color = 'Yellow';
}
else 
{
    greet= 'Good night';
    cstyle.color='Red';
}




ReactDOM.render
(
<React.Fragment>

 <h1>Good, <span style={cstyle}>{greet}</span></h1>

</React.Fragment>
,document.getElementById("root"));

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
