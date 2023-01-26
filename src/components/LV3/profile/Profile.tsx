import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/auth';
import Button from '../../LV2/Button/Button';
import NameChangeForm from './NameChangeForm';

const Profile = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <section>
      <div className='space-y-3 flex-center flex-col my-20'>
        <NameChangeForm />

        <div className='pt-40'>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
