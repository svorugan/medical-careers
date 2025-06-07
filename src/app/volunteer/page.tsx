export default function VolunteerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Volunteer & Shadowing Ideas</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Volunteering and shadowing are essential steps for anyone considering a medical career. These experiences help you understand the realities of the profession, build your resume, and make valuable connections in the healthcare field.
        </p>
      </div>
      {/* Types of Volunteer Opportunities */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Volunteer Opportunities</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Hospital volunteer programs (patient transport, front desk, gift shop, etc.)</li>
          <li>Assisting at community health fairs or blood drives</li>
          <li>Volunteering at nursing homes or assisted living facilities</li>
          <li>Helping at clinics or free health camps</li>
          <li>Participating in public health awareness campaigns</li>
          <li>Supporting organizations focused on mental health, disabilities, or chronic illnesses</li>
          <li>Virtual volunteering (health education hotlines, online support groups, etc.)</li>
        </ul>
      </div>

      {/* Shadowing Tips */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Finding and Succeeding in Shadowing</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Start by asking your family doctor or pediatrician if you can shadow them</li>
          <li>Reach out to local hospitals or clinics and inquire about shadowing programs</li>
          <li>Contact medical schools or pre-med advisors for leads on shadowing opportunities</li>
          <li>Be professional in all communications—use a formal email and resume</li>
          <li>Be respectful of patient privacy (HIPAA) and always follow instructions</li>
          <li>Keep a journal of what you observe and reflect on your experiences</li>
          <li>Send thank-you notes to the physicians and staff you shadow</li>
        </ul>
      </div>
    </div>
  );
}