import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1
    },
    itemContainer: {
        padding: 10,
        borderRadius: 20,
        margin: 5,
        backgroundColor: "#efe9e9",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        alignSelf: "center"
    }

})