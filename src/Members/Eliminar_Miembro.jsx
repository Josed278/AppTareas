import React from 'react';

const Eliminar_Miembro = ({ memberId }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/members/${memberId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 204) {
        console.log('Member deleted successfully');
      } else {
        console.error('Failed to delete member');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar Miembro</button>
    </div>
  );
};

export default Eliminar_Miembro;