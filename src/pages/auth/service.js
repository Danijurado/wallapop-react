import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = async (credentials) => {
  const { accessToken } = await client.post("/api/auth/login", credentials);
  setAuthorizationHeader(accessToken);

  if (credentials.session) {
    storage.set("auth", accessToken);
  }
};

export const logout = () => {
  removeAuthorizationHeader();
  storage.clear();
};
