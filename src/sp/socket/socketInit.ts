import React from "react";
import * as socketClient from "socket.io-client";

import { AppDispatch } from "../redux/store";
import { baseURL } from "@/data/api/config/rootAxios";

export const socket = socketClient.connect(baseURL as string, {
  path: "/api/socketio",
});
export const SockeContext = React.createContext<any | null>(null);

export const handleEvents = (
  socket: socketClient.Socket,
  User: any,
  dispatch: AppDispatch,
  accessToken: string
) => {
  socket.on("re_events", async (data: any) => {
    if (data.to === User?.userName) {
      if (data.action === "Create_refill") {
        //Admin cập nhật refills
      } else if (data.action === "Success_Refills") {
        // user cập nhật refills
        //User Cập nhật
      } else if (data.action === "Create_withdraw") {
        //Admin cập nhật withdraws
      } else if (data.action === "Success_Withdraw") {
        // user cập nhật withdraws
      }
    }
  });
};
