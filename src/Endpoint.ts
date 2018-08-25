export namespace Endpoint {
  const CONTRIBUTORS = 'contributors';
  const DEPENDENCIES = 'dependencies';
  const DEPENDENT_REPOSITORIES = 'dependent_repositories';
  const DEPENDENTS = 'dependents';
  const GITHUB = 'github';
  const PLATFORMS = 'platforms';
  const PROJECTS = 'projects';
  const SEARCH = 'search';
  const SOURCERANK = 'sourcerank';
  const SUBSCRIPTIONS = 'subscriptions';
  const USAGE = 'usage';

  export namespace Project {
    export function contributors(platform: string, name: string): string {
      return `/${platform}/${name}/${CONTRIBUTORS}`;
    }

    export function dependencies(platform: string, name: string, version: string): string {
      return `/${platform}/${name}/${version}/${DEPENDENCIES}`;
    }

    export function dependentRepositories(platform: string, name: string): string {
      return `/${platform}/${name}/${DEPENDENT_REPOSITORIES}`;
    }

    export function dependents(platform: string, name: string): string {
      return `/${platform}/${name}/${DEPENDENTS}`;
    }

    export function sourceRank(platform: string, name: string): string {
      return `/${platform}/${name}/${SOURCERANK}`;
    }

    export function subscriptions(platform: string, name: string): string {
      return `/${SUBSCRIPTIONS}/${platform}/${name}`;
    }

    export function usage(platform: string, name: string): string {
      return `/${platform}/${name}/${USAGE}`;
    }

    export function project(platform: string, name: string): string {
      return `/${platform}/${name}`;
    }
  }

  export namespace Repository {
    export function dependencies(owner: string, name: string): string {
      return `/${GITHUB}/${owner}/${name}/${DEPENDENCIES}`;
    }

    export function projects(owner: string, name: string): string {
      return `/${GITHUB}/${owner}/${name}/${PROJECTS}`;
    }
  }

  export namespace User {
    export function dependencies(login: string): string {
      return `/${GITHUB}/${login}/${DEPENDENCIES}`;
    }

    export function projects(login: string): string {
      return `/${GITHUB}/${login}/${PROJECTS}`;
    }
  }

  export function platforms(): string {
    return `/${PLATFORMS}`;
  }

  export function search(): string {
    return `/${SEARCH}`;
  }

  export function subscriptions(): string {
    return `/${SUBSCRIPTIONS}`;
  }
}
