import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const SidebarSection = (): JSX.Element => {
  // Order data for the table
  const orders = [
    { id: "#12345", table: "Table 5", items: "2 items", total: "$25.00" },
    { id: "#12346", table: "Table 2", items: "3 items", total: "$35.00" },
    { id: "#12347", table: "Table 8", items: "1 item", total: "$15.00" },
    { id: "#12348", table: "Table 3", items: "4 items", total: "$45.00" },
    { id: "#12349", table: "Table 1", items: "2 items", total: "$20.00" },
  ];

  return (
    <div className="max-w-[960px] flex-1 grow flex flex-col items-start">
      <div className="flex flex-col items-start pt-5 pb-3 px-4 w-full">
        <h2 className="font-bold text-[#161111] text-[22px] leading-7 [font-family:'Work_Sans',Helvetica]">
          Pending Orders
        </h2>
      </div>

      <div className="px-4 py-3 w-full">
        <Card className="border border-solid border-[#e2dddd] rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-white">
                  <TableHead className="w-[166px] px-4 py-3 [font-family:'Work_Sans',Helvetica] font-medium text-[#161111] text-sm">
                    Order ID
                  </TableHead>
                  <TableHead className="w-[158px] px-4 py-3 [font-family:'Work_Sans',Helvetica] font-medium text-[#161111] text-sm">
                    Table
                  </TableHead>
                  <TableHead className="w-40 px-4 py-3 [font-family:'Work_Sans',Helvetica] font-medium text-[#161111] text-sm">
                    Items
                  </TableHead>
                  <TableHead className="w-[165px] px-4 py-3 [font-family:'Work_Sans',Helvetica] font-medium text-[#161111] text-sm">
                    Total
                  </TableHead>
                  <TableHead className="w-32 px-4 py-3 [font-family:'Work_Sans',Helvetica] font-medium text-[#82686b] text-sm">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow
                    key={order.id}
                    className="h-[72px] border-t border-[#e5e8ea]"
                  >
                    <TableCell className="px-4 py-2 h-[72px] [font-family:'Work_Sans',Helvetica] font-normal text-[#161111] text-sm">
                      {order.id}
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[72px] [font-family:'Work_Sans',Helvetica] font-normal text-[#82686b] text-sm">
                      {order.table}
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[72px] [font-family:'Work_Sans',Helvetica] font-normal text-[#82686b] text-sm">
                      {order.items}
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[72px] [font-family:'Work_Sans',Helvetica] font-normal text-[#82686b] text-sm">
                      {order.total}
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[72px]">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto [font-family:'Work_Sans',Helvetica] font-bold text-[#82686b] text-sm hover:bg-transparent"
                      >
                        Print Receipt
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
