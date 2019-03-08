declare namespace shared.types {
  interface Field {
    name: string;
    label: string;
    fieldType: string;
    '@class': string;
  }

  interface Action {
    expectedFields: Field[];
    actionClassToSend: string;
    label: string;
  }

  interface ResourcesToUpdate {
    repoFullName: string;
    filePathOnRepo: string;
    branchName: string;
  }

  interface SelectedField {
    label: string;
    value: string;
  }

  interface AbstractGitHubInteraction {
    '@c': string;
    branchNameToCreate?: string;
    pullRequestTitle?: string;
  }

  interface ActionToReplicate {
    '@class': string;
    [key: string]: string;
  }

  interface BulkUpdateRequest {
    gitHubOauthToken: string;
    email: string;
    commitMessage: string;
    updateAction: ActionToReplicate;
    gitHubInteractionType: AbstractGitHubInteraction;
    resourcesToUpdate: ResourcesToUpdate[];
  }
}

declare namespace shared {
  export const enum GITHUB_INTERACTION {
    Push = '.DirectPushGitHubInteraction',
    PullRequest = '.PullRequestGitHubInteraction'
  }

  export interface CiDroidRequest {
    gitHubOauthToken: string;
    email: string;
    commitMessage: string;
    updateAction: any;
    gitHubInteractionType: GitHubInteraction;
    resourcesToUpdate: Array<any>;
  }

  export interface GitHubInteraction {
    '@c': GITHUB_INTERACTION;
    branchNameToCreate?: string;
    pullRequestTitle?: string;
  }
}
