import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './Styles';
const StyledButton = (props) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    
    const { type, content, onPress } = props;
    const backgroundColor = type === 'primary' ? 'white' : 'black';
    const textColor = type === 'primary' ? 'black' : 'white';
    return (

        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}>
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>

        </View>
    );
};

export default StyledButton;