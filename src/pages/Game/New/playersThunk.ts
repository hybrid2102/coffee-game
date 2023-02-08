import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNicksAsync = createAsyncThunk(
  "fetchNicks",
  async (amount: number) => {
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

    await axios
      .get(url, config)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
);
