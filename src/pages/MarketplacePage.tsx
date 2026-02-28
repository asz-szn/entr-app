import { useState } from "react";
import { ArrowUpDown, Search, TrendingUp, TrendingDown, Filter } from "lucide-react";
import MobileLayout from "@/components/mobile/MobileLayout";
import MarketplaceCard from "@/components/mobile/MarketplaceCard";

const sortOptions = ["Xu Hướng", "Giá Thấp", "Giá Cao", "Mới Nhất"];
const categoryFilters = ["Tất Cả", "Hòa Nhạc", "Lễ Hội", "Thể Thao", "Kịch", "Hài Kịch"];

const marketplaceData = [
  {
    id: "m1",
    eventName: "Cyber Symphony 2025",
    dayVolume: "8.400.000₫",
    dayChange: -15.1,
    floorPrice: "1.200.000₫",
    floorChange: -1.6,
    listings: [
      { id: "l1", tier: "Phổ Thông", price: "1.200.000₫" },
      { id: "l2", tier: "VIP", price: "3.500.000₫" },
      { id: "l3", tier: "Platinum", price: "8.200.000₫" },
      { id: "l4", tier: "Phổ Thông", price: "1.350.000₫" },
    ],
  },
  {
    id: "m2",
    eventName: "Neon Nights Festival",
    dayVolume: "4.200.000₫",
    dayChange: 12.3,
    floorPrice: "950.000₫",
    floorChange: 5.2,
    listings: [
      { id: "l5", tier: "Phổ Thông", price: "950.000₫" },
      { id: "l6", tier: "VIP", price: "2.800.000₫" },
      { id: "l7", tier: "Phổ Thông", price: "1.100.000₫" },
    ],
  },
  {
    id: "m3",
    eventName: "Digital Horizons",
    dayVolume: "2.100.000₫",
    dayChange: -29.4,
    floorPrice: "680.000₫",
    floorChange: -4.9,
    listings: [
      { id: "l8", tier: "Tiêu Chuẩn", price: "680.000₫" },
      { id: "l9", tier: "VIP", price: "1.900.000₫" },
      { id: "l10", tier: "Tiêu Chuẩn", price: "720.000₫" },
      { id: "l11", tier: "Platinum", price: "4.500.000₫" },
    ],
  },
  {
    id: "m4",
    eventName: "Echo Chamber",
    dayVolume: "5.600.000₫",
    dayChange: 8.7,
    floorPrice: "1.400.000₫",
    floorChange: 2.1,
    listings: [
      { id: "l12", tier: "Phổ Thông", price: "1.400.000₫" },
      { id: "l13", tier: "VIP", price: "3.200.000₫" },
    ],
  },
  {
    id: "m5",
    eventName: "Summer Slam",
    dayVolume: "12.000.000₫",
    dayChange: 22.5,
    floorPrice: "2.100.000₫",
    floorChange: 10.3,
    listings: [
      { id: "l14", tier: "Khán Đài", price: "2.100.000₫" },
      { id: "l15", tier: "VIP", price: "5.500.000₫" },
      { id: "l16", tier: "Ringside", price: "9.800.000₫" },
    ],
  },
  {
    id: "m6",
    eventName: "Phantom Opera",
    dayVolume: "3.800.000₫",
    dayChange: -5.2,
    floorPrice: "1.600.000₫",
    floorChange: -2.3,
    listings: [
      { id: "l17", tier: "Phổ Thông", price: "1.600.000₫" },
      { id: "l18", tier: "VIP", price: "4.200.000₫" },
      { id: "l19", tier: "Hàng Đầu", price: "6.800.000₫" },
    ],
  },
  {
    id: "m7",
    eventName: "Đêm Hài Kịch",
    dayVolume: "1.500.000₫",
    dayChange: 35.0,
    floorPrice: "420.000₫",
    floorChange: 8.1,
    listings: [
      { id: "l20", tier: "Phổ Thông", price: "420.000₫" },
      { id: "l21", tier: "VIP", price: "1.200.000₫" },
    ],
  },
];

// Summary stats
const totalVolume = "36.400.000₫";
const totalListings = 42;
const activeEvents = 7;

const MarketplacePage = () => {
  const [activeSort, setActiveSort] = useState("Xu Hướng");
  const [activeCategory, setActiveCategory] = useState("Tất Cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = marketplaceData.filter((item) =>
    item.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div className="p-4 border-b border-foreground/10">
          <h1 className="text-2xl font-medium tracking-tight">Trao Đổi Vé</h1>
          <p className="font-mono text-[10px] text-foreground/50 mt-1 tracking-wider">
            Chợ vé thứ cấp · Xác thực blockchain
          </p>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-foreground/10">
          <div className="flex items-center gap-2 border border-foreground/20 px-3 py-2">
            <Search className="w-4 h-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Tìm sự kiện..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent font-mono text-xs w-full outline-none placeholder:text-foreground/30"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 px-4 py-3 border-b border-foreground/10 overflow-x-auto scrollbar-hide">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-wider border flex-shrink-0 transition-colors ${
                activeCategory === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/20 text-foreground/60 hover:border-foreground/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-foreground/10 overflow-x-auto scrollbar-hide">
          <ArrowUpDown className="w-3.5 h-3.5 text-foreground/40 flex-shrink-0" />
          {sortOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveSort(opt)}
              className={`px-2.5 py-1 font-mono text-[9px] tracking-wider flex-shrink-0 transition-colors ${
                activeSort === opt
                  ? "text-foreground underline underline-offset-4"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </header>

      {/* Market Overview */}
      <section className="grid grid-cols-3 border-b border-foreground/10">
        <div className="p-3 border-r border-foreground/10 text-center">
          <span className="font-mono text-[9px] text-foreground/50 block">Khối Lượng 24h</span>
          <span className="text-sm font-medium tracking-tight mt-0.5 block">{totalVolume}</span>
        </div>
        <div className="p-3 border-r border-foreground/10 text-center">
          <span className="font-mono text-[9px] text-foreground/50 block">Vé Đang Bán</span>
          <span className="text-sm font-medium tracking-tight mt-0.5 block">{totalListings}</span>
        </div>
        <div className="p-3 text-center">
          <span className="font-mono text-[9px] text-foreground/50 block">Sự Kiện</span>
          <span className="text-sm font-medium tracking-tight mt-0.5 block">{activeEvents}</span>
        </div>
      </section>

      {/* Top Movers */}
      <section className="p-4 border-b border-foreground/10">
        <h2 className="font-mono text-[10px] tracking-widest text-foreground/50 mb-3">
          [ BIẾN ĐỘNG LỚN ]
        </h2>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {marketplaceData
            .sort((a, b) => Math.abs(b.dayChange) - Math.abs(a.dayChange))
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 border border-foreground/20 p-3 min-w-[140px]"
              >
                <span className="text-xs font-medium tracking-tight block truncate">
                  {item.eventName}
                </span>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {item.dayChange >= 0 ? (
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span
                    className={`font-mono text-xs font-medium ${
                      item.dayChange >= 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.dayChange >= 0 ? "+" : ""}
                    {item.dayChange}%
                  </span>
                </div>
                <span className="font-mono text-[9px] text-foreground/40 mt-1 block">
                  Sàn: {item.floorPrice}
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* Marketplace Listings */}
      <section className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-mono text-[10px] tracking-widest text-foreground/50">
            [ TẤT CẢ SỰ KIỆN ]
          </h2>
          <span className="font-mono text-[9px] text-foreground/40">
            {filteredData.length} kết quả
          </span>
        </div>
        <div className="space-y-4">
          {filteredData.map((item) => (
            <MarketplaceCard key={item.id} {...item} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-mono text-foreground/40">Không tìm thấy sự kiện</p>
          </div>
        )}
      </section>

      {/* How it works */}
      <section className="p-4 border-t border-foreground/10">
        <h2 className="font-mono text-[10px] tracking-widest text-foreground/50 mb-4">
          [ CÁCH HOẠT ĐỘNG ]
        </h2>
        <div className="space-y-3">
          {[
            { step: "01", title: "Chọn Vé", desc: "Duyệt vé từ các sự kiện đang bán" },
            { step: "02", title: "Xác Thực", desc: "Vé được xác thực trên blockchain" },
            { step: "03", title: "Thanh Toán", desc: "Thanh toán an toàn qua ví điện tử" },
            { step: "04", title: "Nhận Vé", desc: "Vé chuyển quyền sở hữu ngay lập tức" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 p-3 border border-foreground/10">
              <span className="font-mono text-[10px] text-foreground/30 mt-0.5">{item.step}</span>
              <div>
                <span className="text-sm font-medium tracking-tight">{item.title}</span>
                <p className="font-mono text-[10px] text-foreground/50 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="p-4 border-t border-foreground/10">
        <p className="font-mono text-[10px] text-foreground/40 text-center">
          Vé được xác thực bằng công nghệ blockchain · An toàn & minh bạch
        </p>
      </div>
    </MobileLayout>
  );
};

export default MarketplacePage;
