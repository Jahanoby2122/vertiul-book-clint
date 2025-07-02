import React, { use, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import LottieSignup from '../../components/LottieSignup';
import { FaGoogle } from "react-icons/fa";


const Signup = () => {

	const navigate = useNavigate()
	const { createUser,googleSignIn,updateUser } = useContext(AuthContext);

	const googleLogin = ()=>{
		googleSignIn()
		.then(res=> {
			console.log(res)
			 toast.success("Succesfully signup");
			navigate('/')
			toast.success('signup succesfully')
		})
		.catch(error=> console.log(error))
	}



const handleSignup = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;


      if (!/^.{6,}$/.test(password)) {
      // alert('Password must be 6 charst');
      toast.success("password must be 6");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      toast.error("You need strong password");
      return;
    }

  // Firebase user creation
  createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
          if (result.user) {
          updateUser({ displayName: name, photoURL: photo }).then((result) => {
            //  setUser({...user,displayName:name,photoURL:photo})
            toast.success(" signup succesfully");
            navigate(location?.state || "/");
          });
        }

      


      const userInfo = {
        name,
        email,
        profile_photo: photo
      };

      // MongoDB save via axios
      axios.post('https://vertiul-books.vercel.app/users', userInfo)
        .then(res => {
          console.log("User saved to DB:", res.data);
          
        })
        .catch(err => {
          console.error("MongoDB error:", err);
        });

      console.log("Firebase user created:", loggedUser);
    })
    .catch(error => {
      console.log("Firebase error:", error);
    });
}


    return (
//         <div className='w-8/12 mx-auto'>
//  <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
//   {/* Left Side: Lottie Animation */}
//   <div className="w-full md:w-1/2 p-8">
//     <LottieSignup />
//   </div>

//   {/* Right Side: Signup Form */}
//   <div className="w-full md:w-1/2 max-w-md p-8 space-y-4 rounded-xl bg-white dark:bg-gray-700 shadow-lg mx-auto">
//     <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Signup</h1>
//     <form onSubmit={handleSignup} className="space-y-6">
//       <div className="space-y-1 text-sm">
//         <label className="block text-gray-700 dark:text-gray-300">Name</label>
//         <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:text-white focus:border-violet-500" />
//       </div>
//       <div className="space-y-1 text-sm">
//         <label className="block text-gray-700 dark:text-gray-300">Email</label>
//         <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:text-white focus:border-violet-500" />
//       </div>
//       <div className="space-y-1 text-sm">
//         <label className="block text-gray-700 dark:text-gray-300">Photo URL</label>
//         <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:text-white focus:border-violet-500" />
//       </div>
//       <div className="space-y-1 text-sm">
//         <label className="block text-gray-700 dark:text-gray-300">Password</label>
//         <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:text-white focus:border-violet-500" />
//         <div className="text-right text-xs text-gray-500 dark:text-gray-400">
//           <a href="#">Forgot Password?</a>
//         </div>
//       </div>
//       <button className="block w-full p-3 text-center font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700 transition duration-200">Signup</button>
//     </form>
//     <div className="flex items-center pt-4 space-x-1">
//       <div className="flex-1 h-px bg-gray-300"></div>
//       <p className="text-sm text-gray-600 dark:text-gray-400">Or Signup with</p>
//       <div className="flex-1 h-px bg-gray-300"></div>
//     </div>
//     <div className="flex justify-center space-x-4">
//       <button onClick={googleLogin} aria-label="Log in with Google" className="p-3 rounded-full bg-white shadow hover:shadow-md">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
//           <path d="..."></path>
//         </svg>
//       </button>
//     </div>
//     <p className="text-xs text-center text-gray-600 dark:text-gray-300">
//       Already have an account? <a href="#" className="underline text-violet-600">Login</a>
//     </p>
//   </div>
// </div>

//         </div>



<div className="md:w-8/12 px-5 md:px-0 mx-auto py-20">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left: Lottie Animation */}
        <div className="w-full md:w-1/2 p-8">
          <LottieSignup />
        </div>

        {/* Right: Signup Form */}
        <div className="w-full md:w-1/2 max-w-md p-8 space-y-4 rounded-xl border border-blue-500 mx-auto">
          <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
          <form onSubmit={handleSignup} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-1 text-sm">
              <label className="block  ">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your Name" 
                className="w-full px-4 py-3 rounded-md border-2 border-gray-200   focus:border-blue-500" 
              />
            </div>

            {/* Photo URL Input */}
            <div className="space-y-1 text-sm">
              <label className="block ">Photo URL</label>
              <input 
                type="text" 
                name="photo" 
                placeholder="Enter your Photo URL" 
                className="w-full px-4 py-3 rounded-md border-2 border-gray-200     focus:border-violet-500" 
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1 text-sm">
              <label className="block">Email address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your Email" 
                className="w-full px-4 py-3 rounded-md   border-2 border-gray-200  focus:border-violet-500" 
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1 text-sm">
              <label className="block ">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                className="w-full px-4 py-3 rounded-md  border-2 border-gray-200  focus:border-violet-500" 
              />
           
            </div>

            {/* Password Requirements */}
            <div className="mt-4">
              <hr className="border-gray-300 mb-4" />
              <h3 className="font-semibold mb-2">
                Create a password that:
              </h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-start">
                  <span>✅</span>
                  <span className="ml-1">contains at least 8 characters</span>
                </li>
                <li className="flex items-start">
                  <span>✅</span>
                  <span className="ml-1">contains both lower (a-z) and upper case letters (A-Z)</span>
                </li>
                <li className="flex items-start">
                  <span>✅</span>
                  <span className="ml-1">contains at least one number (0-9) or a symbol</span>
                </li>
                <li className="flex items-start">
                  <span>✅</span>
                  <span className="ml-1">does not contain your email address</span>
                </li>
              </ul>
            </div>

            {/* Sign Up Button */}
            <button className="block w-full p-3 text-center font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700 transition duration-200">
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Or Sign Up with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Sign Up */}
          <div className="flex justify-center space-x-4">
            <button onClick={googleLogin} aria-label="Log in with Google" className="p-3 rounded-full bg-white shadow hover:shadow-md">
              {/* ... Google SVG ... */}
              <FaGoogle />
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-xs text-center text-gray-600 dark:text-gray-300">
            Already have an account? <a href="#" className="underline text-violet-600">Sign In</a>
          </p>
        </div>
      </div>
    </div>





    );
};

export default Signup;