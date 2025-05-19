import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon,
  CommandLineIcon,
  BeakerIcon,
  UserGroupIcon,
  TrophyIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Pragya Mishra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & AI Engineer
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>+91 8088259310</span>
              </div>
              <div className="flex items-center text-gray-600">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span>pragya1205mishra@gmail.com</span>
              </div>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="mb-4">
              I'm a Computer Science student at VIT Chennai, specializing in Artificial Intelligence and Machine Learning.
              With a strong foundation in both theoretical concepts and practical applications, I combine technical expertise
              with creative problem-solving to build innovative solutions.
            </p>
            <p className="mb-4">
              My passion lies in developing AI-driven applications and full-stack solutions that make a real impact.
              I've worked on various projects ranging from healthcare AI to automated testing systems, demonstrating
              my versatility and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Data Science Intern</h3>
                  <p className="text-blue-600">Corizo EdTech</p>
                </div>
                <p className="text-gray-600">Aug 2023 – Oct 2023</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Developed an AI-powered cardiovascular disease prediction model, improving early diagnosis accuracy by 20%</li>
                <li>Built a Spotify song genre segmentation system using ML, increasing classification precision by 15%</li>
                <li>Optimized ML algorithms, demonstrating expertise in AI-driven analytics and predictive modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Diabetic Retinopathy Classification */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Diabetic Retinopathy Classification</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Implemented Quantum Machine Learning (QML) with ConvNext and Vision Transformers (ViT),
                  achieving 94% accuracy. Designed for real-world deployment in ophthalmology clinics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">QML</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ConvNext</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ViT</span>
                </div>
              </div>
            </div>

            {/* Trade Engine */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Trade Engine with Risk Assessment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Developed a full-stack stock trading platform with real-time portfolio tracking and
                  AI-driven risk assessment algorithms, reducing portfolio losses by 25%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Full Stack</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Real-time</span>
                </div>
              </div>
            </div>

            {/* System Validation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <CommandLineIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Automated System Validation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Developed a validation framework for software quality testing using Python & Shell scripting,
                  implementing automated test cases for system performance and security.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shell Scripting</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Testing</span>
                </div>
              </div>
            </div>

            {/* Healthcare Chatbot */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Healthcare Chatbot</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Designed an AI-powered, rule-based chatbot achieving 90%+ accuracy in providing
                  medical guidance through an interactive system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Healthcare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4 text-lg">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">C</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">C++</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">SQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">MATLAB</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4 text-lg">Machine Learning & AI</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">RAG Systems</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">LLMs</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Computer Vision</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Transformers</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">GANs</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">MLOps</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4 text-lg">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Jenkins</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">CI/CD</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Docker</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Linux</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Windows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <AcademicCapIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Vellore Institute of Technology</h3>
                  </div>
                  <p className="text-gray-600">Bachelor of Technology in Computer Science</p>
                  <p className="text-gray-600">Specialization in AI & ML</p>
                </div>
                <p className="text-gray-600">Expected May 2025</p>
              </div>
              <p className="text-gray-600 mb-4">Cumulative GPA: 8.48/10</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Data Analysis</li>
                    <li>Software Engineering</li>
                    <li>Operating Systems</li>
                    <li>Algorithms</li>
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>NLP</li>
                    <li>Deep Learning</li>
                    <li>Object-oriented Programming</li>
                    <li>Machine Vision</li>
                    <li>DBMS</li>
                    <li>IoT</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Delhi Public School, Bangalore East</h3>
                  <p className="text-gray-600">Class 12th CBSE Boards: 94.2%</p>
                  <p className="text-gray-600">Class 10th CBSE Boards: 94.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Head, Master of Ceremony Committee</h3>
              </div>
              <p className="text-gray-600 mb-4">VIBRANCE'24</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Hosted VIT Chennai's largest cultural fest (9,000+ attendees)</li>
                <li>Received personal commendation from Shreya Ghoshal</li>
                <li>Managed a team of 30+ members</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <TrophyIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Creative Head, Dramatics Club</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Led club to win Best Social Club (2023)</li>
                <li>Directed award-winning plays</li>
                <li>Boosted club revenue by 50% through social media engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
