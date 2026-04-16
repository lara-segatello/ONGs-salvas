import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'; // Removido o ; e adicionado o path correto
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashBoardScreen({ navigation, route }: Props) {
    const { userName, volutarioId, userEmail } = route.params;

    const sair = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {userName}, que bom ter você aqui!</Text>
            <Text style={styles.info}>ID: {volutarioId}</Text>
            <Text style={styles.info}>Email: {userEmail}</Text>
            
            <View style={styles.buttonContainer}>
                <Button title="Sair" onPress={sair} color="#115272" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#115272',
        textAlign: 'center'
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333'
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%'
    }
});
