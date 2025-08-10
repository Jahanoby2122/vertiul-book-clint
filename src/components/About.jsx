import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 bg-[#f9f7f3]">
            {/* Hero Section - Book Cover Inspired */}
            <motion.div 
                className="mb-20 bg-gradient-to-br from-[#e8e0d5] to-[#d8c9b6] p-10 rounded-[30px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border-4 border-[#b7a58b]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div 
                        className="w-24 h-1.5 bg-[#8d6e63] mb-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                    <h1 className="text-5xl font-serif font-bold text-[#3e2723] mb-6 tracking-wide">BookPress</h1>
                    <p className="text-xl text-[#5d4037] max-w-3xl leading-relaxed italic">
                        "Where timeless stories meet tomorrow's technology - creating a new chapter in digital reading"
                    </p>
                    <motion.div 
                        className="w-24 h-1.5 bg-[#8d6e63] mt-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </div>
            </motion.div>

            {/* Book Spine Inspired Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {[
                    {
                        title: "Our Vision",
                        text: "To make literature universally accessible in immersive digital formats",
                        color: "from-[#3f51b5] to-[#303f9f]",
                        accent: "#7986cb"
                    },
                    {
                        title: "Our Mission",
                        text: "Redefine reading with AI-enhanced virtual books and community interaction",
                        color: "from-[#7b1fa2] to-[#4a148c]",
                        accent: "#ab47bc"
                    },
                    {
                        title: "Our Values",
                        text: "Creativity, Accessibility, Lifelong Learning, Digital Empowerment",
                        color: "from-[#00796b] to-[#004d40]",
                        accent: "#26a69a"
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`bg-gradient-to-b ${item.color} p-8 rounded-2xl shadow-xl text-center h-full`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="flex justify-center mb-5">
                            <div className="w-1 h-16 bg-white rounded-full"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                        <p className="text-white/90">{item.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* Who We Are - Open Book Design */}
            <motion.div 
                className="mb-24 bg-white p-10 rounded-[30px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <div className="absolute top-0 left-0 w-1/2 h-full border-r-2 border-dashed border-[#e0e0e0]"></div>
                <div className="relative z-10 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 pr-8 text-right border-r-2 border-[#b7a58b] py-4">
                            <h2 className="text-4xl font-serif font-bold text-[#5d4037] mb-6">Who We Are?</h2>
                        </div>
                        <div className="md:w-1/2 pl-8 py-4">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                BookPress is a revolution in digital reading. We transform traditional books into interactive experiences that engage all senses. Founded by bibliophiles and tech innovators, our platform combines the tactile joy of reading with cutting-edge technology to create unforgettable literary journeys.
                            </p>
                            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                                We partner with authors, publishers, and educators to reimagine what books can be in the digital age - preserving literary heritage while pioneering new forms of storytelling.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Virtual Bookshelf Features - Floating Shelves */}
            <div className="mb-24">
                <h2 className="text-4xl font-serif font-bold text-center text-[#5d4037] mb-16">Our Virtual Bookshelf</h2>
                
                <div className="relative max-w-6xl mx-auto">
                    {/* Shelf */}
                    <div className="h-4 bg-[#8d6e63] rounded-t-lg mb-16 shadow-lg"></div>
                    
                    {/* Books */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Interactive Books",
                                desc: "Enriched with videos, quizzes & voice notes",
                                color: "bg-[#d7ccc8]"
                            },
                            {
                                title: "Personal Library",
                                desc: "Organize your collection with smart tagging",
                                color: "bg-[#b2dfdb]"
                            },
                            {
                                title: "Reading Tracker",
                                desc: "Monitor progress and reading habits",
                                color: "bg-[#ffccbc]"
                            },
                            {
                                title: "Cloud Access",
                                desc: "Access your shelf anywhere, anytime",
                                color: "bg-[#c5cae9]"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`${item.color} p-6 rounded-lg shadow-lg h-64 flex flex-col justify-between`}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                            >
                                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                <p className="text-gray-700">{item.desc}</p>
                                <div className="h-8 bg-white/50 rounded"></div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Shelf */}
                    <div className="h-4 bg-[#8d6e63] rounded-t-lg mt-16 shadow-lg"></div>
                </div>
            </div>

            {/* Impact Numbers - Book Stack Design */}
            <div className="mb-24">
                <h2 className="text-4xl font-serif font-bold text-center text-[#5d4037] mb-16">Our Impact</h2>
                
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {[
                        { count: 100, label: "Virtual Books", color: "#d7ccc8" },
                        { count: 5000, label: "Active Readers", color: "#b2dfdb" },
                        { count: 120, label: "Authors", color: "#ffccbc" },
                        { count: 98, label: "Satisfaction", suffix: "%", color: "#c5cae9" },
                        { count: 25, label: "Institutions", color: "#d1c4e9" },
                        { count: 30, label: "Countries", color: "#bbdefb" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 1.2, duration: 0.6 }}
                        >
                            {/* Book Stack Effect */}
                            <div className="absolute -bottom-3 -left-2 w-full h-full bg-gray-200 rounded-lg z-0"></div>
                            <div className="absolute -bottom-1.5 -left-1 w-full h-full bg-gray-300 rounded-lg z-1"></div>
                            
                            <div 
                                className={`relative p-8 rounded-lg shadow-lg z-10 w-48 h-48 flex flex-col justify-center items-center`}
                                style={{ backgroundColor: item.color }}
                            >
                                <h3 className="text-5xl font-bold text-gray-800 mb-2">
                                    <CountUp end={item.count} duration={3} />{item.suffix || "+"}
                                </h3>
                                <p className="text-lg text-gray-700 font-medium text-center">{item.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials - Bookmark Design */}
            <div className="mb-24">
                <h2 className="text-4xl font-serif font-bold text-center text-[#5d4037] mb-16">Reader Testimonials</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            quote: "BookPress transformed how my students engage with literature. The interactive features bring stories to life!",
                            name: "Rima, Educator",
                            color: "#e1bee7"
                        },
                        {
                            quote: "Finally, an e-reading platform that captures the soul of physical books. The page turning animations feel magical!",
                            name: "Sami, Author",
                            color: "#bbdefb"
                        },
                        {
                            quote: "As a lifelong bibliophile, BookPress is the perfect blend of tradition and innovation. My virtual shelf is my treasure!",
                            name: "Nawrin, Librarian",
                            color: "#c8e6c9"
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="relative pt-16"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 1.6, duration: 0.6 }}
                        >
                            {/* Bookmark */}
                            <div 
                                className="absolute top-0 right-8 w-16 h-24 rotate-6"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            
                            <div className="bg-white p-8 rounded-xl shadow-lg border-t-8" style={{ borderTopColor: item.color }}>
                                <p className="text-gray-700 italic mb-6">"{item.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Future Vision - Scroll Design */}
            <motion.div 
                className="bg-gradient-to-b from-[#d7ccc8] to-[#bcaaa4] p-12 rounded-3xl shadow-xl text-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                {/* Scroll Details */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-[#a1887f]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#a1887f]"></div>
                <div className="absolute top-12 left-8 w-1 h-[calc(100%-96px)] bg-[#8d6e63]"></div>
                <div className="absolute top-12 right-8 w-1 h-[calc(100%-96px)] bg-[#8d6e63]"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-[#4e342e] mb-6">The Next Chapter</h2>
                    <p className="text-lg text-[#5d4037] leading-relaxed">
                        We're developing AI-powered reading companions, immersive VR story worlds, and blockchain-secured rare editions. BookPress will soon introduce collaborative reading spaces where communities can experience stories together in real-time, regardless of physical location. Our mission remains: to preserve the magic of books while pioneering their digital evolution.
                    </p>
                    
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1.5 bg-[#8d6e63] rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;