import axios from "axios";

/* export function useNickName(howMany: number) {
  const nickNames: string[] = [];
  for (let i = 0; i < howMany; i++) {
    nickNames.push("Maiale volante " + i);
  }
  return nickNames;
} */

export async function testAxios() {
  const config = {
    headers: {
      "X-Api-Key": "05f39093c75f41a4b57654df668017ee",
    },
    params: {
      nameType: "firstname",
      quantity: "1",
    },
  };
  const url = "https://randommer.io/api/Name";

  await axios
    .get(url, config)
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
