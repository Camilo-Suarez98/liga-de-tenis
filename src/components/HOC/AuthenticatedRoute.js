
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

import Loader from '../Loader';

const authenticatedRoute = (Component = null, options = {}) => {

  const AuthenticatedRoute = (props) => {
    const [loading, setLoading] = useState(true);
    const isAdmin = Cookies.get('role') === 'true';

    useEffect(() => {
      if (isAdmin) {
        setLoading(false);
      } else {
        redirect(options.pathAfterFailure || '/');
      }
    }, [isAdmin]);

    if (loading) {
      return <Loader />;
    }

    return <Component {...props} />;
  }

  return AuthenticatedRoute;
};

export default authenticatedRoute;
