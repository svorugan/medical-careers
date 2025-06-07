import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-blue-50 rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Medical Careers Explorer</h1>
          <p className="text-lg text-gray-700 mb-6">Discover your path in the field of medicine. Explore specialties, education requirements, and career opportunities.</p>
          <Link href="/quiz" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Take the Career Quiz
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <Image 
            src="/images/medical-hero.jpg" 
            alt="Medical professionals" 
            width={500} 
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* What You will Find Here Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What You'll Find Here</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Medical Branches */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Explore Medical Branches</h3>
            </div>
            <p className="text-gray-600 mb-4">Learn about specialties like Oncology, Neurology, Pediatrics, and beyond—with real examples like Pediatric Oncology and Mathematical Oncology.</p>
            <Link href="/specialties" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View specialties →
            </Link>
          </div>

          {/* Volunteer & Shadowing */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Volunteer & Shadowing Ideas</h3>
            </div>
            <p className="text-gray-600 mb-4">Find suggestions for meaningful volunteer work and tips on finding shadowing opportunities.</p>
            <Link href="/volunteer" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Explore opportunities →
            </Link>
          </div>

          {/* College & Career Prep */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">College & Career Prep</h3>
            </div>
            <p className="text-gray-600 mb-4">Understand BS/MD programs, SAT expectations, and how to build your high school resume.</p>
            <Link href="/college-prep" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Get prepared →
            </Link>
          </div>

          {/* Timeline & Checklist */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Timeline & Checklist</h3>
            </div>
            <p className="text-gray-600 mb-4">Follow a step-by-step guide from 9th to 12th grade to stay on track for a medical career.</p>
            <Link href="/timeline" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View timeline →
            </Link>
          </div>
        </div>
      </div>

      {/* Start Here Section */}
      

    </div>
  );
}
