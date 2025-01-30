import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, BookOpen, Briefcase, Code, Award } from 'lucide-react';
import face from '/face.jpg';
import face2 from '/face2.png';
function Home() {
  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary to-primary/65 px-6 py-12 text-white">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-4xl font-bold">Divine Johnson</h1>
              <h2 className="text-xl mt-2">Software Engineer</h2>
            </div>
            <div className='w-32 h-32 border-white border-4 rounded-full overflow-hidden '>
                <img
                  src={face}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover  mt-4 md:mt-0 hover:scale-110 transition-transform duration-300 hover:left-3"
                />
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>divinegiftjohnson21@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span> +234 (912) 706-4183</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Akwa Ibom State, Nigeria</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Divinejay-001" className="flex items-center hover:text-blue-200">
                <Github className="w-5 h-5 mr-1" />
                <span>github.com/Divinejay-001</span>
              </a>
             
            </div>
            <div className="flex items-center ">
            <a href="https://www.linkedin.com/in/divinegift-johnson-739977324/" className="flex items-center hover:text-blue-200">
                <Linkedin className="w-5 h-5 mr-1" />
                <span>linkedin.com/in/divinejohnson</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          {/* Summary */}
          <section>
            <h3 className="text-2xl font-semibold flex items-center text-gray-800 mb-4">
              <BookOpen className="w-6 h-6 mr-2 text-tertiary" />
              Professional Summary
            </h3>
            <p className="text-gray-600 leading-relaxed">
             I am a passionate software engineer with 3 years of experience in developing scalable web applications.
           I am specialized in Javascript, React and Node.js. Strong focus on writing clean and maintainable
              code.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-2xl font-semibold flex items-center text-gray-800 mb-4">
              <Briefcase className="w-6 h-6 mr-2 text-tertiary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: ' Software Engineer',
                  company: 'Self Employed',
                 description: 'Worked with fellow developers',
                },
                {
                  title: 'Software Engineer',
                  company: 'Netisens ICT',
                  period: '2024 - 2025',
                  description: 'Developed and maintained multiple React-based web applications. ',
                },
              ].map((job, index) => (
                <div key={index} className="border-l-4 border-tertiary pl-4">
                  <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
                  <div className="text-gray-600 mt-1">{job.company} | {job.period}</div>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-semibold flex items-center text-gray-800 mb-4">
              <Code className="w-6 h-6 mr-2 text-tertiary" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React', 'TypeScript', 'Node.js',
                 'Javascript',
                'MongoDB',  'Express.js',
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
  <h3 className="text-2xl font-semibold flex items-center text-gray-800 mb-4">
    <Award className="w-6 h-6 mr-2 text-tertiary" />
    Education
  </h3>
  <div className="border-l-4 border-tertiary pl-4">
    <h4 className="text-lg font-semibold text-gray-800">
      Aspiring Bachelor of Science in Computer Science
    </h4>
    <div className="text-gray-600 mt-1">University of Technology | Planned Enrollment</div>
    <p className="text-gray-600 mt-2">
      I am preparing to enroll in a university program, specializing in Computer Science, with a focus on Software Engineering and Artificial Intelligence.
    </p>
  </div>
</section>

        </div>
      </div>
    </div>
  );
}

export default Home;