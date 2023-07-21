const makeAPICall = async (
  { path, method = "POST", payload = null },
  ...customConfigs
) => {
  const headers = {
    Accept: "application/json, */*",
    "Content-type": "application/json",
  };

  const configs = {
    method,
    headers,
    ...customConfigs,
  };

  if (payload) configs.body = JSON.stringify(payload);

  return window
    .fetch(`${path}`, configs)
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export default makeAPICall;