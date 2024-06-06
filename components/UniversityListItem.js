import { StyleSheet, Text, View } from "react-native"
import Button from "./Button"


export default function UniversityListItem({ university, onPress }) {
    // console.log({ university })

    return <View style={styles.universityListItemContainer}>
        <Button title={university.name} style={{ text: styles.universityListItemText }} onPress={onPress} />
    </View>
}

const styles = StyleSheet.create({
    universityListItemContainer: {
        marginBottom: 12,
        padding: 8,
        borderColor: "#3F334D",
        backgroundColor: "#766E7D",
        borderWidth: 2,
        borderRadius: 10,
    },
    universityListItemText: {
        fontSize: 20,
        color: "#2C1F3A",
        maxWidth: "18rem"
    }
})