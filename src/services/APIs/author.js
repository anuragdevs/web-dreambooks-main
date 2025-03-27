import { URL, responseValidator, apiError, getAuthToken } from "./helper";

export const getAllAuthors = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${await getAuthToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${URL}/users?role=author`, requestOptions);
    return responseValidator(response);
  } catch (e) {
    return apiError(e);
  }
};
