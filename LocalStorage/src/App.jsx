import React from 'react'

const App = () => {
  // localStorage.clear()
  // localStorage.setItem("User","P.C.HAdiya");
  
  // const name = localStorage.getItem("User");
  // console.log(name);
  
  // const user = {
  //   "FullName" : "P.C.HAdiya",
  //   "Year" : 2004,
  // }

  // localStorage.clear()
  // localStorage.setItem("UserDetail",JSON.stringify(user));

  // const UserDetail = JSON.parse(localStorage.getItem("UserDetail"));
  // console.log(UserDetail);

  localStorage.removeItem("User");
  localStorage.removeItem("UserDetail");
  
  
  return (
    <div>
      
    </div>
  )
}

export default App
