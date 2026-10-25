import {
  GraduationCap,
  Clock,
  Star,
  Users,
  CheckCircle,
  BookOpen,
  Award,
  Cpu,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description:
      "Learn web development from scratch with HTML, CSS, JavaScript, and more.",
    longDescription: `
      This comprehensive bootcamp will take you from a complete beginner to a confident Full-Stack Developer.
      You'll learn modern web technologies, best practices, and build real-world projects that you can add
      to your portfolio.
    `,
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    duration: "12 weeks",
    rating: 4.8,
    students: 1234,
    instructor: {
      name: "John Doe",
      title: "Senior Full-Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    },
    price: 99.99,
    level: "Beginner",
    topics: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+",
      "React & Redux",
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "RESTful APIs",
    ],
    features: [
      "Lifetime Access",
      "Project-Based Learning",
      "Certificate of Completion",
      "24/7 Support",
    ],
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    description:
      "Master React.js and Redux with real-world projects and best practices.",
    longDescription: `
      Take your React skills to the next level with this advanced course. Learn complex state management,
      performance optimization, testing, and modern React patterns. Build scalable applications using
      industry best practices.
    `,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    duration: "8 weeks",
    rating: 4.9,
    students: 856,
    instructor: {
      name: "Jane Smith",
      title: "React Expert & Tech Lead",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    price: 149.99,
    level: "Advanced",
    topics: [
      "Advanced React Hooks",
      "Redux Toolkit",
      "React Query",
      "Performance Optimization",
      "Testing with Jest & RTL",
      "Advanced Patterns",
    ],
    features: [
      "Real-world Projects",
      "Code Reviews",
      "Private Discord Community",
      "Career Guidance",
    ],
  },
  {
    id: 3,
    title: "TypeScript for Professionals",
    description:
      "Take your TypeScript skills to the next level with advanced concepts and patterns.",
    longDescription: `
      Become a TypeScript expert with this comprehensive course. Learn advanced type system features,
      design patterns, and best practices for building large-scale applications. Perfect for developers
      looking to write more maintainable code.
    `,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    duration: "6 weeks",
    rating: 4.7,
    students: 643,
    instructor: {
      name: "Mike Johnson",
      title: "TypeScript Specialist",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    price: 79.99,
    level: "Intermediate",
    topics: [
      "Advanced Types",
      "Generics",
      "Decorators",
      "Type Guards",
      "Utility Types",
      "Integration with React",
    ],
    features: [
      "Hands-on Exercises",
      "Project Templates",
      "Best Practices Guide",
      "Expert Support",
    ],
  },
];

function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center" data-aos="fade-up">
        <div className="flex items-center justify-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Our Courses</h1>
        </div>
        <p className="mt-4 text-xl text-gray-500">
          Enhance your skills with our professional courses
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={course.id * 100}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="relative h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={course.image}
                    alt={course.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">${course.price}</p>
                      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {course.title}
                  </h2>
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{course.longDescription}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {course.rating} Rating
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      {course.students} Students
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Certificate</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {course.instructor.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {course.instructor.title}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                      Course Content
                    </h3>
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Cpu className="h-5 w-5 text-blue-600 mr-2" />
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {course.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
