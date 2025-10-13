export type Bank = {
  id: string;
  name: string;
  slug: string;
  code: string;
  ussd?: string;
  logo: string;
};

export type Banks = readonly Bank[];
