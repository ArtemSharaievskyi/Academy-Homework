const API_URL = 'http://localhost:3000';

export const fetchPhrases = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch phrases');
  }
  return await response.json();
};

export const addPhrase = async (phrase) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(phrase),
  });

  if (!response.ok) {
    throw new Error('Failed to add phrase');
  }

  return await response.json();
};
