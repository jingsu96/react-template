import { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import getInjectors from '../utils/reducerInjector';

const useInjectReducer = ({ key, reducer }) => {
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};

export default useInjectReducer;
