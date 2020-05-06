import React, { useEffect } from 'react';
import { useLocation, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import initializeAnalytics from '../utils/initializeAnalytics';

import Authorization from './Authorization';
import { LabelProvider } from '../contexts/LabelContext';
import { ColumnProvider } from '../contexts/ColumnContext';
import { ProjectSearchProvider} from '../contexts/FilterBarContext';
import { TagProvider } from '../contexts/TagContext';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, [location]);

  return [
    <LabelProvider>
      <ColumnProvider>
      <TagProvider>
      <ProjectSearchProvider>
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <SecureRoute path="/" component={Authorization} />
      </ProjectSearchProvider>
      </TagProvider>
      </ColumnProvider>
    </LabelProvider>,
  ];
};

export default App;
