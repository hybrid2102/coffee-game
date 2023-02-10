import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNicksAsync = createAsyncThunk(
  "fetchNicks",
  async (amount: number) => {
    // TODO: spostare apikey
    const config = {
      headers: {
        "X-Api-Key": "05f39093c75f41a4b57654df668017ee",
      },
      params: {
        nameType: "firstname",
        quantity: amount,
      },
    };
    const url = "https://randommer.io/api/Name";

    const { data } = await axios.get(url, config);
    return data as string[];
    /* .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data as string[];
    }); */
    /* .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      }); */
  }
);
