export type navItemsType = {
  title: string;
  isActive: boolean;
  route?: string;
};

export type roleTypes = {
  title: string;
  type: string;
  date: string;
  status: "active" | "inactive";
  isActive?: boolean;
};

export type requestType = {
  isLoading: boolean;
  data?: null | any[] | string | any;
  error?: null | any;
  id?: string;
};
