import Link from 'next/link';
import Image from 'next/image';

export default function OncologyPage() {
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
              src="/images/oncology.png"
              alt="Oncology specialty"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Oncology</h1>
            <p className="text-lg text-gray-600 mb-6">
              Oncology is the branch of medicine that specializes in the diagnosis and treatment of cancer. Oncologists support patients through complex treatments and provide compassionate care.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                High Impact Field
              </span>
              <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                Research Opportunities
              </span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Multidisciplinary Care
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Training Path</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-pink-200"></div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor&apos;s Degree (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a bachelor&apos;s degree with pre-medical coursework including biology, chemistry, physics, and mathematics.</p>
            <p className="text-gray-500 italic">Recommended majors: Biology, Chemistry, Biochemistry</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical School (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete medical school to earn an MD or DO degree.</p>
            <p className="text-gray-500 italic">Focus on oncology-related courses and seek oncology rotations during clinical years.</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Internal Medicine Residency (3 years)</h3>
            <p className="text-gray-600 mb-2">Complete an internal medicine residency program to build a strong foundation in adult medicine.</p>
            <p className="text-gray-500 italic">Gain experience in managing complex medical conditions.</p>
          </div>
          <div className="relative pl-16">
            <div className="absolute left-0 bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Oncology Fellowship (3+ years)</h3>
            <p className="text-gray-600 mb-2">Pursue a fellowship in oncology (medical, radiation, or surgical) for specialized training in cancer care.</p>
            <p className="text-gray-500 italic">Choose a sub-specialty such as pediatric oncology, hematologic oncology, or radiation oncology.</p>
          </div>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Total Training Time</h3>
          <p className="text-gray-700">Minimum of 11 years after high school (4 years undergraduate + 4 years medical school + 3 years residency), with additional years for oncology fellowship and sub-specialization.</p>
        </div>
      </div>

      {/* Top Medical Colleges */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Medical Colleges for Oncology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "MD Anderson Cancer Center",
              location: "Houston, TX",
              ranking: "#1 for Cancer Care",
              applicationDeadline: "October 1",
              website: "https://www.mdanderson.org/"
            },
            {
              name: "Memorial Sloan Kettering Cancer Center",
              location: "New York, NY",
              ranking: "#2 for Cancer Care",
              applicationDeadline: "October 15",
              website: "https://www.mskcc.org/"
            },
            {
              name: "Johns Hopkins University",
              location: "Baltimore, MD",
              ranking: "#3 for Cancer Care",
              applicationDeadline: "October 15",
              website: "https://www.hopkinsmedicine.org/kimmel-cancer-center/"
            },
            {
              name: "Dana-Farber/Harvard Cancer Center",
              location: "Boston, MA",
              ranking: "#4 for Cancer Care",
              applicationDeadline: "October 22",
              website: "https://www.dana-farber.org/"
            },
            {
              name: "Stanford University",
              location: "Stanford, CA",
              ranking: "#5 for Cancer Care",
              applicationDeadline: "October 1",
              website: "https://med.stanford.edu/cancer.html"
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

      {/* Oncology Sub-specialties */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Oncology Sub-specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Medical Oncology",
              description: "Focuses on the treatment of cancer with chemotherapy, immunotherapy, and targeted therapy.",
              additionalTraining: "2-3 year fellowship after internal medicine residency"
            },
            {
              name: "Radiation Oncology",
              description: "Specializes in the use of radiation to treat cancer.",
              additionalTraining: "4-year residency after medical school"
            },
            {
              name: "Surgical Oncology",
              description: "Performs surgery to remove tumors and manage cancer-related complications.",
              additionalTraining: "General surgery residency + 2-year surgical oncology fellowship"
            },
            {
              name: "Pediatric Oncology",
              description: "Focuses on diagnosing and treating cancers in children and adolescents.",
              additionalTraining: "Pediatrics residency + 3-year pediatric hematology/oncology fellowship"
            }
          ].map((subspecialty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{subspecialty.name}</h3>
              <p className="text-gray-600 mb-3">{subspecialty.description}</p>
              <p className="text-sm text-pink-600 font-medium">Additional Training: {subspecialty.additionalTraining}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Videos About Oncology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">[Video Placeholder {video}]</p>
                {/* In a real implementation, you would embed actual videos here */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">A Day in the Life of an Oncologist</h3>
                <p className="text-gray-600 text-sm">Learn about the daily responsibilities and challenges faced by oncologists in clinical practice.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Outlook */}
      <div className="bg-pink-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Outlook</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Job Growth</h3>
            <p className="text-4xl font-bold text-pink-600 mb-2">7%</p>
            <p className="text-gray-600">Projected growth rate for oncologists over the next decade, faster than average for all occupations due to rising cancer incidence.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Median Salary</h3>
            <p className="text-4xl font-bold text-pink-600 mb-2">$340,000</p>
            <p className="text-gray-600">Annual median salary for oncologists in the United States, with variation based on location and experience.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work Settings</h3>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Cancer centers</li>
              <li>Hospitals</li>
              <li>Academic medical centers</li>
              <li>Research institutions</li>
              <li>Private practice</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Specialties */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Medical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Hematology', 'Palliative Care', 'Radiology', 'Surgery'].map((specialty) => (
            <Link href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-')}`} key={specialty} className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-pink-50 transition-colors">
              <span className="font-medium text-gray-900">{specialty}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
