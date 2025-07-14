import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhrases } from '../features/phrases/phrasesSlice';

const PhraseList = () => {
  const dispatch = useDispatch();
  const phrases = useSelector((state) => state.phrases.data);
  const status = useSelector((state) => state.phrases.status);
  const error = useSelector((state) => state.phrases.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPhrases());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!Array.isArray(phrases)) {
    return <p>No phrases available.</p>;
  }

  return (
    <ul>
      {phrases.map((phrase) => (
        <li key={phrase.id}>
          <strong>{phrase.text}</strong> - {phrase.translation}
        </li>
      ))}
    </ul>
  );
};

export default PhraseList;
