import React from 'react';
import { Link } from 'react-router';

// You'll need to import your images or define their paths
// For demonstration, I'm using placeholder image URLs.
// Replace these with your actual image paths.
// import image1 from './images/cyclists.jpg'; // Example: path to your first image
// import image2 from './images/surfer.jpg';    // Example: path to your second image
// import image3 from './images/baseball.jpg';   // Example: path to your third image
// import image4 from './images/runners.jpg';   // Example: path to your fourth image
// import image5 from './images/soccer.jpg';    // Example: path to your fifth image
// import image6 from './images/surfer2.jpg';   // Example: path to your sixth image


const blogPosts = [
  {
    id: 1,
    date: 'June 5, 2025',
    // image: image1,
    title: '5 Tips to Maximize Your Sports Event Experience',
    author: 'A Coach Haley',
    excerpt: 'Discover how to get the most out of every event you attend, from preparation to post-game networking.',
    link: '/blog/maximize-sports-event-experience',
  },
  {
    id: 2,
    date: 'May 20, 2025',
    // image: image2,
    title: 'Why Community Sports Matter More Than Ever',
    author: 'A Jordan Smith',
    excerpt: 'Explore the impact of local sports on health, happiness, and community spirit in today\'s world.',
    link: '/blog/community-sports-matter',
  },
  {
    id: 3,
    date: 'May 15, 2025',
    // image: image3,
    title: 'How to Organize a Successful Athletic Event',
    author: 'A EventPro Team',
    excerpt: 'A step-by-step guide for new organizers to plan, promote, and execute memorable sports events.',
    link: '/blog/organize-athletic-event',
  },
  {
    id: 4,
    date: 'May 1, 2025',
    // image: image4,
    title: 'Nutrition for Peak Performance: What Every Athlete Should Know',
    author: 'A Dr. Emily Chen',
    excerpt: 'Learn the essentials of sports nutrition to fuel your body and maximize your results on the field.',
    link: '/blog/nutrition-peak-performance',
  },
  {
    id: 5,
    date: 'April 20, 2025',
    // image: image5,
    title: 'Balancing Training and Recovery: The Secret to Success',
    author: 'A Coach Alex',
    excerpt: 'Find out how to structure your training and rest for optimal performance and injury prevention.',
    link: '/blog/training-recovery',
  },
  {
    id: 6,
    date: 'April 10, 2025',
    // image: image6,
    title: 'The Rise of Women in Sports: Breaking Barriers Together',
    author: 'A Samantha Lee',
    excerpt: 'Celebrate the achievements and stories of women athletes making history in the world of sports.',
    link: '/blog/women-in-sports',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl border border-gray-200">
            <figure className="relative w-full h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 badge badge-info text-white p-3">
                {post.date}
              </div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{post.author}</p>
              <p className="text-gray-700 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="card-actions justify-start">
                <Link to={post.link} className="link link-primary text-sm font-medium flex items-center">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;