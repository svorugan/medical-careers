import Link from 'next/link';
import Image from 'next/image';

export default function SpecialtiesPage() {
  const specialties = [
    {
      name: 'Neurology',
      description: 'Diagnoses and treats disorders of the nervous system including the brain, spinal cord, and nerves.',
      image: '/images/neurology.png',
      slug: 'neurology',
      subSpecialties: ['Pediatric Neurology', 'Neurogenetics', 'Neuroimmunology', 'Behavioral Neurology']
    },
    {
      name: 'Cardiology',
      description: 'Focuses on disorders of the heart and cardiovascular system.',
      image: '/images/cardiology.png',
      slug: 'cardiology',
      subSpecialties: ['Interventional Cardiology', 'Electrophysiology', 'Heart Failure', 'Preventive Cardiology']
    },
    {
      name: 'Oncology',
      description: 'Specializes in the diagnosis and treatment of cancer.',
      image: '/images/oncology.png',
      slug: 'oncology',
      subSpecialties: ['Medical Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Pediatric Oncology']
    },
    {
      name: 'Pediatrics',
      description: 'Provides medical care for infants, children, and adolescents.',
      image: '/images/pediatrics.png',
      slug: 'pediatrics',
      subSpecialties: ['Neonatology', 'Pediatric Cardiology', 'Pediatric Neurology', 'Developmental Pediatrics']
    },
    {
      name: 'Surgery',
      description: 'Performs operations to treat injuries, diseases, and deformities.',
      image: '/images/surgery.png',
      slug: 'surgery',
      subSpecialties: ['General Surgery', 'Neurosurgery', 'Orthopedic Surgery', 'Plastic Surgery']
    },
    {
      name: 'Psychiatry',
      description: 'Diagnoses, treats, and prevents mental, emotional, and behavioral disorders.',
      image: '/images/psychiatry.png',
      slug: 'psychiatry',
      subSpecialties: ['Child & Adolescent Psychiatry', 'Geriatric Psychiatry', 'Addiction Psychiatry', 'Forensic Psychiatry']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Specialties</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore different branches of medicine, their education requirements, and career opportunities.
          Click on any specialty to learn more about the field, training path, and sub-specialties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialties.map((specialty) => (
          <div key={specialty.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
              <Image
                src={specialty.image}
                alt={`${specialty.name} specialty`}
                width={400}
                height={400}
                className="object-contain w-full h-full"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                priority={specialty.slug === 'neurology'}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{specialty.name}</h2>
              <p className="text-gray-600 mb-4">{specialty.description}</p>
              
              {/* Remove this section */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Sub-specialties include:</h3>
                <div className="flex flex-wrap gap-2">
                  {specialty.subSpecialties.map((subSpecialty) => (
                    <span key={subSpecialty} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {subSpecialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link href={`/specialties/${specialty.slug}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
