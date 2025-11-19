import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EventCard } from '@/components/EventCard';
import { sampleEvents } from '@/data/sampleEvents';

const Events = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Các Sự Kiện Tình Nguyện
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tham gia cùng chúng tôi để tạo nên sự thay đổi tích cực cho cộng đồng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                date={new Date(event.event_date).toLocaleDateString('vi-VN')}
                location={event.location}
                category={event.category}
                currentParticipants={event.current_participants}
                maxParticipants={event.max_participants}
                imageUrl={event.image_url}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
