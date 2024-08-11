import React, { useState, useEffect } from 'react';

const Actualizar_Parcialmente_un_Miembro = ({ memberId, projectId }) => {
  const [memberData, setMemberData] = useState({
    project: projectId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData({
      ...memberData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/members/${memberId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });
      if (response.ok) {
        const updatedMember = await response.json();
        console.log('Member updated:', updatedMember);
      } else {
        console.error('Failed to update member');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="project">Proyecto:</label>
        <input
          type="number"
          id="project"
          name="project"
          value={memberData.project}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Actualizar Miembro</button>
    </form>
  );
};

export default Actualizar_Parcialmente_un_Miembro;