import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
const { Typography } = require('@mui/material');
const { Link } = require('react-router-dom');

export default function InvitationText() {
  const isAuth = useSelector(selectToken);
  return (
      <div>
        <ul>
          {!isAuth && (
            <>
              <li>
                <Typography
                  component="h3"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  To be able to use the application, please{' '}
                  <Link to="/register">register</Link>!
                </Typography>
              </li>
              <li>
                <Typography
                  component="h3"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Already have an account? Please <Link to="/login">login</Link>!
                </Typography>
              </li>
            </>
          )}
          {isAuth && (
            <li>
              {isAuth && (
                  <Typography
                    component="h3"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                  >
                    It looks like you are not logged in. Only authorized users can use the
                    application.
                  </Typography>
                )}
            </li>
          )}
        </ul>
      </div>
  );
}
