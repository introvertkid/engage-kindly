import { EventCard } from "./EventCard";
import { sampleEvents } from "@/data/sampleEvents";

export const FeaturedEvents = () => {

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Sự kiện nổi bật</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá và tham gia các hoạt động tình nguyện ý nghĩa đang chờ đợi bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleEvents.slice(0, 4).map((event) => (
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
    </section>
  );
};
