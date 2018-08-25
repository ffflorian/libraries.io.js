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

  const encode: typeof encodeURIComponent = encodeURIComponent;

  export namespace Project {
    export function contributors(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${CONTRIBUTORS}`;
    }

    export function dependencies(platform: string, name: string, version: string): string {
      return `/${encode(platform)}/${encode(name)}/${encode(version)}/${DEPENDENCIES}`;
    }

    export function dependentRepositories(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${DEPENDENT_REPOSITORIES}`;
    }

    export function dependents(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${DEPENDENTS}`;
    }

    export function search(): string {
      return `/${SEARCH}`;
    }

    export function sourceRank(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${SOURCERANK}`;
    }

    export function subscriptions(platform: string, name: string): string {
      return `/${SUBSCRIPTIONS}/${encode(platform)}/${encode(name)}`;
    }

    export function usage(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}/${USAGE}`;
    }

    export function project(platform: string, name: string): string {
      return `/${encode(platform)}/${encode(name)}`;
    }
  }

  export namespace Repository {
    export function dependencies(owner: string, name: string): string {
      return `/${encode(owner)}/${encode(name)}/${DEPENDENCIES}`;
    }

    export function projects(owner: string, name: string): string {
      return `/${encode(owner)}/${encode(name)}/${PROJECTS}`;
    }
  }

  export namespace GitHub {
    export function dependencies(login: string): string {
      return `/${GITHUB}/${encode(login)}/${DEPENDENCIES}`;
    }

    export function projects(login: string): string {
      return `/${GITHUB}/${encode(login)}/${PROJECTS}`;
    }
  }

  export function platforms(): string {
    return `/${PLATFORMS}`;
  }

  export function subscriptions(platform: string, name: string): string;
  export function subscriptions(): string;
  export function subscriptions(platform?: string, name?: string): string {
    let endpoint = `/${SUBSCRIPTIONS}`;
    if (platform && name) {
      endpoint += `/${encode(platform)}/${encode(name)}`;
    }
    return endpoint;
  }
}
