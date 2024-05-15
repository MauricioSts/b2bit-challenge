import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <div className='bg-white flex justify-end'>
      <div className='w-64 p-2'>
        <Button text='Logout' type='button' full onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Navbar;
