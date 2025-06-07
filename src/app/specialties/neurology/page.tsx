import Link from 'next/link';
import Image from 'next/image';

export default function NeurologyPage() {
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
              src="/images/neurology.png" 
              alt="Neurology specialty" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Neurology</h1>
            <p className="text-lg text-gray-600 mb-6">
              Neurology is a branch of medicine that deals with disorders of the nervous system, 
              which includes the brain, spinal cord, peripheral nerves, and muscles. Neurologists 
              diagnose and treat conditions such as stroke, epilepsy, headaches, Alzheimer&#39;s disease, 
              Parkinson&#39;s disease, multiple sclerosis, and many other neurological disorders.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Highly Specialized
              </span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Growing Field
              </span>
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Research Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Training Path</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-200"></div>
          
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor&#39;s Degree (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a bachelor&#39;s degree with pre-medical coursework including biology, chemistry, physics, and mathematics.</p>
            <p className="text-gray-500 italic">Recommended majors: Biology, Neuroscience, Biochemistry</p>
          </div>
          
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical School (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete medical school to earn an MD or DO degree.</p>
            <p className="text-gray-500 italic">Focus on neuroscience courses and seek neurology rotations during clinical years</p>
          </div>
          
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Neurology Residency (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a neurology residency program, which typically includes one year of internal medicine followed by three years of neurology training.</p>
            <p className="text-gray-500 italic">Gain experience in diagnosing and treating various neurological conditions</p>
          </div>
          
          <div className="relative pl-16">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fellowship (Optional, 1-3 years)</h3>
            <p className="text-gray-600 mb-2">Pursue a fellowship in a neurology subspecialty for additional specialized training.</p>
            <p className="text-gray-500 italic">Examples: Epilepsy, Movement Disorders, Neuro-oncology, etc.</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Total Training Time</h3>
          <p className="text-gray-700">Minimum of 12 years after high school (4 years undergraduate + 4 years medical school + 4 years residency), with additional 1-3 years for fellowship training in a subspecialty.</p>
        </div>
      </div>

      {/* Top Medical Colleges */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Medical Colleges for Neurology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Johns Hopkins School of Medicine",
              location: "Baltimore, MD",
              ranking: "#1 for Neurology & Neurosurgery",
              applicationDeadline: "October 15",
              website: "https://www.hopkinsmedicine.org/neurology_neurosurgery/"
            },
            {
              name: "Harvard Medical School",
              location: "Boston, MA",
              ranking: "#2 for Neurology & Neurosurgery",
              applicationDeadline: "October 22",
              website: "https://hms.harvard.edu/education/md-programs"
            },
            {
              name: "UCSF School of Medicine",
              location: "San Francisco, CA",
              ranking: "#3 for Neurology & Neurosurgery",
              applicationDeadline: "October 15",
              website: "https://meded.ucsf.edu/md-program"
            },
            {
              name: "Mayo Clinic Alix School of Medicine",
              location: "Rochester, MN",
              ranking: "#4 for Neurology & Neurosurgery",
              applicationDeadline: "October 1",
              website: "https://college.mayo.edu/academics/school-of-medicine/"
            },
            {
              name: "NYU Grossman School of Medicine",
              location: "New York, NY",
              ranking: "#5 for Neurology & Neurosurgery",
              applicationDeadline: "October 15",
              website: "https://med.nyu.edu/"
            },
            {
              name: "Stanford University School of Medicine",
              location: "Stanford, CA",
              ranking: "#6 for Neurology & Neurosurgery",
              applicationDeadline: "October 1",
              website: "https://med.stanford.edu/"
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

      {/* Sub-specialties */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Neurology Sub-specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Pediatric Neurology",
              description: "Focuses on neurological disorders in children and adolescents, including developmental disorders, epilepsy, and neuromuscular diseases.",
              additionalTraining: "2-3 year fellowship after neurology residency"
            },
            {
              name: "Neurogenetics",
              description: "Specializes in diagnosing and managing genetic disorders that affect the nervous system, such as Huntington&#39;s disease and hereditary neuropathies.",
              additionalTraining: "1-2 year fellowship after neurology residency"
            },
            {
              name: "Neuroimmunology",
              description: "Focuses on disorders involving the immune system attacking the nervous system, such as multiple sclerosis and autoimmune encephalitis.",
              additionalTraining: "1-2 year fellowship after neurology residency"
            },
            {
              name: "Behavioral Neurology",
              description: "Deals with cognitive and behavioral disorders resulting from brain injury or disease, including dementia, aphasia, and other cognitive impairments.",
              additionalTraining: "1-2 year fellowship after neurology residency"
            },
            {
              name: "Epilepsy",
              description: "Specializes in the diagnosis and treatment of seizure disorders and epilepsy syndromes.",
              additionalTraining: "1-2 year fellowship after neurology residency"
            },
            {
              name: "Movement Disorders",
              description: "Focuses on conditions that affect movement, such as Parkinson&#39;s disease, Huntington&#39;s disease, and dystonia.",
              additionalTraining: "1-2 year fellowship after neurology residency"
            }
          ].map((subspecialty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{subspecialty.name}</h3>
              <p className="text-gray-600 mb-3">{subspecialty.description}</p>
              <p className="text-sm text-blue-600 font-medium">Additional Training: {subspecialty.additionalTraining}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Videos About Neurology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">[Video Placeholder {video}]</p>
                {/* In a real implementation, you would embed actual videos here */}
                {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">A Day in the Life of a Neurologist</h3>
                <p className="text-gray-600 text-sm">Learn about the daily responsibilities and challenges faced by neurologists in clinical practice.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Outlook */}
      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Outlook</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Job Growth</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">7%</p>
            <p className="text-gray-600">Projected growth rate for neurologists over the next decade, faster than average for all occupations.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Median Salary</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">$280,000</p>
            <p className="text-gray-600">Annual median salary for neurologists in the United States, with variation based on location and experience.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work Settings</h3>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Hospitals</li>
              <li>Private practices</li>
              <li>Academic medical centers</li>
              <li>Research institutions</li>
              <li>Rehabilitation centers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Specialties */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Medical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Neurosurgery', 'Psychiatry', 'Physical Medicine & Rehabilitation', 'Internal Medicine'].map((specialty) => (
            <Link href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-')}`} key={specialty} className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">{specialty}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
