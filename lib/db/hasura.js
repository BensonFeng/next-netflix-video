// export async function queryHasuraGQL(operationsDoc, operationName, variables) {
//   const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       query: operationsDoc,
//       variables: variables,
//       operationName: operationName,
//     }),
//   });
//   return await result.json();
// }

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmVuIiwiaWF0IjoxNjQ3NTU0MDE0LCJleHAiOjE2NDgxNTg4MzksImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwibW9kIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiYmVuIn19.ynwAil7cGlkz9xywSxKdEgLH8xtLpJyd-Muq4D-d65g",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

function fetchMyQuery() {
  const operationsDoc = `
  query MyQuery {
    users {
      id
      issuer
      email
      publicAddress
    }
  }
`;
  return fetchGraphQL(operationsDoc, "MyQuery", {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
