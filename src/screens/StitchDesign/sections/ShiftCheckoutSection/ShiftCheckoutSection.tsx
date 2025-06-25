import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export const ShiftCheckoutSection = (): JSX.Element => {
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
    { label: "Card Sales", value: `$${shiftData.cardSales.toFixed(2)}`, color: "text-gray-600" },
    { label: "Tips Collected", value: `$${shiftData.tips.toFixed(2)}`, color: "text-purple-600" },
    { label: "Refunds", value: `$${shiftData.refunds.toFixed(2)}`, color: "text-red-600" },
  ];

  return (
    <div className="max-w-[960px] flex-1 grow flex flex-col items-start">
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

        {/* Cash Register Summary */}
        <Card className="border border-solid border-[#e2dddd] rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#161111] [font-family:'Work_Sans',Helvetica]">
              Cash Register Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#161111] [font-family:'Work_Sans',Helvetica]">
                  Starting Cash
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold text-[#161111] [font-family:'Work_Sans',Helvetica]">
                    $200.00
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#161111] [font-family:'Work_Sans',Helvetica]">
                  Expected Cash
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold text-[#161111] [font-family:'Work_Sans',Helvetica]">
                    $650.25
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#161111] [font-family:'Work_Sans',Helvetica]">
                Actual Cash Count
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="Enter actual cash amount"
                className="w-full p-3 border border-[#e2dddd] rounded-lg [font-family:'Work_Sans',Helvetica]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <Button
            variant="outline"
            className="px-6 py-2 [font-family:'Work_Sans',Helvetica] font-medium"
          >
            Print Summary
          </Button>
          <Button
            className="px-6 py-2 bg-[#161111] text-white hover:bg-[#2a2a2a] [font-family:'Work_Sans',Helvetica] font-medium"
          >
            Complete Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};