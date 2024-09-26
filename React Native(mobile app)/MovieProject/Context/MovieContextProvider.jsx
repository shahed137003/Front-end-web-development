
import React, { createContext, useEffect, useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";

export const movieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [favMovie,useFavMovie]=useState([])
  return <movieContext.Provider value={{favMovie ,useFavMovie}}>{children}</movieContext.Provider>;
}