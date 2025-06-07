import Link from 'next/link';

export default function CollegePrepPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">College & Career Prep</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Preparing for a career in medicine starts well before college. Use this guide to understand the academic, extracurricular, and application steps that will help you become a competitive candidate for pre-med and BS/MD programs.
        </p>
      </div>

      {/* Academic Preparation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Preparation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Maintain a high GPA, especially in science and math courses</li>
          <li>Take advanced courses (AP/IB Biology, Chemistry, Physics, Calculus if available)</li>
          <li>Develop strong study and time management skills</li>
          <li>Seek out research opportunities in science if possible</li>
        </ul>
      </div>

      {/* Standardized Tests */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Standardized Tests</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Prepare for and take the SAT or ACT (aim for top percentiles)</li>
          <li>Take SAT Subject Tests if required (Biology, Chemistry, Math)</li>
          <li>Consider AP exams for college credit and to demonstrate subject mastery</li>
        </ul>
      </div>

      {/* Extracurricular Activities */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Participate in science clubs, HOSA, or health-related organizations</li>
          <li>Engage in meaningful volunteer work (see <Link href='/volunteer' className='text-blue-600 hover:text-blue-800'>Volunteer & Shadowing</Link>)</li>
          <li>Shadow physicians in various specialties</li>
          <li>Take on leadership roles in clubs or community organizations</li>
          <li>Participate in summer programs or internships related to healthcare</li>
        </ul>
      </div>

      {/* Building Your Resume */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your Resume</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Keep a record of all your activities, hours, and reflections</li>
          <li>Highlight leadership, initiative, and commitment</li>
          <li>Show diversity in experiences (clinical, research, community service)</li>
          <li>Ask for recommendation letters from teachers, mentors, and physicians</li>
        </ul>
      </div>

      {/* College Application Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">College Application Process</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Research colleges with strong pre-med or BS/MD programs</li>
          <li>Pay attention to application deadlines and requirements</li>
          <li>Write a compelling personal statement and secondary essays</li>
          <li>Prepare for interviews (mock interviews can help)</li>
          <li>Apply for scholarships and financial aid</li>
        </ul>
      </div>

      {/* Resources & Links */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Helpful Resources & Links</h2>
        <ul className="list-disc pl-6 text-blue-700 space-y-3">
          <li><a href="https://www.aamc.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">AAMC (Association of American Medical Colleges)</a></li>
          <li><a href="https://students-residents.aamc.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">AAMC Students & Residents</a></li>
          <li><a href="https://www.collegeboard.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board</a></li>
          <li><a href="https://www.hosa.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">HOSA – Future Health Professionals</a></li>
          <li><a href="https://www.khanacademy.org/test-prep/mcat" target="_blank" rel="noopener noreferrer" className="hover:underline">Khan Academy MCAT Prep</a></li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Explore our <Link href="/timeline" className="text-blue-600 hover:text-blue-800">Timeline & Checklist</Link> to plan your journey, or check out <Link href="/specialties" className="text-blue-600 hover:text-blue-800">Medical Specialties</Link> to learn more about different fields.
        </p>
      </div>
    </div>
  );
}
