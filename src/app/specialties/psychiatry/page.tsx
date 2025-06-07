import Link from 'next/link';
import Image from 'next/image';

export default function PsychiatryPage() {
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
              src="/images/psychiatry.png" 
              alt="Psychiatry specialty" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Psychiatry</h1>
            <p className="text-lg text-gray-600 mb-6">
              Psychiatry is the branch of medicine focused on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders. Psychiatrists use a combination of medication, psychotherapy, and other treatments to help patients manage mental health conditions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Mental Health
              </span>
              <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                Counseling
              </span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Patient Advocacy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Training Path</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-purple-200"></div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor&apos;s Degree (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a bachelor&apos;s degree with pre-medical coursework including psychology, biology, chemistry, and statistics.</p>
            <p className="text-gray-500 italic">Recommended majors: Psychology, Biology, Neuroscience</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical School (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete medical school to earn an MD or DO degree.</p>
            <p className="text-gray-500 italic">Focus on behavioral sciences and seek psychiatry rotations during clinical years.</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Psychiatry Residency (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a psychiatry residency program, gaining experience in adult, child, and geriatric psychiatry, as well as inpatient and outpatient care.</p>
            <p className="text-gray-500 italic">Develop skills in psychotherapy, medication management, and crisis intervention.</p>
          </div>
          <div className="relative pl-16">
            <div className="absolute left-0 bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fellowship (Optional, 1-2 years)</h3>
            <p className="text-gray-600 mb-2">Pursue a fellowship in a psychiatry subspecialty for further expertise.</p>
            <p className="text-gray-500 italic">Examples: Child &amp; Adolescent Psychiatry, Forensic Psychiatry, Addiction Psychiatry, Geriatric Psychiatry, etc.</p>
          </div>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Total Training Time</h3>
          <p className="text-gray-700">Minimum of 12 years after high school (4 years undergraduate + 4 years medical school + 4 years residency), with additional 1-2 years for fellowship training in a subspecialty.</p>
        </div>
      </div>

      {/* Top Medical Colleges */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Medical Colleges for Psychiatry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Harvard Medical School",
              location: "Boston, MA",
              ranking: "#1 for Psychiatry",
              applicationDeadline: "October 22",
              website: "https://hms.harvard.edu/"
            },
            {
              name: "Johns Hopkins University School of Medicine",
              location: "Baltimore, MD",
              ranking: "#2 for Psychiatry",
              applicationDeadline: "October 15",
              website: "https://www.hopkinsmedicine.org/psychiatry/"
            },
            {
              name: "Columbia University Vagelos College of Physicians and Surgeons",
              location: "New York, NY",
              ranking: "#3 for Psychiatry",
              applicationDeadline: "October 15",
              website: "https://www.ps.columbia.edu/education/academic-programs/md-program/md-curriculum/psychiatry"
            },
            {
              name: "Stanford University School of Medicine",
              location: "Stanford, CA",
              ranking: "#4 for Psychiatry",
              applicationDeadline: "October 1",
              website: "https://med.stanford.edu/psychiatry.html"
            },
            {
              name: "Yale School of Medicine",
              location: "New Haven, CT",
              ranking: "#5 for Psychiatry",
              applicationDeadline: "October 15",
              website: "https://medicine.yale.edu/psychiatry/"
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

      {/* Psychiatry Sub-specialties */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Psychiatry Sub-specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Child &amp; Adolescent Psychiatry",
              description: "Focuses on diagnosing and treating mental health issues in children and teenagers.",
              additionalTraining: "2-year fellowship after psychiatry residency"
            },
            {
              name: "Addiction Psychiatry",
              description: "Specializes in the treatment of substance use disorders and addiction-related mental health issues.",
              additionalTraining: "1-year fellowship after psychiatry residency"
            },
            {
              name: "Forensic Psychiatry",
              description: "Applies psychiatric knowledge in legal contexts, including competency evaluations and expert testimony.",
              additionalTraining: "1-year fellowship after psychiatry residency"
            },
            {
              name: "Geriatric Psychiatry",
              description: "Focuses on mental health care for older adults, addressing dementia, depression, and other conditions common in aging populations.",
              additionalTraining: "1-year fellowship after psychiatry residency"
            }
          ].map((subspecialty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{subspecialty.name}</h3>
              <p className="text-gray-600 mb-3">{subspecialty.description}</p>
              <p className="text-sm text-purple-600 font-medium">Additional Training: {subspecialty.additionalTraining}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Videos About Psychiatry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">[Video Placeholder {video}]</p>
                {/* In a real implementation, you would embed actual videos here */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">A Day in the Life of a Psychiatrist</h3>
                <p className="text-gray-600 text-sm">Learn about the daily responsibilities and challenges faced by psychiatrists in clinical practice.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Outlook */}
      <div className="bg-purple-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Outlook</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Job Growth</h3>
            <p className="text-4xl font-bold text-purple-600 mb-2">9%</p>
            <p className="text-gray-600">Projected growth rate for psychiatrists over the next decade, faster than average due to increased mental health awareness and demand for services.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Median Salary</h3>
            <p className="text-4xl font-bold text-purple-600 mb-2">$250,000</p>
            <p className="text-gray-600">Annual median salary for psychiatrists in the United States, with variation based on location and experience.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work Settings</h3>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Hospitals</li>
              <li>Mental health clinics</li>
              <li>Private practices</li>
              <li>Academic medical centers</li>
              <li>Community health centers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Specialties */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Medical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Neurology', 'Family Medicine', 'Internal Medicine', 'Pediatrics'].map((specialty) => (
            <Link href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-')}`} key={specialty} className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-purple-50 transition-colors">
              <span className="font-medium text-gray-900">{specialty}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
