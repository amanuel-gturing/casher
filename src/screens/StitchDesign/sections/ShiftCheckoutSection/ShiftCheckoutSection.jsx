import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export const ShiftCheckoutSection = () => {
  const shiftData = {
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    totalOrders: 45,
    totalSales: 1250.75,
    cashSales: 450.25,
    cardSales: 800.50,
    tips: 125.30,
    refunds: 25.00,
  };

  const summaryItems = [
    { label: "Total Orders", value: shiftData.totalOrders.toString(), color: "text-blue-600" },
    { label: "Total Sales", value: `$${shiftData.totalSales.toFixed(2)}`, color: "text-green-600" },
    { label: "Cash Sales", value: `$${shiftData.cashSales.toFixed(2)}`, color: "text-gray-600" },
    { label: "Online Payments", value: `$${shiftData.cardSales.toFixed(2)}`, color: "text-gray-600" },
  ];

  const [showZReport, setShowZReport] = useState(false);
  const [dayClosed, setDayClosed] = useState(false);

  const waiterSales = [
    { name: "John Smith", total: 250.5 },
    { name: "Sarah Johnson", total: 180.75 },
    { name: "Mike Davis", total: 320.4 },
  ];

  const productSales = [
    { type: "Beverages", amount: 500.25 },
    { type: "Main Dishes", amount: 600.5 },
    { type: "Desserts", amount: 150.0 },
  ];

  const zReportItems = [
    ...summaryItems,
    { label: "Tips", value: `$${shiftData.tips.toFixed(2)}`, color: "text-gray-600" },
    { label: "Refunds", value: `$${shiftData.refunds.toFixed(2)}`, color: "text-gray-600" },
  ];

  return (
    <div className="max-w-[960px] flex-1 grow flex flex-col items-start relative">
      {showZReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 space-y-4">
            <h3 className="text-lg font-semibold [font-family:'Work_Sans',Helvetica]">Z Report</h3>
            <div className="space-y-2">
              {zReportItems.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="font-medium [font-family:'Work_Sans',Helvetica]">{item.label}</span>
                  <span className="[font-family:'Work_Sans',Helvetica]">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-2">
              <h4 className="font-medium [font-family:'Work_Sans',Helvetica]">Waiter Sales</h4>
              {waiterSales.map((w) => (
                <div key={w.name} className="flex justify-between">
                  <span className="[font-family:'Work_Sans',Helvetica]">{w.name}</span>
                  <span className="[font-family:'Work_Sans',Helvetica]">${w.total.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-2">
              <h4 className="font-medium [font-family:'Work_Sans',Helvetica]">Products Sold</h4>
              {productSales.map((p) => (
                <div key={p.type} className="flex justify-between">
                  <span className="[font-family:'Work_Sans',Helvetica]">{p.type}</span>
                  <span className="[font-family:'Work_Sans',Helvetica]">${p.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Button className="w-full" onClick={() => setShowZReport(false)}>
              Close
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-start pt-5 pb-3 px-4 w-full">
        <h2 className="font-bold text-[#161111] text-[22px] leading-7 [font-family:'Work_Sans',Helvetica]">
          Shift Checkout
        </h2>
        <p className="text-sm text-[#876363] [font-family:'Work_Sans',Helvetica] mt-1">
          {shiftData.startTime} - {shiftData.endTime}
        </p>
      </div>

      <div className="px-4 py-3 w-full space-y-6">
        {!dayClosed && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {summaryItems.map((item, index) => (
              <Card key={index} className="border border-solid border-[#e2dddd] rounded-xl">
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-[#82686b] [font-family:'Work_Sans',Helvetica]">
                      {item.label}
                    </span>
                    <span className={`text-2xl font-bold [font-family:'Work_Sans',Helvetica] ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {dayClosed && (
          <div className="text-center [font-family:'Work_Sans',Helvetica]">Day's report closed.</div>
        )}

        <div className="flex gap-4 justify-end">
          <Button
            variant="outline"
            className="px-6 py-2 [font-family:'Work_Sans',Helvetica] font-medium"
            onClick={() => setShowZReport(true)}
          >
            Print Summary
          </Button>
          {!dayClosed && (
            <Button
              className="px-6 py-2 bg-[#161111] text-white hover:bg-[#2a2a2a] [font-family:'Work_Sans',Helvetica] font-medium"
              onClick={() => setDayClosed(true)}
            >
              Complete Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};