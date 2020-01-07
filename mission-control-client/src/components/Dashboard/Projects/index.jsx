import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

import styles from '../../../styles/projects.module.scss';

const FEED_QUERY = gql`
  {
    info {
      project
      team_lead
      section_lead
      status
      update
    }
  }Expected Iterable, but did not find one for field Query.info.
`;

const Projects = () => {
  const [state] = useQuery({ query: FEED_QUERY });
  console.log(state);

  return (
    <pre>{JSON.stringify(state, null, 4)}</pre>
    // {/* <table> */}
    // {/*   <tr> */}
    // {/*     <th>Project Name</th> */}
    // {/*     <th>Section Lead</th> */}
    // {/*     <th>Team Lead</th> */}
    // {/*     <th className={styles.rtd}>Last Updated</th> */}
    // {/*     <th className={styles.rtc}>Status</th> */}
    // {/*   </tr> */}
    // {/*   {dummyData.map(project => ( */}
    // {/*     <tr> */}
    // {/*       <td className={styles.title}>{project.project}</td> */}
    // {/*       <td>{project.section_lead}</td> */}
    // {/*       <td>{project.team_lead}</td> */}
    // {/*       <td className={styles.rtd}>{project.update}</td> */}
    // {/*       <td className={styles.rtc}>{project.status}</td> */}
    // {/*     </tr> */}
    // {/*   ))} */}
    // {/* </table> */}
  );
};

export default Projects;
