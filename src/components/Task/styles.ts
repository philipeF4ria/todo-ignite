import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 8,
        padding: 12,
    },
    taskTextContainer: {
        marginLeft: 8,
        maxWidth: '80%',
    },
    taskText: {
        color: '#F2F2F2',
        fontSize: 14,
        fontWeight: '400',
    },
    trashIcon: {
        marginLeft: 'auto',
    },
});
