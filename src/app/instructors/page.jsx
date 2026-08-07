import InstructorCard from '@/components/ui/InstructorCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { instructors } from '@/data/instructors';

export default function InstructorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle 
        title="Meet Our Instructors" 
        subtitle="Learn directly from industry leaders who bring real-world experience to the classroom."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
}
