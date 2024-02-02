import React from "react";
import { useState } from "react";
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function AddNote({ items, setItems, selectedId }) {
    const [note, setNote] = useState('');

    const save = () => {
        if (note === '') {
            alert('Please enter a note');
            return;
        } else {
            const selectedPerson = items.find(item => item.id === selectedId);
            if (selectedPerson) {
                const updateItems = items.map(item => {
                    if (item.id === selectedId) {
                        return { ...item, note: note }
                    }
                    return item;
                });
                setItems(updateItems);
                setNote('');

            } else {
                alert('Please select a person');
            }
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={note}
                onChangeText={text => setNote(text)}
                placeholder='Note'
            />
            <Button style={styles.button} title='Save' onPress={save} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    input: {
        padding: 5,
        width: 100,
        height: 30,
    },
    button: {
        height: 30,
    }
});