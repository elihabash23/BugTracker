/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBug = /* GraphQL */ `
  query GetBug($id: ID!) {
    getBug(id: $id) {
      id
      name
      description
      createdAt
      dueDate
      severity
      status
      Reproducable
      updatedAt
    }
  }
`;
export const listBugs = /* GraphQL */ `
  query ListBugs(
    $filter: ModelBugFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBugs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        dueDate
        severity
        status
        Reproducable
        updatedAt
      }
      nextToken
    }
  }
`;
