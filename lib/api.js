async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllUsButsalgagches(preview) {
  const data = await fetchAPI(
    `
      query usBuczalgagches{
        usBuczalgagches {
          data{
              id
              attributes {
                  name
                  code
                  price          
                  image {
                    data {
                      attributes{
                        url
                      }
                    }
                  }
              }
            }
        }
      }
    `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: "published" }),
        },
      },
    }
  );
  return data?.usBuczalgagches;
}

export async function getAllPlitkas(preview) {
  const data = await fetchAPI(
    `
      query plitkas{
        plitkas {
          data{
              id
              attributes {
                  name
                  code
                  price
                  image {
                    data {
                      attributes{
                        url
                      }
                    }
                  }
              }
          }
        }
      }
    `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: "published" }),
        },
      },
    }
  );
  return data?.plitkas;
}
