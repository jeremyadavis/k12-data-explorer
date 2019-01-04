import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

interface Data {
  listTeachers: [
    {
      uuid: string;
      firstName: string;
      lastName: string;
    }
  ];
}

class ListTeachersQuery extends Query<Data, {}> {}

const TeacherList = () => (
  <ListTeachersQuery
    query={gql`
      {
        listTeachers {
          uuid
          firstName
          lastName
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      // console.log('data', data);

      // return <div>Workign ON it</div>;
      if (data) {
        return (
          <>
            <h2>Teachers</h2>
            <ul>
              {data.listTeachers.map(teacher => (
                <li key={teacher.uuid}>{`${teacher.firstName} ${
                  teacher.lastName
                }`}</li>
              ))}
            </ul>
          </>
        );
      }
    }}
  </ListTeachersQuery>
);

export default TeacherList;
