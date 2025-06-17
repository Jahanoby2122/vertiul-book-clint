import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">

            {/* Hero Section */}
            <motion.div
                className="mb-20 bg-gradient-to-r from-blue-100 via-white to-purple-100 p-12 rounded-3xl shadow-xl flex flex-col items-center text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Welcome to BookPress</h1>
                <p className="text-lg text-gray-700 max-w-3xl">
                    Unlock the world of digital reading. BookPress is your all-in-one virtual library designed to inspire, educate, and transform learning through interactive eBooks and intelligent reading experiences.
                </p>
            </motion.div>

            {/* Vision - Mission - Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                <motion.div className="bg-blue-100 p-8 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
                    <p className="text-gray-700">
                        To make high-quality books and knowledge universally accessible in an immersive and digital-first format.
                    </p>
                </motion.div>

                <motion.div className="bg-purple-100 p-8 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        To redefine reading with virtual books enhanced by multimedia, AI, and community interaction for deeper engagement and better learning.
                    </p>
                </motion.div>

                <motion.div className="bg-green-100 p-8 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Our Values</h2>
                    <p className="text-gray-700">
                        Creativity, Accessibility, Lifelong Learning, and Digital Empowerment.
                    </p>
                </motion.div>
            </div>

            {/* Deeper Description */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Who We Are?</h2>
                <p className="max-w-5xl mx-auto text-lg text-gray-700">
                    BookPress is not just a digital book platform — it’s a knowledge movement. We blend the timeless experience of reading with 21st-century technology. From educational textbooks to fiction, BookPress offers curated content, smart annotation tools, immersive audio-visuals, and community reading spaces. We believe every book has the power to change minds, and we make that power digital, portable, and impactful.
                </p>
            </div>

            {/* Achievements */}
            <div className="mb-20">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                    <motion.div className="p-8 rounded-2xl shadow-xl bg-blue-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                            <CountUp end={100} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Virtual Books Published</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-purple-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-purple-600 mb-2">
                            <CountUp end={5000} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Active Readers</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-green-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-green-600 mb-2">
                            <CountUp end={120} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Contributing Authors</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-pink-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-pink-600 mb-2">
                            <CountUp end={98} duration={3} />%
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Reader Satisfaction</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-yellow-50 col-span-1 md:col-span-2" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-yellow-600 mb-2">
                            <CountUp end={25} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Academic Institutions</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-indigo-50 col-span-1 md:col-span-2" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-indigo-600 mb-2">
                            <CountUp end={30} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Countries Reached</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-teal-50 col-span-4" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-teal-600 mb-2">
                            <CountUp end={200} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Interactive Learning Modules</p>
                    </motion.div>
                </div>
            </div>

            {/* Future Goals */}
            <div className="bg-gradient-to-r from-blue-100 via-white to-purple-100 p-12 rounded-3xl shadow-xl text-center">
                <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Future Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    BookPress is evolving to become more than a library — we're building a dynamic, immersive, and personalized reading experience for students, educators, and curious minds. Upcoming features include AI-powered book recommendations, real-time discussions, author Q&A sessions, and blockchain-powered content ownership. Our goal is simple: make every book an unforgettable journey.
                </p>
            </div>

        </div>
    );
};

export default About;
