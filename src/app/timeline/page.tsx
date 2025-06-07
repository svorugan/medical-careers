import Link from 'next/link';

export default function TimelinePage() {
  const grades = [
    {
      grade: "9th Grade",
      tasks: [
        "Focus on building a strong foundation in science and math courses",
        "Maintain a high GPA (aim for 3.7+)",
        "Join science or health-related clubs at school",
        "Begin researching medical careers to understand options",
        "Start volunteer work at local community organizations (not necessarily medical)",
        "Consider attending a summer science program or camp"
      ]
    },
    {
      grade: "10th Grade",
      tasks: [
        "Continue excelling in science and math courses",
        "Take biology and chemistry if available",
        "Prepare for PSAT/NMSQT",
        "Begin volunteering at hospitals, clinics, or nursing homes",
        "Consider joining HOSA (Health Occupations Students of America)",
        "Research summer medical programs for high school students",
        "Start keeping a journal of medical experiences and reflections"
      ]
    },
    {
      grade: "11th Grade",
      tasks: [
        "Take advanced science courses (AP Biology, AP Chemistry, etc.)",
        "Prepare for and take the SAT/ACT",
        "Research colleges with strong pre-med programs or BS/MD programs",
        "Begin shadowing physicians in different specialties",
        "Take on leadership roles in school clubs",
        "Attend medical career fairs and information sessions",
        "Start preparing college application materials",
        "Consider research opportunities with local universities"
      ]
    },
    {
      grade: "12th Grade",
      tasks: [
        "Complete college applications (early decision/action when possible)",
        "Apply for scholarships",
        "Continue shadowing and volunteer work",
        "Maintain strong grades in science courses",
        "Visit colleges and speak with pre-med advisors",
        "Apply to summer research programs for incoming college freshmen",
        "Prepare for transition to college pre-med curriculum",
        "Consider gap year opportunities if needed"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Career Timeline & Checklist</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Follow this step-by-step guide from 9th to 12th grade to stay on track for a medical career.
          This timeline will help you prepare academically and gain relevant experiences for a competitive application.
        </p>
      </div>

      <div className="mb-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Planning Matters</h2>
        <p className="text-gray-700 mb-4">
          The path to becoming a medical professional requires careful planning and preparation. 
          Starting early allows you to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Build a strong academic foundation</li>
          <li>Gain meaningful clinical experiences</li>
          <li>Develop relationships with mentors</li>
          <li>Explore different medical specialties</li>
          <li>Position yourself as a competitive applicant for college and beyond</li>
        </ul>
      </div>

      <div className="space-y-12">
        {grades.map((grade, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">{grade.grade}</h2>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Tasks and Milestones</h3>
              <ul className="space-y-3">
                {grade.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
        <p className="text-gray-700 mb-6">
          Keep track of your progress with these helpful resources:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <svg className="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-900">Medical Career Checklist PDF</h3>
              <p className="text-sm text-gray-500">Comprehensive checklist for all four years</p>
            </div>
          </a>
          <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <svg className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-900">4-Year Planning Calendar</h3>
              <p className="text-sm text-gray-500">Monthly timeline with important deadlines</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Guidance?</h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          This timeline provides a general framework, but your journey may vary based on your specific goals and circumstances.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/college-prep" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            College Preparation Resources
          </Link>
          <Link href="/volunteer" className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
            Find Volunteer Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}
