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

  const waiterTotals = [
    { id: "W001", name: "John Smith", cash: 250.5, online: 150.0 },
    { id: "W002", name: "Sarah Johnson", cash: 180.75, online: 210.25 },
    { id: "W003", name: "Mike Davis", cash: 320.4, online: 95.6 },
    { id: "W004", name: "Emma Wilson", cash: 140.0, online: 185.0 },
    { id: "W005", name: "Alex Brown", cash: 200.0, online: 160.5 },
  ];

  const productSales = [
    { name: "Cappuccino", quantity: 45 },
    { name: "Caesar Salad", quantity: 32 },
    { name: "Grilled Chicken", quantity: 28 },
    { name: "Chocolate Cake", quantity: 22 },
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
          <div className="bg-white rounded-lg p-6 w-[500px] max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-semibold [font-family:'Work_Sans',Helvetica]">Z Report</h3>
            <div className="space-y-2">
              {zReportItems.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="font-medium [font-family:'Work_Sans',Helvetica]">{item.label}</span>
                  <span className="[font-family:'Work_Sans',Helvetica]">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-md font-semibold mt-4 [font-family:'Work_Sans',Helvetica]">Waiter Sales</h4>
            <div className="overflow-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Waiter</th>
                    <th className="p-2">Cash</th>
                    <th className="p-2">Online</th>
                    <th className="p-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {waiterTotals.map((w) => (
                    <tr key={w.id} className="border-b last:border-0">
                      <td className="p-2">{w.name}</td>
                      <td className="p-2">${""}{w.cash.toFixed(2)}</td>
                      <td className="p-2">${""}{w.online.toFixed(2)}</td>
                      <td className="p-2 font-medium">${""}{(w.cash + w.online).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 className="text-md font-semibold mt-4 [font-family:'Work_Sans',Helvetica]">Products Sold</h4>
            <div className="overflow-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Product</th>
                    <th className="p-2">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {productSales.map((p, idx) => (
                    <tr key={idx} className="border-b last:border-0">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2 font-medium">{p.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button className="w-full mt-4" onClick={() => setShowZReport(false)}>
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
        {/* Summary Cards */}
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

        {/* Action Buttons */}
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

        {dayClosed && (
          <p className="text-center [font-family:'Work_Sans',Helvetica]">Day's report closed.</p>
        )}
      </div>
    </div>
  );
};