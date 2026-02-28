import { useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";

const eventData = {
  id: "1",
  name: "Cyber Symphony 2025",
  category: "Hòa nhạc",
  date: "15 Th3, 2025",
  time: "20:00 - 23:30",
  location: "Tokyo Dome",
  address: "1-3-61 Koraku, Bunkyo, Tokyo 112-0004",
  price: { min: 2800000, max: 10500000 },
  description:
    "Trải nghiệm tương lai của âm nhạc tại Cyber Symphony 2025. Sự kết hợp đột phá giữa nhạc điện tử, dàn nhạc giao hưởng và các bản nhạc được tạo bởi AI, trình diễn trong không gian hình ảnh tuyệt đẹp.",
  lineup: ["Neural Beats", "Quantum Strings", "AI Orchestra", "Synth Wave"],
  attendees: 12500,
};

const ticketTiers = [
  { name: "Phổ Thông", price: "2.800.000₫", perks: ["Vào cổng", "Khu vực đứng"] },
  { name: "VIP", price: "5.800.000₫", perks: ["Ưu tiên vào cổng", "Khu vực ngồi", "Đồ uống miễn phí"] },
  { name: "Platinum", price: "10.500.000₫", perks: ["Vào hậu trường", "Ghế ngồi cao cấp", "Open bar", "Gặp gỡ nghệ sĩ"] },
];

const EventDetailPage = () => {
  const { id } = useParams();

  return (
    <MobileLayout>
      {/* Hero */}
      <div className="relative aspect-[4/3] bg-muted border-b border-foreground/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Top Nav */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
          <Link
            to="/"
            className="w-10 h-10 bg-background/80 backdrop-blur-sm border border-foreground/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-background/80 backdrop-blur-sm border border-foreground/20 flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 bg-background/80 backdrop-blur-sm border border-foreground/20 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Event Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <span className="font-mono text-[10px] tracking-widest text-foreground/60">
            {eventData.category.toUpperCase()}
          </span>
          <h1 className="text-3xl font-medium tracking-tight mt-1">{eventData.name}</h1>
        </div>
      </div>

      {/* Quick Info */}
      <section className="grid grid-cols-2 border-b border-foreground/10">
        <div className="p-4 border-r border-foreground/10">
          <div className="flex items-center gap-2 text-foreground/60 mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px]">NGÀY</span>
          </div>
          <p className="font-medium">{eventData.date}</p>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-foreground/60 mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px]">GIỜ</span>
          </div>
          <p className="font-medium">{eventData.time}</p>
        </div>
      </section>

      <section className="p-4 border-b border-foreground/10">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-foreground/60 mt-1" />
          <div>
            <p className="font-medium">{eventData.location}</p>
            <p className="font-mono text-xs text-foreground/50 mt-0.5">
              {eventData.address}
            </p>
          </div>
        </div>
      </section>

      {/* Attendees */}
      <section className="p-4 border-b border-foreground/10 flex items-center gap-3">
        <Users className="w-4 h-4 text-foreground/60" />
        <span className="font-mono text-sm">
          {eventData.attendees.toLocaleString()} người tham dự
        </span>
      </section>

      {/* Description */}
      <section className="p-4 border-b border-foreground/10">
        <h2 className="font-mono text-xs tracking-widest text-foreground/60 mb-3">
          [ GIỚI THIỆU ]
        </h2>
        <p className="text-foreground/80 leading-relaxed">{eventData.description}</p>
      </section>

      {/* Lineup */}
      <section className="p-4 border-b border-foreground/10">
        <h2 className="font-mono text-xs tracking-widest text-foreground/60 mb-3">
          [ DÀN NGHỆ SĨ ]
        </h2>
        <div className="flex flex-wrap gap-2">
          {eventData.lineup.map((artist) => (
            <span
              key={artist}
              className="px-3 py-1.5 border border-foreground/20 font-mono text-xs"
            >
              {artist}
            </span>
          ))}
        </div>
      </section>

      {/* Tickets */}
      <section className="p-4">
        <h2 className="font-mono text-xs tracking-widest text-foreground/60 mb-4">
          [ CHỌN VÉ ]
        </h2>
        <div className="space-y-3">
          {ticketTiers.map((tier) => (
            <button
              key={tier.name}
              className="w-full p-4 border border-foreground/20 text-left hover:bg-foreground/5 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{tier.name}</span>
                <span className="font-mono text-lg">{tier.price}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.perks.map((perk) => (
                  <span
                    key={perk}
                    className="font-mono text-[10px] text-foreground/50"
                  >
                    • {perk}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky bottom-16 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-foreground/10">
        <button className="w-full py-4 bg-foreground text-background font-mono text-sm tracking-wider hover:bg-foreground/90 transition-colors">
          MUA VÉ — TỪ {eventData.price.min.toLocaleString()}₫
        </button>
      </div>
    </MobileLayout>
  );
};

export default EventDetailPage;