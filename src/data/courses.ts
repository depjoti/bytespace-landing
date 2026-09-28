export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  creator: string;
  image: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  enrolledExtra: number;
  price: number;
  categories: string[];
};

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export type CourseCategory = (typeof courseCategories)[number];

const base = {
  creator: "purepearl studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner" as const,
  enrolledExtra: 26,
  price: 25,
};

export const courses: Course[] = [
  {
    ...base,
    id: "learn-figma",
    title: "Learn Figma from Basic",
    image: "/images/course-1.jpg",
    categories: ["Featured", "UI/UX Design", "Graphic Design"],
  },
  {
    ...base,
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/course-2.jpg",
    categories: ["Featured", "Digital Illustration", "Creative Marketing"],
  },
  {
    ...base,
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/course-3.jpg",
    categories: ["Featured", "Data Science", "Web Development"],
  },
  {
    ...base,
    id: "productivity",
    title: "Balancing Productivity and Wellbeing",
    image: "/images/course-4.jpg",
    categories: ["Featured", "Productivity"],
  },
  {
    ...base,
    id: "money-management",
    title: "Mastering Money Management",
    image: "/images/course-5.jpg",
    categories: ["Featured", "Freelance & Entrepreneurship", "Marketing"],
  },
  {
    ...base,
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    image: "/images/course-6.jpg",
    categories: ["Featured", "Freelance & Entrepreneurship", "Social Media"],
  },
];
