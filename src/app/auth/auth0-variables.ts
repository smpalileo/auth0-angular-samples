interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'iI1K1C9n3tFgjrt3Y3uV2L4uLml35dNQ',
  domain: 'ryanchenkie.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
