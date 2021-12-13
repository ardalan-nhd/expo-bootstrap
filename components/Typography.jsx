import React from 'react'
import { View, Text } from 'react-native'
import { makeStyles } from 'react-native-elements'

export default function Typography({ variant = "p", textStyle, viewStyle, children }) {
    const styles = useStyles(variant)
    return (
        <View style={viewStyle}>
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </View>
    )
}

const useStyles = makeStyles((theme, variant) => ({
    text: {
        color: theme.colors.typography,
        fontFamily: theme.typography[variant].fontFamily ?? theme.typography.fontFamily,
        fontSize: theme.typography[variant].fontSize ?? theme.typography.fontSize,
        fontStyle: theme.typography[variant].fontStyle ?? theme.typography.fontStyle,
        fontWeight: theme.typography[variant].fontWeight ?? theme.typography.fontWeight,
        fontVariant: theme.typography[variant].fontVariant ?? theme.typography.fontVariant
    }
}))
