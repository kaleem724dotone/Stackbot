import tshirts from "../../src/assets/CandyShake/tshirts.jpg";
import towel from "../../src/assets/CandyShake/towel.jpg";
import skinnies from "../../src/assets/CandyShake/skinnies.jpg";
import router from "../../src/assets/CandyShake/router.jpg";

export const blogPosts = [
  {
    id: "1",
    image: tshirts,
    userAvatar: towel,
    userName: "Oliver Bennett",
    date: "18 Jan 2022",
    time: "10:30 AM",
    title: "Understanding the Basics of Web Development",
    description: "Learn how HTML, CSS, and JavaScript work together to build websites from scratch.",
    type: "featured",
    commentsCount: 12,
    likesCount: 48,
    tags: ["web development", "beginner"]
  },
  {
    id: "2",
    image: skinnies,
    userAvatar: router,
    userName: "Emily Stone",
    date: "20 Jan 2022",
    time: "02:15 PM",
    title: "Top 10 CSS Tricks Every Developer Should Know",
    description: "Boost your CSS skills with these practical tips and tricks that make your designs shine.",
    type: "popular",
    commentsCount: 8,
    likesCount: 75,
    tags: ["CSS", "frontend"]
  },
  {
    id: "3",
    image: router,
    userAvatar: towel,
    userName: "Oliver Bennett",
    date: "22 Jan 2022",
    time: "04:45 PM",
    title: "React Hooks: A Beginner's Guide",
    description: "Master the essential React hooks like useState and useEffect to build dynamic apps.",
    type: "new",
    commentsCount: 5,
    likesCount: 32,
    tags: ["React", "JavaScript"]
  },
  {
    id: "4",
    image: tshirts,
    userAvatar: skinnies,
    userName: "Emily Stone",
    date: "23 Jan 2022",
    time: "06:30 PM",
    title: "Building Responsive Layouts with Tailwind CSS",
    description: "A step-by-step tutorial to make your website look amazing on all devices.",
    type: "featured",
    commentsCount: 3,
    likesCount: 20,
    tags: ["Tailwind CSS", "design"]
  },
  {
    id: "5",
    image: towel,
    userAvatar: skinnies,
    userName: "Oliver Bennett",
    date: "25 Jan 2022",
    time: "08:00 PM",
    title: "JavaScript ES6 Features You Should Know",
    description: "Explore the modern ES6 features like let/const, arrow functions, and template literals.",
    type: "featured",
    commentsCount: 7,
    likesCount: 60,
    tags: ["JavaScript", "ES6"]
  },
  {
    id: "6",
    image: skinnies,
    userAvatar: towel,
    userName: "Emily Stone",
    date: "27 Jan 2022",
    time: "10:30 AM",
    title: "Introduction to Node.js and Express",
    description: "Learn how to build server-side applications using Node.js and Express framework.",
    type: "featured",
    commentsCount: 10,
    likesCount: 55,
    tags: ["Node.js", "backend"]
  },
  {
    id: "7",
    image: router,
    userAvatar: towel,
    userName: "Oliver Bennett",
    date: "28 Jan 2022",
    time: "12:15 PM",
    title: "How to Optimize Your Website for SEO",
    description: "Improve your website ranking with these essential SEO strategies and tips.",
    type: "new",
    commentsCount: 2,
    likesCount: 18,
    tags: ["SEO", "marketing"]
  },
  {
    id: "8",
    image: tshirts,
    userAvatar: router,
    userName: "Emily Stone",
    date: "30 Jan 2022",
    time: "03:45 PM",
    title: "Top Tools for Frontend Developers in 2025",
    description: "Discover the must-have tools and libraries every frontend developer should use.",
    type: "popular",
    commentsCount: 15,
    likesCount: 120,
    tags: ["frontend", "tools"]
  }
];
