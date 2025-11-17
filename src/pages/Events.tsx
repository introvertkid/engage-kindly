import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EventCard } from '@/components/EventCard';

const sampleEvents = [
  {
    id: "1",
    title: "Trồng cây xanh tại công viên Thống Nhất",
    description: "Cùng nhau trồng 500 cây xanh để làm đẹp công viên và cải thiện không khí trong thành phố. Đây là hoạt động ý nghĩa giúp cải thiện môi trường sống và tạo không gian xanh cho cộng đồng.",
    date: "2025-12-15",
    location: "Công viên Thống Nhất, TP.HCM",
    category: "environment",
    currentParticipants: 45,
    maxParticipants: 100,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Dọn rác bãi biển Vũng Tàu",
    description: "Hoạt động làm sạch bãi biển và nâng cao ý thức bảo vệ môi trường biển. Cùng nhau bảo vệ đại dương và tạo môi trường sống tốt hơn cho sinh vật biển.",
    date: "2025-12-20",
    location: "Bãi biển Vũng Tàu",
    category: "environment",
    currentParticipants: 30,
    maxParticipants: 80,
    imageUrl: "https://images.unsplash.com/photo-1583562835057-6745e4d19a65?w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Từ thiện tại trại trẻ mồ côi",
    description: "Mang yêu thương đến với các em nhỏ tại trại, tặng quà và tổ chức các hoạt động vui chơi. Chúng ta sẽ mang đến niềm vui và sự ấm áp cho các em.",
    date: "2025-12-25",
    location: "Trại Hòa Bình, Bình Dương",
    category: "charity",
    currentParticipants: 20,
    maxParticipants: 50,
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Bình dân học vụ số cho người cao tuổi",
    description: "Hướng dẫn người cao tuổi sử dụng smartphone và các ứng dụng cơ bản. Giúp họ hòa nhập với công nghệ hiện đại và kết nối với gia đình dễ dàng hơn.",
    date: "2026-01-05",
    location: "Trung tâm văn hóa Quận 1",
    category: "education",
    currentParticipants: 15,
    maxParticipants: 30,
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Hiến máu nhân đạo",
    description: "Chiến dịch hiến máu cứu người - mỗi giọt máu cho đi là một cuộc đời được cứu. Tham gia để lan tỏa yêu thương và cứu giúp những người cần truyền máu.",
    date: "2026-01-10",
    location: "Bệnh viện Chợ Rẫy, TP.HCM",
    category: "health",
    currentParticipants: 80,
    maxParticipants: 150,
    imageUrl: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Xây nhà tình thương",
    description: "Cùng nhau xây dựng ngôi nhà mơ ước cho gia đình khó khăn. Mỗi viên gạch là một phần tình thương, mỗi giọt mồ hôi là niềm hi vọng.",
    date: "2026-01-15",
    location: "Huyện Củ Chi, TP.HCM",
    category: "charity",
    currentParticipants: 25,
    maxParticipants: 40,
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Dạy học miễn phí cho trẻ em vùng cao",
    description: "Mang kiến thức đến với các em nhỏ vùng cao, giúp các em có cơ hội học tập và phát triển tốt hơn. Cùng nhau thắp sáng ước mơ cho thế hệ tương lai.",
    date: "2026-01-20",
    location: "Sapa, Lào Cai",
    category: "education",
    currentParticipants: 12,
    maxParticipants: 20,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Chạy bộ từ thiện Marathon",
    description: "Sự kiện chạy bộ từ thiện với mục đích gây quỹ cho trẻ em nghèo. Mỗi bước chạy là một đóng góp ý nghĩa cho tương lai các em.",
    date: "2026-02-01",
    location: "Công viên Tao Đàn, TP.HCM",
    category: "community",
    currentParticipants: 200,
    maxParticipants: 500,
    imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&auto=format&fit=crop",
  },
];

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
                date={new Date(event.date).toLocaleDateString('vi-VN')}
                location={event.location}
                category={event.category}
                currentParticipants={event.currentParticipants}
                maxParticipants={event.maxParticipants}
                imageUrl={event.imageUrl}
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
