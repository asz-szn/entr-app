import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
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
  "Hội thảo",
  "Hội nghị",
];

const allEvents = [
  { id: "1", name: "Cyber Symphony 2025", date: "15 Th3", location: "Tokyo", category: "Hòa nhạc", price: "2.800.000₫" },
  { id: "2", name: "Neon Nights Festival", date: "22 Th4", location: "Las Vegas", category: "Lễ hội", price: "2.100.000₫" },
  { id: "3", name: "Digital Horizons", date: "10 Th5", location: "Berlin", category: "Công nghệ", price: "1.050.000₫" },
  { id: "4", name: "Summer Slam", date: "20 Th7", location: "Miami", category: "Thể thao", price: "3.500.000₫" },
  { id: "5", name: "Đêm Hài Kịch", date: "05 Th8", location: "Chicago", category: "Hài kịch", price: "820.000₫" },
  { id: "6", name: "Phantom Opera", date: "12 Th9", location: "London", category: "Kịch", price: "2.200.000₫" },
  { id: "7", name: "Jazz In The Park", date: "01 Th10", location: "NYC", category: "Hòa nhạc", price: "580.000₫" },
  { id: "8", name: "World Cup Final", date: "18 Th11", location: "Doha", category: "Thể thao", price: "11.600.000₫" },
];

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Tất cả" || event.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <MobileLayout>
      {/* Search Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="text"
                placeholder="Tìm kiếm sự kiện..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted/50 border border-foreground/20 pl-10 pr-4 py-3 font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-foreground/40" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                showFilters
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/20 hover:bg-foreground/10"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
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

      {/* Results Count */}
      <div className="px-4 py-3 border-b border-foreground/10">
        <span className="font-mono text-xs text-foreground/50">
          TÌM THẤY {filteredEvents.length} SỰ KIỆN
        </span>
      </div>

      {/* Results Grid */}
      <section className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} featured />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-mono text-foreground/40">Không tìm thấy sự kiện</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("Tất cả");
              }}
              className="mt-4 font-mono text-xs underline"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </section>
    </MobileLayout>
  );
};

export default DiscoverPage;