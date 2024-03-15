import { useContext } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { ThemeContext } from "../context.js/ThemeContext"

export default function Button({title, isBlue = false, isGray =false, image}){
    const theme = useContext(ThemeContext)
    return (
        <View style={[styles.main, theme == 'light'? {backgroundColor: 'lightgray'}: {backgroundColor: '#262626'}, isBlue? {backgroundColor: 'lightblue'}:'' ]}>
            {image? 
            <>
            <Image source={image} style={{height: 40, width: 40}}/>
            </>
        :        <Text style={[styles.text, theme == 'light'? {color: 'black'}: {color: 'white'}, isBlue? {color: 'black'}:""]}>{title}</Text>
        }
        </View>
    )
};
const styles = StyleSheet.create({
    main: {
        borderRadius: 15,
        width: 80,
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30
    }
})