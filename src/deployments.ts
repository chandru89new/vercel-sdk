import { get } from "./utils/fetch";
import { endpointMap } from "./common";
import { DeploymentList } from "./types/deployment";
import { PaginationParameters } from "./utils/pagination";

type ListDeploymentsParams = {
  app?: string;
  from?: number;
  projectId?: string;
  rollbackCandidate: boolean;
  since?: number;
  state?:
    | "BUILDING"
    | "ERROR"
    | "INITIALIZING"
    | "QUEUED"
    | "READY"
    | "CANCELED";
  target?: string;
  teamId?: string;
  to?: number;
  users?: string;
} & PaginationParameters;

export const listDeployments = (params?: ListDeploymentsParams) => {
  return get<DeploymentList>(endpointMap.listDeployments, {
    query: params,
  });
};
