import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useHiredPeople } from '../../../context/HiredPeopleContext';

function HireForm({ person }) {
  const [wage, setWage] = useState(0);
  const { setHiredPeople } = useHiredPeople();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setHiredPeople((currentHiredPeople) => [
      ...currentHiredPeople,
      { ...person, wage: wage },
    ]);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
