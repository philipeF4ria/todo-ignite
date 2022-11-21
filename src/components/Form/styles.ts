import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
        width: '100%',
        paddingHorizontal: 24,
    },
    textInput: {
        backgroundColor: '#262626',
        flex: 1,
        height: 54,
        borderRadius: 6,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1E6F9F',
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: 6,
    },
});
