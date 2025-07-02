// // import React, { useContext } from 'react';
// // import { AuthContext } from '../../Provider/AuthProvider';
// // import { useLocation, useNavigate } from 'react-router';
// // import { toast } from 'react-toastify';
// // import LottieLogin from '../../components/LottieeLogin';
// // import { FaGoogle } from "react-icons/fa";

// // const Login = () => {
// // 	const navigate = useNavigate()
// // 	const location = useLocation()

// // 	const {loginUser,googleSignIn}=useContext(AuthContext)


// // 	const handleLogin = (e)=>{
// // 		e.preventDefault()
// // 		const form = e.target;
// // 		const email = form.email.value ;
// // 		const password = form.password.value ;
// // 		console.log(email,password)
// // 		loginUser(email,password)
// // 			.then(result=>{
// // 				console.log(result)
// // 				navigate(location.state || '/')
// // 				toast.success("Signin succesfully")

// // 			})
// // 			.catch(error=>{
// // 				console.log(error)
// // 			})

// // 	}


// // 	// googlesignIN

// // 	const handleGoogleSignin= ()=>{
// // 		googleSignIn()
// // 			.then(result=>{
// // 				console.log(result)
// // 				navigate(location.state || '/')
// // 				toast.success("Signin succesfully")
				


// // 			})
// // 			.catch(error=>{
// // 				console.log(error)
// // 			})

// // 	}





// //     return (
// //         <>

// // <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-700 px-4">
// //   <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white dark:bg-gray-500 rounded-xl shadow-lg overflow-hidden">

// //     {/* Left side: Lottie animation */}
// //     <div className="flex items-center justify-center p-6 bg-gray-200 dark:bg-gray-400">
// //       <LottieLogin className="w-full max-w-xs" />
// //     </div>

// //     {/* Right side: Login form */}
// //     <div className="w-full p-8 space-y-6 dark:text-gray-800">
// //       <h1 className="text-3xl font-bold text-center dark:text-gray-900">Login</h1>

// //       <form onSubmit={handleLogin} className="space-y-6">
// //         <div className="space-y-1 text-sm">
// //           <label htmlFor="email" className="block dark:text-gray-600">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             required
// //             className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
// //           />
// //         </div>

// //         <div className="space-y-1 text-sm">
// //           <label htmlFor="password" className="block dark:text-gray-600">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             required
// //             className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
// //           />
// //           <div className="flex justify-end text-xs dark:text-gray-600">
// //             <a href="#" className="hover:underline">Forgot Password?</a>
// //           </div>
// //         </div>

// //         <button type="submit" className="w-full p-3 font-semibold text-white bg-violet-600 rounded-md hover:bg-violet-700 transition-colors">
// //           Sign in
// //         </button>
// //       </form>

// //       <div className="flex items-center pt-4 space-x-2">
// //         <div className="flex-1 h-px bg-gray-300"></div>
// //         <p className="text-sm dark:text-gray-600">or sign in with</p>
// //         <div className="flex-1 h-px bg-gray-300"></div>
// //       </div>

// //       <div className="flex justify-center space-x-4">
// //         <button onClick={handleGoogleSignin} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200 transition">
// //           <FaGoogle size={26} className="text-red-500" />
// //         </button>
// //       </div>

// //       <p className="text-xs text-center dark:text-gray-600">
// //         Don't have an account?
// //         <a href="#" className="ml-1 underline text-violet-700 hover:text-violet-900">Sign up</a>
// //       </p>
// //     </div>
// //   </div>
// // </div>

            
// //         </>
// //     );
// // };

// // export default Login;










// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { useLocation, useNavigate, Link } from 'react-router';
// import { toast } from 'react-toastify';
// // import LottieLogin from '../../components/LottieLogin';
// import { FcGoogle } from "react-icons/fc";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import LottieLogin from '../../components/LottieeLogin';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
  
//   const { loginUser, googleSignIn } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
    
//     loginUser(email, password)
//       .then(result => {
//         navigate(location.state || '/');
//         toast.success("Signed in successfully");
//       })
//       .catch(error => {
//         toast.error("Invalid credentials. Please try again.");
//         console.log(error);
//       });
//   };

//   const handleGoogleSignin = () => {
//     googleSignIn()
//       .then(result => {
//         navigate(location.state || '/');
//         toast.success("Signed in successfully");
//       })
//       .catch(error => {
//         toast.error("Google sign-in failed");
//         console.log(error);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Left side: Lottie animation */}
//           <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-8">
//             <div className="w-full max-w-xs">
//               <LottieLogin />
//               <div className="mt-6 text-center text-white">
//                 <h3 className="text-xl font-bold">Welcome Back!</h3>
//                 <p className="mt-2 opacity-80">Sign in to access your personalized dashboard</p>
//               </div>
//             </div>
//           </div>

//           {/* Right side: Login form */}
//           <div className="w-full p-8 sm:p-10">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-gray-800">Login to Your Account</h1>
//               <p className="text-gray-600 mt-2">Enter your credentials to continue</p>
//             </div>

//             <form onSubmit={handleLogin} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="you@example.com"
//                   required
//                   className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <div className="flex justify-between items-center mb-1">
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                  <div>
//                    <button 
//                     type="button" 
//                     className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <>
//                         <AiFillEyeInvisible /> Hide
//                       </>
//                     ) : (
//                       <>
//                         <AiFillEye /> Show
//                       </>
//                     )}
//                   </button>
//                  </div>

//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                   required
//                   className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input 
//                     id="remember-me" 
//                     name="remember-me" 
//                     type="checkbox" 
//                     className="checkbox checkbox-sm checkbox-primary"
//                     checked={rememberMe}
//                     onChange={() => setRememberMe(!rememberMe)}
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                     Remember me
//                   </label>
//                 </div>
//                 <div className="text-sm">
//                   <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>

//               <button 
//                 type="submit" 
//                 className="btn btn-primary w-full py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
//               >
//                 Sign in
//               </button>
//             </form>

//             <div className="mt-8">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or continue with</span>
//                 </div>
//               </div>
              
//               <div className="mt-6">
//                 <button 
//                   onClick={handleGoogleSignin}
//                   className="btn btn-outline w-full flex items-center justify-center gap-3 py-3 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium"
//                 >
//                   <FcGoogle className="text-xl" />
//                   <span>Sign in with Google</span>
//                 </button>
//               </div>
//             </div>

//             <div className="mt-8 text-center">
//               <p className="text-gray-600 text-sm">
//                 Don't have an account?{' '}
//                 <Link 
//                   to="/signup" 
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router'; // FIXED
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import LottieLogin from '../../components/LottieeLogin';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const { loginUser, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email, password)
      .then(() => {
        navigate(location.state || '/');
        toast.success("Signed in successfully");
      })
      .catch(error => {
        toast.error("Invalid credentials. Please try again.");
        console.error(error);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state || '/');
        toast.success("Signed in successfully");
      })
      .catch(error => {
        toast.error("Google sign-in failed");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex py-10 items-center justify-center  p-4">
      <div className="w-full max-w-5xl  overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left side: Lottie animation */}
          <div className="hidden md:flex items-center justify-center p-8">
            <div className="w-full max-w-lg">
              <LottieLogin />
              <div className="mt-6 text-center text-white">
                <h3 className="text-xl font-bold">Welcome Back!</h3>
                <p className="mt-2 opacity-80">Sign in to access your personalized dashboard</p>
              </div>
            </div>
          </div>

          {/* Right side: Login form */}
          <div className="w-full border border-blue-500 p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Login to Your Account</h1>
              <p className="text-gray-600 mt-2">Enter your credentials to continue</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Password Input with toggle */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="input input-bordered w-full pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center justify-center mt-6 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                </div>
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox" 
                    className="checkbox checkbox-sm checkbox-primary"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit button */}
              <button 
                type="submit" 
                className="btn btn-primary w-full py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              {/* Google Sign-in */}
              <div className="mt-6">
                <button 
                  onClick={handleGoogleSignin}
                  className="btn btn-outline w-full flex items-center justify-center gap-3 py-3 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium"
                >
                  <FcGoogle className="text-xl" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>

            {/* Signup link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
