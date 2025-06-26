import {
  DollarSignIcon,
  FileTextIcon,
  ListChecksIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const OrdersSection = ({ activeSection, onSectionChange }) => {
  // Navigation menu items data
  const menuItems = [
    {
      icon: <ListChecksIcon className="w-6 h-6" />,
      label: "Orders",
      key: "orders",
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      label: "Waiters",
      key: "waiters",
    },
    {
      icon: <DollarSignIcon className="w-6 h-6" />,
      label: "shift checkout",
      key: "checkout",
    },
    {
      icon: <FileTextIcon className="w-6 h-6" />,
      label: "report",
      key: "report",
    },
  ];

  return (
    <aside className="w-80 flex flex-col h-full">
      <div className="flex flex-col min-h-[700px] p-4 bg-white w-full h-full flex-1 justify-between">
        <div className="space-y-4">
          {/* Header with profile */}
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="..//depth-7--frame-0.png" alt="Cafe Express" />
              <AvatarFallback>CE</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h3 className="font-medium text-base leading-6 text-[#161111] font-['Work_Sans',Helvetica]">
                Cafe Express
              </h3>
              <span className="text-sm text-[#876363] font-['Work_Sans',Helvetica] font-normal leading-[21px]">
                12:30 PM
              </span>
            </div>
          </div>

          {/* Navigation menu */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={activeSection === item.key ? "secondary" : "ghost"}
                className={`justify-start gap-3 w-full py-2 px-3 h-auto ${
                  activeSection === item.key ? "bg-[#f4efef] hover:bg-[#ebe5e5]" : ""
                }`}
                onClick={() => onSectionChange(item.key)}
              >
                {item.icon}
                <span className="font-['Work_Sans',Helvetica] font-medium text-sm text-[#161111] leading-[21px]">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};