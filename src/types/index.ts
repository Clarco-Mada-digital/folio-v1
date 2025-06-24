export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  project_url?: string;
  github_url?: string;
  created_at: string;
  tags?: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  start_date: string;
  end_date?: string;
  description: string;
  current: boolean;
}