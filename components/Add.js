import React from 'react';
import { useState } from "react";
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function Add({ items, setItems }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const save = () => {
        if (firstName === '' || lastName === '') {
            alert('Please enter a first and last name');
            return;
        } else {
            const newPerson = {
                id: items.length + 1,
                firstName: firstName,
                lastName: lastName,
                note: ''
            }
            const tempItems = [...items, newPerson];
            setItems(tempItems);
            setFirstName('');
            setLastName('');
        }

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={text => setFirstName(text)}
                placeholder='First Name'
            />
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={text => setLastName(text)}
                placeholder='Last Name'
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