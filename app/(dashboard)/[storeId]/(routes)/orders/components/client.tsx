"use client";

import { DataTable } from "@/components/ui/data-table";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[] | null;
}

const OrderClient: React.FC<OrderClientProps> = ({ data = [] }) => {
  return (
    <>
      <Heading
        title={`Orders (${data?.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data || []} searchKey="products" />
    </>
  );
};

export default OrderClient;
