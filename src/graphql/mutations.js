/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBug = /* GraphQL */ `
  mutation CreateBug(
    $input: CreateBugInput!
    $condition: ModelBugConditionInput
  ) {
    createBug(input: $input, condition: $condition) {
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
export const updateBug = /* GraphQL */ `
  mutation UpdateBug(
    $input: UpdateBugInput!
    $condition: ModelBugConditionInput
  ) {
    updateBug(input: $input, condition: $condition) {
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
export const deleteBug = /* GraphQL */ `
  mutation DeleteBug(
    $input: DeleteBugInput!
    $condition: ModelBugConditionInput
  ) {
    deleteBug(input: $input, condition: $condition) {
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
