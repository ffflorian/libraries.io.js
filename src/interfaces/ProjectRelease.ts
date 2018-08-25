export interface ProjectRelease {
  created_at: string;
  id: number;
  number: string;
  project_id: number;
  published_at: string;
  runtime_dependencies_count: number | null;
  updated_at: string;
}
