export interface ProjectDependency {
  deprecated: boolean;
  filepath: string | null;
  kind: 'Development' | 'runtime' | 'Optional';
  latest_stable: string;
  latest: string;
  name: string;
  outdated: boolean;
  platform: string;
  project_name: string;
  requirements: string;
}
