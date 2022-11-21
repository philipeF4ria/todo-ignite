import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        backgroundColor: '#0D0D0D',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
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
    body: {
        paddingHorizontal: 24,
    },
    countersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    emptyListContainer: {
        alignItems: 'center',
        marginTop: 48,
    },
    emptyListText: {
        color: '#808080',
        lineHeight: 20,
        fontSize: 14,
    },
});
