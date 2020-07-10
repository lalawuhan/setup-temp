import Prismic from "prismic-javascript";

// Prismic API endpoint
export const apiEndpoint = "https://next-trial.cdn.prismic.io/api/v2";

// Access Token if the repository is not public
//export const accessToken = process.env.PRISMIC_TOKEN

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint);
