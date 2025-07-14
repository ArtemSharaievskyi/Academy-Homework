import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhrase } from '../features/phrases/phrasesSlice';
import { useNavigate } from 'react-router-dom';

export default function AddPhraseForm() {
  const [en, setEn] = useState('');
  const [ua, setUa] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPhrase({ en, ua }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="English" value={en} onChange={e => setEn(e.target.value)} required />
      <input placeholder="Translation" value={ua} onChange={e => setUa(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
}