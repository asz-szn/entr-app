import { useState } from "react";
import MobileLayout from "@/components/mobile/MobileLayout";
import TicketCard from "@/components/mobile/TicketCard";

const tabs = ["Sắp tới", "Đã qua"];

const upcomingTickets = [
  {
    id: "t1",
    eventName: "Cyber Symphony 2025",
    date: "15 Th3, 2025",
    time: "20:00",
    location: "Tokyo Dome, Nhật Bản",
    ticketType: "VIP",
  },
  {
    id: "t2",
    eventName: "Neon Nights Festival",
    date: "22 Th4, 2025",
    time: "18:00",
    location: "Las Vegas Strip",
    ticketType: "Phổ thông",
  },
];

const pastTickets = [
  {
    id: "t3",
    eventName: "Digital Horizons",
    date: "10 Th12, 2024",
    time: "19:30",
    location: "Berlin Arena",
    ticketType: "Tiêu chuẩn",
  },
];

const TicketsPage = () => {
  const [activeTab, setActiveTab] = useState("Sắp tới");

  const tickets = activeTab === "Sắp tới" ? upcomingTickets : pastTickets;

  return (
    <MobileLayout>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div className="p-4 border-b border-foreground/10">
          <h1 className="text-2xl font-medium tracking-tight">Vé Của Tôi</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-foreground/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 font-mono text-xs tracking-wider transition-colors relative ${
                activeTab === tab
                  ? "text-foreground"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              {tab.toUpperCase()}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Tickets List */}
      <section className="p-4 space-y-4">
        {tickets.length > 0 ? (
          tickets.map((ticket) => <TicketCard key={ticket.id} {...ticket} />)
        ) : (
          <div className="py-16 text-center">
            <p className="font-mono text-foreground/40">Chưa có vé nào</p>
            <a
              href="/discover"
              className="inline-block mt-4 px-6 py-3 border border-foreground font-mono text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              TÌM SỰ KIỆN
            </a>
          </div>
        )}
      </section>

      {/* Ticket Count */}
      {tickets.length > 0 && (
        <div className="p-4 border-t border-foreground/10">
          <span className="font-mono text-xs text-foreground/40">
            {tickets.length} VÉ {activeTab.toUpperCase()}
          </span>
        </div>
      )}
    </MobileLayout>
  );
};

export default TicketsPage;