import React from 'react'
import { View, Text } from 'react-native'
import { makeStyles, useTheme } from 'react-native-elements'

export default function Typography({ variant = "p", textStyle, viewStyle, children }) {
    console.log(useTheme().theme.typography)
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
        fontFamily: theme.typography[variant]?.fontFamily ?? theme.typography.default.fontFamily,
        fontSize: theme.typography[variant]?.fontSize ?? theme.typography.default.fontSize,
        fontStyle: theme.typography[variant]?.fontStyle ?? theme.typography.default.fontStyle,
        fontWeight: theme.typography[variant]?.fontWeight ?? theme.typography.default.fontWeight,
        fontVariant: theme.typography[variant]?.fontVariant ?? theme.typography.default.fontVariant
    }
}))
