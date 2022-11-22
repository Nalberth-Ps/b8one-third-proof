type SealsProps = {
  buyerName: string;
  date: string;
  value: number;
  commission: number;
  status: "finished" | "pending" | "cancelled";
}

export const seals: SealsProps[] = [
  {
    buyerName: "Marília Vilarinho Almada",
    date: "2021-05-10T00:00:00.000Z",
    value: 99900,
    commission: 9990,
    status: "finished",
  },
  {
    buyerName: "Fernão Carvalhoso Álvares",
    date: "2021-05-10T00:00:00.000Z",
    value: 99900,
    commission: 9990,
    status: "pending"
  },
  {
    buyerName: "Naomi Castanho Bicalho",
    date: "2021-05-10T00:00:00.000Z",
    value: 99900,
    commission: 9990,
    status: "cancelled"
  },
  {
    buyerName: "Miria Bogado Charneca",
    date: "2021-05-10T00:00:00.000Z",
    value: 99900,
    commission: 9990,
    status: "finished",
  },
  {
    buyerName: "Kelvin Castanheira Félix",
    date: "2021-05-10T00:00:00.000Z",
    value: 99900,
    commission: 9990,
    status: "finished",
  },
]