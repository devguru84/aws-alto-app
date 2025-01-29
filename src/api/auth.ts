import { fetchAuthSession } from "aws-amplify/auth";

export const getAuthToken = async () => {
  try {
    const session = await fetchAuthSession();
    const token = session.tokens?.idToken;
    return token;
  } catch (error) {
    console.error("Error getting auth token", error);
    return null;
  }
};
