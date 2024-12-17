import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { config } from "../config";
import { requestType } from "../utilities/types";

export type RequestType = {
  method: string;
  url: string;
  headers?: any;
  data?: any;
  isMultipart?: boolean;
  state?: requestType;
  setState?: Dispatch<SetStateAction<requestType>>;
  successFunction?: (res?: AxiosResponse) => void;
  errorFunction?: (err?: any) => void;
  load?: boolean;
  requestCleanup?: boolean;
  id?: string;
};

const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
});

export async function requestHandler({
  method,
  url,
  headers,
  data,
  setState,
  successFunction,
  errorFunction,
  load,
  requestCleanup,
  id,
}: RequestType) {
  if ((setState && load === true) || (setState && load === undefined)) {
    setState((prevState) => {
      return { ...prevState, isLoading: true, id };
    });
  } else if (setState && load === false) {
    setState((prevState) => {
      return { ...prevState, isLoading: false, id };
    });
  }

  axiosInstance({
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    data,
  })
    .then((res) => {
      if (setState) {
        setState({
          isLoading: false,
          data: res?.data,
          error: null,
          id,
        });

        if (requestCleanup) {
          setTimeout(() => {
            setState({
              isLoading: false,
              data: null,
              error: null,
              id,
            });
          }, 5000);
        }
      }
      if (successFunction) {
        successFunction(res);
      }
    })
    .catch((err) => {
      if (setState) {
        setState({
          isLoading: false,
          data: null,
          error: err.response?.data?.error
            ? err.response?.data?.error?.responseMessage
            : !err.response?.data?.error
            ? err.response?.data?.responseMessage.toString()
            : err.message,
          id,
        });

        if (requestCleanup) {
          setTimeout(() => {
            setState({
              isLoading: false,
              data: null,
              error: null,
              id,
            });
          }, 5000);
        }
      }

      if (errorFunction) {
        errorFunction();
      }
    });

  return null;
}
