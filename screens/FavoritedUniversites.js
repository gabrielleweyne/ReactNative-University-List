import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import UniversityList from '../components/UniversityList';
import FavouritedListContext from '../contexts/FavouritedListContext';

export default function FavouritedUniversities(props) {
    let { favouritedList, setFavouritedList } = useContext(FavouritedListContext)

    function removeFavouritedFuncion(uni) {
        return function () {
            let aux = favouritedList

            aux.delete(uni)

            setFavouritedList(aux)
        }
    }

    return <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <UniversityList data={Array.from(favouritedList.values())} itemIdKey={"name"} onItemPress={removeFavouritedFuncion} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
