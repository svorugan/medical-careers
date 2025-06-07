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
            <p className="text-gray-700 mb-6">
              Oncology is the branch of medicine that specializes in the diagnosis and treatment of cancer. Oncologists support patients through complex treatments and provide compassionate care.
            </p>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Education Timeline</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Bachelor's degree (4 years, pre-med recommended)</li>
              <li>Medical school (4 years, MD or DO)</li>
              <li>Internal medicine residency (3 years)</li>
              <li>Oncology fellowship (3+ years, varies by sub-specialty)</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Top Medical Colleges</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>MD Anderson Cancer Center</li>
              <li>Johns Hopkins University</li>
              <li>Memorial Sloan Kettering Cancer Center</li>
              <li>Stanford University</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Sub-specialties</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Medical Oncology</li>
              <li>Radiation Oncology</li>
              <li>Surgical Oncology</li>
              <li>Pediatric Oncology</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Videos</h2>
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-4 text-gray-500">[Embed Oncology-related video here]</div>
            </div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Career Outlook</h2>
            <p className="text-gray-700 mb-4">
              Oncologists are in demand due to the ongoing need for cancer care and research. Opportunities exist in hospitals, research centers, and private practice.
            </p>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Related Specialties</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Hematology</li>
              <li>Palliative Care</li>
              <li>Radiology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
