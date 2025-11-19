import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Calendar, MapPin, Users, Loader2 } from 'lucide-react';
import { sampleEvents } from '@/data/sampleEvents';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tìm sự kiện từ dữ liệu mẫu
    const foundEvent = sampleEvents.find(e => e.id === id);
    setEvent(foundEvent || null);
    setLoading(false);
  }, [id]);

  const handleRegister = () => {
    toast.success('Tính năng đăng ký sẽ được bổ sung sau!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 text-center">
          <h1 className="text-2xl font-bold">Không tìm thấy sự kiện</h1>
        </div>
      </div>
    );
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      tree_planting: 'Trồng cây',
      cleanup: 'Dọn dẹp',
      charity: 'Từ thiện',
      education: 'Giáo dục',
      other: 'Khác'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {event.image_url && (
            <img 
              src={event.image_url} 
              alt={event.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
          )}

          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{getCategoryLabel(event.category)}</Badge>
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            </div>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(event.event_date).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{event.current_participants}/{event.max_participants || '∞'} người tham gia</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg whitespace-pre-wrap">{event.description}</p>
            </div>

            <div className="pt-6 border-t">
              <Button size="lg" onClick={handleRegister}>
                Đăng ký tham gia
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
