import { ArrowLeft, Shield, Clock, User, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";

const mockListing = {
  id: "l1",
  eventName: "Cyber Symphony 2025",
  date: "15 Th3, 2025",
  location: "Tokyo Dome, Tokyo",
  tier: "VIP",
  section: "A",
  row: "12",
  seat: "7",
  originalPrice: "3.500.000₫",
  resalePrice: "4.200.000₫",
  seller: {
    name: "user_8x2k",
    rating: 4.9,
    sales: 23,
    verified: true,
  },
  fees: {
    platform: "210.000₫",
    blockchain: "15.000₫",
  },
  total: "4.425.000₫",
  listedAt: "2 giờ trước",
};

const ResalePurchasePage = () => {
  const { ticketId } = useParams();

  return (
    <MobileLayout>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
        <div className="flex items-center gap-3 p-4">
          <Link to="/marketplace" className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-lg font-medium tracking-tight">Mua Vé Resale</h1>
            <p className="font-mono text-[10px] text-foreground/50 tracking-wider">#{ticketId || "l1"}</p>
          </div>
        </div>
      </header>

      {/* Ticket Preview */}
      <section className="p-4">
        <div className="border border-foreground/20 overflow-hidden">
          {/* Event banner */}
          <div className="aspect-[3/1] bg-muted/30 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="px-2 py-0.5 bg-foreground/10 backdrop-blur-sm border border-foreground/20 font-mono text-[8px] tracking-widest uppercase">
                {mockListing.tier}
              </span>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-medium tracking-tight">{mockListing.eventName}</h2>
            <p className="font-mono text-xs text-foreground/50 mt-1">
              {mockListing.date} · {mockListing.location}
            </p>

            {/* Seat info */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                { label: "Khu vực", value: mockListing.section },
                { label: "Hàng", value: mockListing.row },
                { label: "Ghế", value: mockListing.seat },
              ].map((item) => (
                <div key={item.label} className="border border-foreground/10 p-2.5 text-center">
                  <span className="font-mono text-[9px] text-foreground/40 block">{item.label}</span>
                  <span className="text-lg font-medium tracking-tight block mt-0.5">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seller Info */}
      <section className="px-4 pb-4">
        <h3 className="font-mono text-[10px] tracking-widest text-foreground/50 mb-3">[ NGƯỜI BÁN ]</h3>
        <div className="border border-foreground/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted border border-foreground/20 flex items-center justify-center">
                <User className="w-4 h-4 text-foreground/50" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-sm">{mockListing.seller.name}</span>
                  {mockListing.seller.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  )}
                </div>
                <p className="font-mono text-[10px] text-foreground/50">
                  ★ {mockListing.seller.rating} · {mockListing.seller.sales} giao dịch
                </p>
              </div>
            </div>
            <span className="font-mono text-[9px] text-foreground/40">{mockListing.listedAt}</span>
          </div>
        </div>
      </section>

      {/* Price Breakdown */}
      <section className="px-4 pb-4">
        <h3 className="font-mono text-[10px] tracking-widest text-foreground/50 mb-3">[ CHI TIẾT GIÁ ]</h3>
        <div className="border border-foreground/20 divide-y divide-foreground/10">
          <div className="flex items-center justify-between p-3">
            <span className="font-mono text-xs text-foreground/60">Giá gốc</span>
            <span className="font-mono text-xs text-foreground/40 line-through">{mockListing.originalPrice}</span>
          </div>
          <div className="flex items-center justify-between p-3">
            <span className="font-mono text-xs text-foreground/60">Giá bán lại</span>
            <span className="font-mono text-xs font-medium">{mockListing.resalePrice}</span>
          </div>
          <div className="flex items-center justify-between p-3">
            <span className="font-mono text-xs text-foreground/60">Phí nền tảng (5%)</span>
            <span className="font-mono text-xs">{mockListing.fees.platform}</span>
          </div>
          <div className="flex items-center justify-between p-3">
            <span className="font-mono text-xs text-foreground/60">Phí blockchain</span>
            <span className="font-mono text-xs">{mockListing.fees.blockchain}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-foreground/5">
            <span className="font-mono text-sm font-medium">Tổng cộng</span>
            <span className="text-lg font-medium tracking-tight">{mockListing.total}</span>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="px-4 pb-4">
        <div className="border border-green-600/30 bg-green-600/5 p-3 flex items-start gap-3">
          <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-xs font-medium text-green-600">Xác thực Blockchain</span>
            <p className="font-mono text-[10px] text-foreground/50 mt-0.5">
              Vé được xác minh trên chuỗi · Không giả mạo · Chuyển quyền tức thì
            </p>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="px-4 pb-6">
        <div className="border border-foreground/10 p-3 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-foreground/40 mt-0.5 flex-shrink-0" />
          <p className="font-mono text-[10px] text-foreground/40">
            Giá bán lại do người bán đặt. Entr không chịu trách nhiệm về chênh lệch giá.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="sticky bottom-16 p-4 bg-background/95 backdrop-blur-sm border-t border-foreground/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-foreground/40" />
            <span className="font-mono text-[10px] text-foreground/40">Giữ vé trong 10:00</span>
          </div>
          <span className="text-lg font-medium tracking-tight">{mockListing.total}</span>
        </div>
        <button className="w-full py-4 bg-foreground text-background font-medium tracking-tight hover:bg-foreground/90 transition-colors">
          Mua Ngay
        </button>
      </div>
    </MobileLayout>
  );
};

export default ResalePurchasePage;
