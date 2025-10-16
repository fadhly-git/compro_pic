export type Project = {
  id: number;
  title: string;
  category: "web" | "mobile";
  summary: string;
  description: string;
  image: string;
  tags: string[];
  icon: LucideIcon;
  iconLabel: string;
  year: string;
  client: string;
  link: string;
};
