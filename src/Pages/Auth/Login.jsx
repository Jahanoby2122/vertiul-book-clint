import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import LottieLogin from '../../components/LottieeLogin';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const {loginUser,googleSignIn}=useContext(AuthContext)


	const handleLogin = (e)=>{
		e.preventDefault()
		const form = e.target;
		const email = form.email.value ;
		const password = form.password.value ;
		console.log(email,password)
		loginUser(email,password)
			.then(result=>{
				console.log(result)
				navigate(location.state || '/')
				toast.success("Signin succesfully")

			})
			.catch(error=>{
				console.log(error)
			})

	}


	// googlesignIN

	const handleGoogleSignin= ()=>{
		googleSignIn()
			.then(result=>{
				console.log(result)
				navigate(location.state || '/')
				toast.success("Signin succesfully")
				


			})
			.catch(error=>{
				console.log(error)
			})

	}





    return (
        <>

<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-700 px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white dark:bg-gray-500 rounded-xl shadow-lg overflow-hidden">

    {/* Left side: Lottie animation */}
    <div className="flex items-center justify-center p-6 bg-gray-200 dark:bg-gray-400">
      <LottieLogin className="w-full max-w-xs" />
    </div>

    {/* Right side: Login form */}
    <div className="w-full p-8 space-y-6 dark:text-gray-800">
      <h1 className="text-3xl font-bold text-center dark:text-gray-900">Login</h1>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
        </div>

        <button type="submit" className="w-full p-3 font-semibold text-white bg-violet-600 rounded-md hover:bg-violet-700 transition-colors">
          Sign in
        </button>
      </form>

      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm dark:text-gray-600">or sign in with</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-4">
        <button onClick={handleGoogleSignin} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200 transition">
          <FaGoogle size={26} className="text-red-500" />
        </button>
      </div>

      <p className="text-xs text-center dark:text-gray-600">
        Don't have an account?
        <a href="#" className="ml-1 underline text-violet-700 hover:text-violet-900">Sign up</a>
      </p>
    </div>
  </div>
</div>

            
        </>
    );
};

export default Login;