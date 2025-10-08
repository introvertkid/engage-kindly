import { EventCard } from "./EventCard";

const sampleEvents = [
  {
    id: "1",
    title: "Trồng cây xanh tại công viên Thống Nhất",
    description: "Cùng nhau trồng 500 cây xanh để làm đẹp công viên và cải thiện không khí trong thành phố.",
    date: "2025-10-15",
    location: "Công viên Thống Nhất, TP.HCM",
    category: "environment",
    participants: 45,
    maxParticipants: 100,
  },
  {
    id: "2",
    title: "Dọn rác bãi biển Vũng Tàu",
    description: "Hoạt động làm sạch bãi biển và nâng cao ý thức bảo vệ môi trường biển.",
    date: "2025-10-20",
    location: "Bãi biển Vũng Tàu",
    category: "environment",
    participants: 30,
    maxParticipants: 80,
  },
  {
    id: "3",
    title: "Từ thiện tại trại trẻ mồ côi",
    description: "Mang yêu thương đến với các em nhỏ tại trại, tặng quà và tổ chức các hoạt động vui chơi.",
    date: "2025-10-25",
    location: "Trại Hòa Bình, Bình Dương",
    category: "charity",
    participants: 20,
    maxParticipants: 50,
  },
  {
    id: "4",
    title: "Bình dân học vụ số cho người cao tuổi",
    description: "Hướng dẫn người cao tuổi sử dụng smartphone và các ứng dụng cơ bản.",
    date: "2025-11-01",
    location: "Trung tâm văn hóa Quận 1",
    category: "education",
    participants: 15,
    maxParticipants: 30,
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
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
