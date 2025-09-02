import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import BookShelf from "../Pages/BookShelf";
import AddBook from "../Pages/AddBook";
import MyBook from "../Pages/MyBook";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import PopularBooks from "../Pages/PopularBooks";
import BookDetails from "../Pages/BookDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdateBook from "../Pages/UpdateBook";
import Review from "../Pages/Review";
import ErrorPages from "../Pages/ErrorPages";
import UpdateReview from "../components/UpdateReview";
import About from "../components/About";
import Loading from "../Pages/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/navbar",
        element: <Navbar></Navbar>,
      },
      {
        path: "/bookshelf",
        element: (
        
            
            <BookShelf></BookShelf>
        
        ),
        loader:()=> fetch('https://vertiul-books.vercel.app/books/'),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/mybook",
        element: (
          <PrivateRoute>
            {" "}
            <MyBook></MyBook>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("https://vertiul-books.vercel.app/books/"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "/",
        children: [
          {
            path: "/auth/signup",
            element: <Signup></Signup>,
          },
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
        ],
      },
      {
        path: "/bookdetials/:id",
        element: (
          
            <BookDetails></BookDetails>
          
        ),
        loader: ({ params }) =>
          fetch(`https://vertiul-books.vercel.app/books/${params.id}`),
      },
      {
        path: "updatebook/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`https://vertiul-books.vercel.app/books/${params.id}`),
      },
  
      {
        path:'/review/:id',
        element:<Review></Review>,
        loader:({params})=> fetch(`https://vertiul-books.vercel.app/review/${params.id}`)
     
      },
      {
        path:'/about',
        element:<About></About>

      },
      {
        path:'/updatereview/:id',
        element:<UpdateReview></UpdateReview>
      },
      
    ],
  },
]);
