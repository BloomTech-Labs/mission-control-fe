import React, { useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from './Queries/projectQueries';
import ProjectListContainer from './ProjectListContainer';
import ProjectListRow from './ProjectListRow';
import Settings from '../Settings/Settings';

import { FILTERED_DATA as newQuery } from '../FilterBar/FilterBarQueries';
import { ProjectSearchContext } from '../../contexts/FilterBarContext';

// ProjectListView is the default view when a user signs into the application
// The PROJECT_LIST_VIEW query matches against the currently authenticated user
// and returns a list of projects that they are authorized to view.

const ProjectListView = () => {
  const projectSearchContext = useContext(ProjectSearchContext);

  const [state] = useQuery({
    query: newQuery,
    variables: {
      filter: {
        name_contains: projectSearchContext.searchTerm,
      },
    },
  });

  const { data, fetching, error } = state;

  if (error) {
    return (
      <p>
        Error "PROJECT_LIST_VIEW": {error.name} {error.message}
      </p>
    );
  }

  if (fetching) {
 return <LinearProgress style={{width:'70%', height:'8px', margin:'35px auto'}}  color="primary" />;
  } else {
    console.log(data);
  }

  //<=====  Lab23 Notes 5/26/2020 ====>
  //<===== Uncommented after engineer manger's refactoring ====>
  //<=====  Not uncommented in other dir files in recent version ====>

  // const columns =
  //   data && data.programs[0].statuses && data.programs[0].statuses; // .filter(status => status.display);

  //console.log('PROJECT_DATA: %O', data);
  return (
    <div>
      <Settings />

      <ProjectListContainer>
        {/* statusColumn={columns}> */}
        {data.projects.map(project => (
          <ProjectListRow
            key={project.id}
            project={project}
            // statusColumn={columns}
            // statusDisplay={columns.display}
          />
        ))}
      </ProjectListContainer>
    </div>
  );
};

export default ProjectListView;
