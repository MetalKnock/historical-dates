interface Fact {
  id: number;
  year: number;
  description: string;
}

type Facts = Fact[];

interface HistoricalDate {
  id: number;
  years: Array<number>;
  category: string;
  facts: Facts;
}

type HistoricalDates = HistoricalDate[];

export type { Fact, Facts, HistoricalDate, HistoricalDates };
