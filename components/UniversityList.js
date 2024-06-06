import UniversityListItem from "./UniversityListItem";

import { FlatList, StyleSheet } from 'react-native';


export default function UniversityList({ data, itemIdKey, onItemPress }) {
    return <FlatList
        style={styles.universitiesList}
        data={data}
        renderItem={({ item }) => <UniversityListItem university={item} onPress={onItemPress(item)} />}
        keyExtractor={(item) => item[itemIdKey]} />
}

const styles = StyleSheet.create({
    universitiesList: {
        margin: 8,
        paddingHorizontal: 16,
        paddingTop: 16,
        overflow: 'scroll'
    }
})