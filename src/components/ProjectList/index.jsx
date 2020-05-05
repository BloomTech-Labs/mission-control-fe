import React, {useContext, useEffect} from 'react';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from './Queries/projectQueries';
import {ProjectSearchContext} from '../../contexts/labs23-t1-filterbar-context';
import { FILTERED_DATA as newQuery } from '../FilterBar/filterBarQueries';
import ProjectListContainer from './ProjectListContainer';
import ProjectListRow from './ProjectListRow';
import Settings from '../Settings/Settings';

// ProjectListView is the default view when a user signs into the application
// The PROJECT_LIST_VIEW query matches against the currently authenticated user
// and returns a list of projects that they are authorized to view.

const ProjectListView = () => {
  //const [state] = useQuery({ query });
 
  const projectSearchContext = useContext(ProjectSearchContext);

  const [myTestState] =  useQuery({
    query: newQuery,
    variables: { filter: {
        name_contains: projectSearchContext.contains
    }}
  })

  const { data, fetching, error } = myTestState;

  if (error) {
    return (
      <p>
        Error "PROJECT_LIST_VIEW": {error.name} {error.message}
      </p>
    );
  }

  if (fetching) {
    return <p>Loading...</p>;
  } else {
    console.log(data)
  }


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
