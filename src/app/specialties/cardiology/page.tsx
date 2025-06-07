import Link from 'next/link';
import Image from 'next/image';

export default function CardiologyPage() {
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
              src="/images/cardiology.png" 
              alt="Cardiology specialty" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cardiology</h1>
            <p className="text-lg text-gray-600 mb-6">
              Cardiology is the branch of medicine that focuses on disorders of the heart and blood vessels. Cardiologists diagnose and treat conditions like coronary artery disease, heart failure, arrhythmias, and congenital heart defects.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Highly Specialized</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Growing Field</span>
              <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">Life-Saving Impact</span>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelors Degree (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete a bachelors degree with pre-medical coursework including biology, chemistry, physics, and mathematics.</p>
            <p className="text-gray-500 italic">Recommended majors: Biology, Chemistry, Biochemistry</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical School (4 years)</h3>
            <p className="text-gray-600 mb-2">Complete medical school to earn an MD or DO degree.</p>
            <p className="text-gray-500 italic">Focus on cardiovascular coursework and clinical rotations</p>
          </div>
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Internal Medicine Residency (3 years)</h3>
            <p className="text-gray-600 mb-2">Complete an internal medicine residency program, gaining broad experience in adult medicine.</p>
            <p className="text-gray-500 italic">Gain experience in diagnosing and treating a variety of adult diseases</p>
          </div>
          <div className="relative pl-16">
            <div className="absolute left-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cardiology Fellowship (3+ years)</h3>
            <p className="text-gray-600 mb-2">Pursue a fellowship in cardiology for advanced, specialized training in heart care.</p>
            <p className="text-gray-500 italic">Examples: Interventional Cardiology, Electrophysiology, Heart Failure</p>
          </div>
        </div>
      </div>

      {/* Top Medical Colleges */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Medical Colleges for Cardiology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Cleveland Clinic Lerner College of Medicine",
              location: "Cleveland, OH",
              ranking: "#1 for Cardiology & Heart Surgery",
              applicationDeadline: "October 15",
              website: "https://my.clevelandclinic.org/departments/heart/medical-professionals/education"
            },
            {
              name: "Johns Hopkins School of Medicine",
              location: "Baltimore, MD",
              ranking: "#2 for Cardiology & Heart Surgery",
              applicationDeadline: "October 15",
              website: "https://www.hopkinsmedicine.org/heart_vascular_institute/"
            },
            {
              name: "Mayo Clinic Alix School of Medicine",
              location: "Rochester, MN",
              ranking: "#3 for Cardiology & Heart Surgery",
              applicationDeadline: "October 1",
              website: "https://college.mayo.edu/academics/medical-professionals/cardiovascular-medicine/"
            },
            {
              name: "Stanford University School of Medicine",
              location: "Stanford, CA",
              ranking: "#4 for Cardiology & Heart Surgery",
              applicationDeadline: "October 1",
              website: "https://med.stanford.edu/cardiology.html"
            },
            {
              name: "Mount Sinai Icahn School of Medicine",
              location: "New York, NY",
              ranking: "#5 for Cardiology & Heart Surgery",
              applicationDeadline: "October 15",
              website: "https://icahn.mssm.edu/research/cardiology"
            },
            {
              name: "Columbia University Vagelos College of Physicians and Surgeons",
              location: "New York, NY",
              ranking: "#6 for Cardiology & Heart Surgery",
              applicationDeadline: "October 15",
              website: "https://www.columbiacardiology.org/"
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

      {/* Cardiology Sub-specialties */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cardiology Sub-specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Interventional Cardiology",
              description: "Focuses on catheter-based procedures to treat heart and blood vessel diseases, such as angioplasty and stent placement.",
              additionalTraining: "1-year fellowship after General Cardiology"
            },
            {
              name: "Electrophysiology",
              description: "Dedicated to diagnosing and treating arrhythmias through procedures like ablation and pacemaker/ICD implantation.",
              additionalTraining: "1–2 year fellowship after General Cardiology"
            },
            {
              name: "Heart Failure and Transplant Cardiology",
              description: "Focuses on managing end-stage heart failure and working with transplant teams.",
              additionalTraining: "1-year fellowship after General Cardiology"
            },
            {
              name: "Pediatric Cardiology",
              description: "Specializes in the diagnosis and management of congenital or acquired heart diseases in children.",
              additionalTraining: "3-year fellowship (separate track after residency)"
            },
            {
              name: "Cardiac Imaging",
              description: "Focuses on advanced imaging techniques (e.g., echocardiography, MRI, CT) to diagnose cardiovascular diseases.",
              additionalTraining: "Variable (often 1 year) after General Cardiology"
            },
            {
              name: "Preventive Cardiology",
              description: "Emphasizes reducing cardiovascular risk factors and promoting lifestyle changes to prevent heart disease.",
              additionalTraining: "Variable (often 1 year) after General Cardiology"
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Videos About Cardiology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">[Video Placeholder {video}]</p>
                {/* In a real implementation, you would embed actual videos here */}
                {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">A Day in the Life of a Cardiologist</h3>
                <p className="text-gray-600 text-sm">Learn about the daily responsibilities and challenges faced by cardiologists in clinical practice.</p>
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
            <p className="text-4xl font-bold text-blue-600 mb-2">3%</p>
            <p className="text-gray-600">Projected growth rate for cardiologists by 2032 (U.S. Bureau of Labor Statistics). Demand remains strong due to aging populations and rising heart disease rates.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Median Salary</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">$280,000–$500,000+</p>
            <p className="text-gray-600">Annual median salary for cardiologists in the United States. Subspecialists and those in high-demand areas may earn more.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work Settings</h3>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Hospitals (inpatient & outpatient)</li>
              <li>Private practices</li>
              <li>Academic medical centers</li>
              <li>Research institutions</li>
              <li>Rehabilitation centers</li>
              <li>Telehealth/digital health</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Specialties */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Medical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Vascular Surgery', 'Pulmonology', 'Cardiothoracic Surgery', 'Internal Medicine', 'Electrophysiology', 'Pediatric Cardiology', 'Critical Care Medicine', 'Interventional Radiology'].map((specialty) => (
            <Link href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-')}`} key={specialty} className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">{specialty}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
