export type SealsItem = {
  buyerName: string;
  date: string;
  value: number;
  commission: number;
  status: "finished" | "pending" | "cancelled";
}