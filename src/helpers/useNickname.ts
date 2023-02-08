import axios from "axios";

export function useNickName(howMany: number) {
  const nickNames: string[] = [];
  for (let i = 0; i < howMany; i++) {
    nickNames.push("Maiale volante " + i);
  }
  return nickNames;
}

export function testAxios() {
  const config = {
    headers: {
      "X-Api-Key": "05f39093c75f41a4b57654df668017ee",
    },
  };
  const url = "https://randommer.io/api/Name?nameType=firstname&quantity=1";

  axios
    .get(url, config)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
