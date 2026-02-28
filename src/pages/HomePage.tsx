import { useState } from "react";
import { Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import EventCard from "@/components/mobile/EventCard";
import CategoryPill from "@/components/mobile/CategoryPill";

const categories = [
  "Tất cả",
  "Hòa nhạc",
  "Thể thao",
  "Kịch",
  "Hài kịch",
  "Lễ hội",
];

const featuredEvents = [
  {
    id: "1",
    name: "Cyber Symphony 2025",
    date: "15 Th3",
    location: "Tokyo",
    category: "Hòa nhạc",
    price: "2.800.000₫",
  },
  {
    id: "2",
    name: "Neon Nights",
    date: "22 Th4",
    location: "Las Vegas",
    category: "Lễ hội",
    price: "2.100.000₫",
  },
  {
    id: "3",
    name: "Digital Horizons",
    date: "10 Th5",
    location: "Berlin",
    category: "Công nghệ",
    price: "1.050.000₫",
  },
  {
    id: "4",
    name: "Echo Chamber",
    date: "08 Th6",
    location: "NYC",
    category: "Hòa nhạc",
    price: "1.750.000₫",
  },
];

const upcomingEvents = [
  {
    id: "5",
    name: "Summer Slam",
    date: "20 Th7",
    location: "Miami",
    category: "Thể thao",
    price: "3.500.000₫",
  },
  {
    id: "6",
    name: "Đêm Hài Kịch",
    date: "05 Th8",
    location: "Chicago",
    category: "Hài kịch",
    price: "820.000₫",
  },
  {
    id: "7",
    name: "Phantom Opera",
    date: "12 Th9",
    location: "London",
    category: "Kịch",
    price: "2.200.000₫",
  },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  return (
    <MobileLayout>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
        <div className="flex items-center justify-between p-4">
          <div>
            <span className="text-2xl font-medium tracking-tighter">Entr</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center border border-foreground/20 hover:bg-foreground/10 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <Link
              to="/profile"
              className="w-10 h-10 flex items-center justify-center border border-foreground/20 hover:bg-foreground/10 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <CategoryPill
              key={cat}
              name={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </header>

      {/* Featured Section */}
      <section className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-mono text-xs tracking-widest text-foreground/60">
            [ NỔI BẬT ]
          </h2>
          <Link
            to="/discover"
            className="font-mono text-[10px] tracking-wider text-foreground/40 hover:text-foreground transition-colors"
          >
            XEM TẤT CẢ →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              featured
            />
          ))}
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="mt-6">
        <div className="flex items-center justify-between px-4 mb-2">
          <h2 className="font-mono text-xs tracking-widest text-foreground/60">
            [ SẮP DIỄN RA ]
          </h2>
        </div>

        <div className="divide-y divide-foreground/10">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Trending Categories */}
      <section className="p-4 mt-6">
        <h2 className="font-mono text-xs tracking-widest text-foreground/60 mb-4">
          [ XU HƯỚNG ]
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Hòa Nhạc", count: 12 },
            { name: "Thể Thao", count: 8 },
            { name: "Kịch", count: 5 },
            { name: "Hài Kịch", count: 15 },
          ].map((cat) => (
            <Link
              key={cat.name}
              to={`/discover?category=${cat.name.toLowerCase()}`}
              className="group aspect-[2/1] border border-foreground/20 p-4 flex flex-col justify-end hover:bg-foreground hover:text-background transition-colors"
            >
              <span className="text-xl font-medium tracking-tight">{cat.name}</span>
              <span className="font-mono text-[10px] text-foreground/50 group-hover:text-background/50 mt-1">
                {cat.count} sự kiện
              </span>
            </Link>
          ))}
        </div>
      </section>
    </MobileLayout>
  );
};

export default HomePage;