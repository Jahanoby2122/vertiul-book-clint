import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FiBook, FiSearch, FiUsers, FiAward, FiUser, FiMessageSquare } from 'react-icons/fi';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white min-h-screen">
            {/* Hero Section */}
            <motion.section 
                className="relative mb-24 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 rounded-3xl"></div>
                <div className="relative bg-white p-10 sm:p-16 rounded-3xl shadow-xl border border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div 
                            className="inline-flex items-center justify-center px-4 py-2 bg-indigo-50 rounded-full mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-sm font-medium text-indigo-600">About Virtual Bookshelf</span>
                        </motion.div>
                        <motion.h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Revolutionizing Your <span className="text-indigo-600">Reading Experience</span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            A modern platform to organize, discover, and share your literary journey with an engaged community of book lovers.
                        </motion.p>
                    </div>
                </div>
            </motion.section>

            {/* Value Proposition */}
            <section className="mb-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Why Choose Virtual Bookshelf?
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We combine elegant design with powerful features to enhance your reading experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FiBook className="w-8 h-8 text-indigo-600" />,
                            title: "Organized Library",
                            description: "Effortlessly categorize your books by reading status with our intuitive interface.",
                            color: "bg-indigo-50"
                        },
                        {
                            icon: <FiSearch className="w-8 h-8 text-purple-600" />,
                            title: "Smart Discovery",
                            description: "Find your next favorite book through personalized recommendations and community trends.",
                            color: "bg-purple-50"
                        },
                        {
                            icon: <FiUsers className="w-8 h-8 text-blue-600" />,
                            title: "Vibrant Community",
                            description: "Connect with fellow readers, share reviews, and discuss literary works.",
                            color: "bg-blue-50"
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className={`${item.color} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="mb-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-10 text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {[
                            { count: 12500, label: "Books Tracked", icon: <FiBook /> },
                            { count: 8500, label: "Active Readers", icon: <FiUser /> },
                            { count: 32000, label: "Reviews Shared", icon: <FiMessageSquare /> },
                            { count: 96, label: "Satisfaction Rate", icon: <FiAward />, suffix: "%" }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                            >
                                <div className="flex items-center justify-center text-3xl mb-4">
                                    {item.icon}
                                </div>
                                <div className="text-4xl font-bold mb-2">
                                    <CountUp end={item.count} duration={3} />{item.suffix || "+"}
                                </div>
                                <div className="text-indigo-100">{item.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="mb-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        What Our Community Says
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hear from readers who transformed their reading habits with Virtual Bookshelf.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "Virtual Bookshelf has completely changed how I track my reading. The visual progress tracking keeps me motivated to read more.",
                            name: "Sarah Johnson",
                            role: "Avid Reader",
                            avatar: "SJ"
                        },
                        {
                            quote: "As a book club organizer, this platform has made it so easy to share recommendations and track our group's reading progress.",
                            name: "Michael Chen",
                            role: "Book Club Leader",
                            avatar: "MC"
                        },
                        {
                            quote: "The community reviews help me discover hidden gems I would have otherwise missed. It's like having a personal book curator.",
                            name: "Emma Rodriguez",
                            role: "Literature Student",
                            avatar: "ER"
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6">"{item.quote}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                                    {item.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Meet The Minds Behind Virtual Bookshelf
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A passionate team dedicated to enhancing your reading experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Alex Johnson",
                            role: "Founder & CEO",
                            bio: "Combining a love for literature with technical expertise to build the ultimate reading platform.",
                            avatar: "AJ"
                        },
                        {
                            name: "Maria Garcia",
                            role: "Lead Designer",
                            bio: "Crafting beautiful, intuitive interfaces that make book tracking effortless.",
                            avatar: "MG"
                        },
                        {
                            name: "James Smith",
                            role: "Community Manager",
                            bio: "Fostering connections between readers and building our vibrant community.",
                            avatar: "JS"
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        >
                            <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold mx-auto mb-6">
                                {item.avatar}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-indigo-600 font-medium mb-4">{item.role}</p>
                            <p className="text-gray-600">{item.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <motion.section 
                className="bg-gray-900 rounded-3xl p-12 text-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50"></div>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <motion.h2 
                        className="text-3xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Ready to Transform Your Reading Experience?
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Join thousands of readers organizing their literary journey with Virtual Bookshelf.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            Get Started - It's Free
                        </button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;