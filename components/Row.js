import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Row({ person, select, selectedId }) {
    const backgroundColor = person.id === selectedId ? '#c0c0c0' : '#f5f5f5';
    console.log(person);
    return (
        <Pressable onPress={() => select(person.id)}>
            <Text style={[styles.row, { backgroundColor }]}>
                {person.lastName}, {person.firstName}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 5,
        marginBottom: 5,
    }
});
