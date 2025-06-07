import Link from 'next/link';
import Image from 'next/image';

export default function SurgeryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href="/specialties" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Specialties
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <Image 
              src="/images/surgery.png" 
              alt="Surgery specialty" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Surgery</h1>
            <p className="text-lg text-gray-600 mb-6">
              Surgery is a medical specialty that uses operative techniques to investigate or treat disease, injury, or deformity. Surgeons perform procedures ranging from minimally invasive to complex open surgeries to improve patient health and save lives.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Hands-On
              </span>
              <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                High Pressure
              </span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Team-Based Care
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Training Path</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-red-200"></div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor&apos;s Degree (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a bachelor&apos;s degree with pre-medical coursework including biology, chemistry, physics, and mathematics.</p>
            <p className="text-gray-500 italic">Recommended majors: Biology, Biochemistry, Health Sciences</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical School (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete medical school to earn an MD or DO degree.</p>
            <p className="text-gray-500 italic">Focus on surgical anatomy, physiology, and participate in surgery rotations.</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">General Surgery Residency (5-7 years)</h3>
            <p className="text-gray-600 mb-2">Complete a general surgery residency program, which provides broad training in surgical procedures and patient care.</p>
            <p className="text-gray-500 italic">Residency length varies by country and program.</p>
          </div>
          <div className="relative pl-16">
            <div className="absolute left-0 bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fellowship (Optional, 1-3 years)</h3>
            <p className="text-gray-600 mb-2">Pursue a fellowship in a surgical subspecialty for advanced training.</p>
            <p className="text-gray-500 italic">Examples: Cardiothoracic Surgery, Neurosurgery, Pediatric Surgery, Transplant Surgery, etc.</p>
          </div>
        </div>
        <div className="bg-red-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Total Training Time</h3>
          <p className="text-gray-700">Minimum of 13-15 years after high school (4 years undergraduate + 4 years medical school + 5-7 years residency), with additional 1-3 years for fellowship training in a subspecialty.</p>
        </div>
      </div>

      {/* Top Medical Colleges */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Medical Colleges for Surgery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Johns Hopkins University School of Medicine",
              location: "Baltimore, MD",
              ranking: "#1 for Surgery",
              applicationDeadline: "October 15",
              website: "https://www.hopkinsmedicine.org/surgery/"
            },
            {
              name: "Massachusetts General Hospital (Harvard)",
              location: "Boston, MA",
              ranking: "#2 for Surgery",
              applicationDeadline: "October 22",
              website: "https://www.massgeneral.org/surgery/"
            },
            {
              name: "Cleveland Clinic Lerner College of Medicine",
              location: "Cleveland, OH",
              ranking: "#3 for Surgery",
              applicationDeadline: "October 15",
              website: "https://my.clevelandclinic.org/departments/surgery"
            },
            {
              name: "Stanford University School of Medicine",
              location: "Stanford, CA",
              ranking: "#4 for Surgery",
              applicationDeadline: "October 1",
              website: "https://med.stanford.edu/surgery.html"
            },
            {
              name: "University of California, San Francisco (UCSF)",
              location: "San Francisco, CA",
              ranking: "#5 for Surgery",
              applicationDeadline: "October 1",
              website: "https://surgery.ucsf.edu/"
            }
          ].map((college, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
              <p className="text-gray-600 mb-1"><span className="font-medium">Location:</span> {college.location}</p>
              <p className="text-gray-600 mb-1"><span className="font-medium">Ranking:</span> {college.ranking}</p>
              <p className="text-gray-600 mb-3"><span className="font-medium">Application Deadline:</span> {college.applicationDeadline}</p>
              <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Surgery Sub-specialties */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Surgery Sub-specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Cardiothoracic Surgery",
              description: "Focuses on surgical treatment of diseases affecting organs inside the thorax (chest), including the heart and lungs.",
              additionalTraining: "2-3 year fellowship after general surgery residency"
            },
            {
              name: "Neurosurgery",
              description: "Specializes in surgery of the nervous system, including the brain and spinal cord.",
              additionalTraining: "7-year neurosurgery residency (direct entry after medical school)"
            },
            {
              name: "Pediatric Surgery",
              description: "Performs surgery on infants, children, and adolescents.",
              additionalTraining: "2-year fellowship after general surgery residency"
            },
            {
              name: "Transplant Surgery",
              description: "Focuses on surgical procedures to transplant organs such as the kidney, liver, heart, and lungs.",
              additionalTraining: "2-year fellowship after general surgery residency"
            }
          ].map((subspecialty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{subspecialty.name}</h3>
              <p className="text-gray-600 mb-3">{subspecialty.description}</p>
              <p className="text-sm text-red-600 font-medium">Additional Training: {subspecialty.additionalTraining}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Videos About Surgery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">[Video Placeholder {video}]</p>
                {/* In a real implementation, you would embed actual videos here */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">A Day in the Life of a Surgeon</h3>
                <p className="text-gray-600 text-sm">Learn about the daily responsibilities and challenges faced by surgeons in clinical practice.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Outlook */}
      <div className="bg-red-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Outlook</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Job Growth</h3>
            <p className="text-4xl font-bold text-red-600 mb-2">3%</p>
            <p className="text-gray-600">Projected growth rate for surgeons over the next decade, steady due to ongoing demand for surgical procedures.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Median Salary</h3>
            <p className="text-4xl font-bold text-red-600 mb-2">$297,800</p>
            <p className="text-gray-600">Annual median salary for surgeons in the United States, with variation based on specialty, location, and experience.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work Settings</h3>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Hospitals</li>
              <li>Surgical centers</li>
              <li>Academic medical centers</li>
              <li>Private practices</li>
              <li>Research institutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Specialties */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Medical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Orthopedic Surgery', 'Neurosurgery', 'Plastic Surgery', 'Cardiothoracic Surgery'].map((specialty) => (
            <Link href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-')}`} key={specialty} className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-red-50 transition-colors">
              <span className="font-medium text-gray-900">{specialty}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
