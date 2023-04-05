interface Fact {
  id: number;
  year: number;
  description: string;
}

type Facts = Fact[];

export type { Fact, Facts };
