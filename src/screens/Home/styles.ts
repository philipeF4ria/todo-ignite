import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    countersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    counter: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    counterText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 8,
    },
    counterNumberContainer: {
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterNumber: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D9D9D9',
    },
});
