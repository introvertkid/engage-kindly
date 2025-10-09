import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Calendar, MapPin, Users, Loader2 } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [registration, setRegistration] = useState<any>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
        toast.error('Không thể tải thông tin sự kiện');
      } finally {
        setLoading(false);
      }
    };

    const fetchRegistration = async () => {
      if (!user) return;
      
      try {
        const { data } = await supabase
          .from('event_registrations')
          .select('*')
          .eq('event_id', id)
          .eq('user_id', user.id)
          .maybeSingle();

        setRegistration(data);
      } catch (error) {
        console.error('Error fetching registration:', error);
      }
    };

    fetchEvent();
    fetchRegistration();
  }, [id, user]);

  const handleRegister = async () => {
    if (!user) {
      toast.error('Vui lòng đăng nhập để đăng ký sự kiện');
      navigate('/auth');
      return;
    }

    setRegistering(true);
    try {
      const { error } = await supabase
        .from('event_registrations')
        .insert({
          event_id: id,
          user_id: user.id,
          status: 'pending'
        });

      if (error) throw error;
      
      toast.success('Đăng ký thành công! Vui lòng chờ xác nhận.');
      window.location.reload();
    } catch (error: any) {
      toast.error(error.message || 'Đăng ký thất bại');
    } finally {
      setRegistering(false);
    }
  };

  const handleCancelRegistration = async () => {
    if (!registration) return;

    try {
      const { error } = await supabase
        .from('event_registrations')
        .update({ status: 'cancelled' })
        .eq('id', registration.id);

      if (error) throw error;
      
      toast.success('Đã hủy đăng ký');
      window.location.reload();
    } catch (error: any) {
      toast.error(error.message || 'Hủy đăng ký thất bại');
    }
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
              {!user ? (
                <Button size="lg" onClick={() => navigate('/auth')}>
                  Đăng nhập để đăng ký
                </Button>
              ) : registration ? (
                <div className="space-y-4">
                  <p className="text-lg">
                    Trạng thái đăng ký: <Badge>{registration.status === 'pending' ? 'Đang chờ' : registration.status === 'approved' ? 'Đã duyệt' : 'Đã hủy'}</Badge>
                  </p>
                  {registration.status === 'pending' && (
                    <Button variant="outline" onClick={handleCancelRegistration}>
                      Hủy đăng ký
                    </Button>
                  )}
                </div>
              ) : (
                <Button 
                  size="lg" 
                  onClick={handleRegister}
                  disabled={registering}
                >
                  {registering ? 'Đang xử lý...' : 'Đăng ký tham gia'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
