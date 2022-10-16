export let debugMode = process.env?.DEBUG === "true";

export let config: {
  [key: string]: string;
} = {
  "Content-Type": "application/json",
};

export const setVercelToken = (token: string) => {
  config = {
    ...config,
    Authorization: `Bearer ${token}`,
  };
};

export const BASE_URL = "https://api.vercel.com";

export const endpointMap = {
  userTokens: `${BASE_URL}/v5/user/tokens`,
  createToken: `${BASE_URL}/v3/user/tokens`,
  deleteToken: (id: string) => `${BASE_URL}/v3/user/tokens/${id}`,
  getTokenMetadata: `${BASE_URL}/v5/user/tokens`,
  getUser: `${BASE_URL}/v2/user`,
  getUserEvents: `${BASE_URL}/v3/events`,
  deleteUser: `${BASE_URL}/v1/user`,
  listDeployments: `${BASE_URL}/v6/deployments`,
  listAliases: `${BASE_URL}/v4/aliases`,
  listDeploymentAliases: (id: string) =>
    `${BASE_URL}/v2/deployments/${id}/aliases`,
  getAlias: (id: string) => `${BASE_URL}/v4/aliases/${id}`,
  deleteAlias: (id: string) => `${BASE_URL}/v2/aliases/${id}`,
  assignAlias: (id: string) => `${BASE_URL}/v2/deployments/${id}/aliases`,
  uploadCert: `${BASE_URL}/v7/certs`,
  getCert: (certId: string) => `${BASE_URL}/v7/certs/${certId}`,
  deleteCert: (certId: string) => `${BASE_URL}/v7/certs/${certId}`,
  issueCert: `${BASE_URL}/v7/certs`,
  listTeams: `${BASE_URL}/v2/teams`,
  createTeam: `${BASE_URL}/v1/teams`,
  deleteTeam: (teamId: string) => `${BASE_URL}/v1/teams/${teamId}`,
  deleteTeamInviteCode: (params: { teamId: string; inviteId: string }) =>
    `${BASE_URL}/v1/teams/${params.teamId}/invites/${params.inviteId}`,
  getTeam: (teamId: string) => `${BASE_URL}/v2/teams/${teamId}`,
  getAccessRequestStatus: (params: { teamId: string; userId: string }) =>
    `${BASE_URL}/v1/teams/${params.teamId}/request/${params.userId}`,
  inviteUser: (teamId: string) => `${BASE_URL}/v1/teams/${teamId}/members`,
  joinTeam: (teamId: string) =>
    `${BASE_URL}/v1/teams/${teamId}/members/teams/join`,
  listTeamMembers: (teamId: string) => `${BASE_URL}/v2/teams/${teamId}/members`,
  removeTeamMember: (params: { teamId: string; userId: string }) =>
    `${BASE_URL}/v1/teams/${params.teamId}/members/${params.userId}`,
  updateTeamMember: (params: { teamId: string; userId: string }) =>
    `${BASE_URL}/v1/teams/${params.teamId}/members/${params.userId}`,
  requestAccessToTeam: (teamId: string) =>
    `${BASE_URL}/v1/teams/${teamId}/request`,
  updateTeam: (teamId: string) => `${BASE_URL}/v2/teams/${teamId}`,
};

export const nullIfUndefined = (val: any) => {
  if (val === undefined) {
    return null;
  } else {
    return val;
  }
};
