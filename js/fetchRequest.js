const URL = 'https://newsapi.org/v2/';

const fetchRequest = async (postfix, {
  method = 'GET',
  callback,
  body,
  headers = {
    'X-Api-Key': 'ede9e69086d849cbaea97470c7e752a5',
  },
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${postfix}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
