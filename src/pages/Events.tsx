import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EventCard } from '@/components/EventCard';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'approved')
          .order('event_date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">Chưa có sự kiện nào được công bố</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
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
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
