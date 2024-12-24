import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 pt-10 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/2 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
              Hello! I'm Deep, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I'm here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Deep's Journey as a Coder</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        From a beginner to a full-stack developer, here’s how Deep navigated the world of programming.
      </p>
    </div>
    <div className="space-y-12">

      {/* Starting with Curiosity */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <div className="p-8 bg-white dark:bg-gray-300 text-gray-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Starting with Curiosity</h3>
            <p className="text-lg leading-relaxed">
              Deep’s coding journey began during his college years when he first learned JavaScript. What started as a curiosity grew into a passion, and he began building small projects, experimenting with code, and learning new technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Expanding Knowledge */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <div className="p-8 bg-gray-300 dark:bg-white text-gray-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Expanding Knowledge</h3>
            <p className="text-lg leading-relaxed">
              After grasping the basics, Deep delved into full-stack development. He enrolled in courses, learned new languages and frameworks, and started taking on freelance projects to apply his knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Building Real-World Projects */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <div className="p-8 bg-white dark:bg-gray-300 text-gray-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Building Real-World Projects</h3>
            <p className="text-lg leading-relaxed">
              With more experience, Deep worked on larger projects, contributing to open-source communities and building applications that helped real users. He learned a lot from the challenges faced along the way.
            </p>
          </div>
        </div>
      </div>

      {/* Mentoring and Giving Back */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <div className="p-8 bg-gray-300 dark:bg-white text-gray-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Mentoring and Giving Back</h3>
            <p className="text-lg leading-relaxed">
              Today, Deep continues to share his knowledge by writing tutorials and helping others in the tech community. For him, coding is a continuous learning journey, and he's committed to helping others grow.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}