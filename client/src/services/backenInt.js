import axios from "axios";
import { io } from "socket.io-client";

const BackendBaseUrl =
  "https://week-5-web-sockets-assignment-mahoro.onrender.com";
const APIBaseUrl =
  "https://week-5-web-sockets-assignment-mahoro.onrender.com/api";

const API = axios.create({
  baseURL: APIBaseUrl,
});

export const registerUser = (username) =>
  API.post("/auth/register", { username });

export const getRooms = () => API.get("/rooms");
export const createRoom = (name) => API.post("/rooms", { name });

export const getMessages = (roomId) => API.get(`/messages/${roomId}`);

export const socket = io(BackendBaseUrl, { autoConnect: false });
