import SearchUniversities from "./screens/SearchUniversities";
import FavouritedUniversities from "./screens/FavoritedUniversites";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritedListContext from "./contexts/FavouritedListContext";
import { useState } from "react";

const Stack = createNativeStackNavigator()

export default function App() {
  let [favouritedList, setFavouritedList] = useState(new Set());

  return <FavouritedListContext.Provider value={{ favouritedList, setFavouritedList }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Universities" component={SearchUniversities} />
        <Stack.Screen name="Favourites" component={FavouritedUniversities} />
      </Stack.Navigator>
    </NavigationContainer>
  </FavouritedListContext.Provider>
}