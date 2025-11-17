import { EventCard } from "./EventCard";

const sampleEvents = [
  {
    id: "1",
    title: "Trồng cây xanh tại công viên Thống Nhất",
    description: "Cùng nhau trồng 500 cây xanh để làm đẹp công viên và cải thiện không khí trong thành phố.",
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
    description: "Hoạt động làm sạch bãi biển và nâng cao ý thức bảo vệ môi trường biển.",
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
    description: "Mang yêu thương đến với các em nhỏ tại trại, tặng quà và tổ chức các hoạt động vui chơi.",
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
    description: "Hướng dẫn người cao tuổi sử dụng smartphone và các ứng dụng cơ bản.",
    date: "2026-01-05",
    location: "Trung tâm văn hóa Quận 1",
    category: "education",
    currentParticipants: 15,
    maxParticipants: 30,
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
  },
];

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
          {sampleEvents.map((event) => (
            <EventCard 
              key={event.id} 
              id={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              category={event.category}
              currentParticipants={event.currentParticipants}
              maxParticipants={event.maxParticipants}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
