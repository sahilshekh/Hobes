import React, { Fragment,useRef, useState, useEffect } from 'react'
  import "./loginSignup.css"
   import Loader from "../loader/loader"
  import { Link } from 'react-router-dom'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
 import { AiOutlineMail  } from 'react-icons/ai';
 import { RiLockPasswordLine  } from 'react-icons/ri';
 import {BiFace} from 'react-icons/bi'
 import {useDispatch,useSelector} from 'react-redux';
import {login,clearErrors} from '../../actions/userAction'
import {useAlert} from 'react-alert'
import {useNavigate} from 'react-router-dom'
function LoginSignUp() {
  const navigate = useNavigate();
  const alert = useAlert()
  const  dispatch=useDispatch()
    
  const {error,loading,isAuthenticate}=useSelector(state=>state.user) 
  const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState({
  name:"",
  email:"",
  password:"",

   
  })
  const {name,email,password} = user;

  const [avatar, setAvatar] = useState()
  const [avatarPreview, setAvatarPreview] = useState("./logo192.png")

 const loginTab = useRef()
  const registerTab = useRef()
  const switcherTab = useRef()


  const loginSubmit = (e) => {
    e.preventDefault()
     dispatch(login(loginEmail,loginPassword));  

}
 const registerSubmit =(e)=>{
      e.preventDefault()
      const  myForm =new FormData()
  myForm.set("name",name)
  myForm.set("email",email)
  myForm.set("password",password)
  myForm.set("avatar",avatar)
  console.log("signUp Form Submitted")
 }

 const registerDataChange =(e)=>{


   if(e.target.name ==="avatar"){
     const reader = new FileReader();

     reader.onload = () => {
        if(reader.readyState===2){
          setAvatarPreview(reader.result)
          setAvatar(reader.result)
        }
    };
    reader.readAsDataURL(e.target.files[0])
   } else{
      setUser({...user,[e.target.name]:e.target.value})
   }
  }

useEffect(()=>{
  if(error){
    alert.error(error)
    dispatch(clearErrors())
  }
  if(isAuthenticate){
    navigate("/account")
  }
},[error,dispatch,alert,isAuthenticate,navigate])

  const switchTabs = (e,tab) => {
   
    if(tab === "login"){
     switcherTab.current.classList.add ("shiftToNeutral")
      switcherTab.current.classList.remove("shiftToRight")

      loginTab.current.classList.remove("shiftToNeutralForm")
      registerTab.current.classList.remove("shiftToLeft")
    }
    if(tab==="signup"){
        switcherTab.current.classList.add("shiftToRight")
        switcherTab.current.classList.remove("shiftToNeutral")

      loginTab.current.classList.add("shiftToLeft")
      registerTab.current.classList.add("shiftToNeutralForm")
      
    }

  }

  return (
    <Fragment>
      {loading?<Loader/> :
      <Fragment>
      <div className='LoginSignUpContainer'>
         <div className='LoginSignUpBox'>


             <div> 
               <div className='login_signUp_toggle'>
                <p onClick={(e)=>switchTabs(e,"login")}>LOGIN</p>
                  <p onClick={(e)=>switchTabs(e,"signup")}>SIGNUP</p>
                </div>
                <button ref={switcherTab}></button>
            </div> 


            
            <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                <div className='loginEmail'>
                  {/* <MailOutlineIcon/> */}
                  <AiOutlineMail/>
                  <input type="email" placeholder='Email' required value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
                </div>
                <div className='loginPassword'>
                {/* <LockOpenIcon/> */}
                <RiLockPasswordLine/>
                  <input type="password" placeholder='Password' required value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
                </div>
                <Link to="/password/forget">Forget Password ?</Link>
                  <input type="submit" value="Login" className='loginBtn' />
            </form>




            <form
              className="signUpForm"
              ref={registerTab}
              encType="multipart/form-data"
              onSubmit={registerSubmit}
            >
              <div className="signUpName">
                <BiFace />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signUpEmail">
                <AiOutlineMail />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signUpPassword">
                {/* <LockOpenIcon /> */}
                <RiLockPasswordLine/>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
              </div>

              <div id="registerImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </div>
              <input type="submit" value="Register" className="signUpBtn" />
            </form> 
         </div>
      </div>
  </Fragment>
      }
    </Fragment>
   )
}
  
export default LoginSignUp
