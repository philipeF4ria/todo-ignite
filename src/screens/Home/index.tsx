import { View, Text } from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.countersContainer}>
                <View style={styles.counter}>
                    <Text style={[styles.counterText, {color: '#4EA8DE'}]}>Criadas</Text>
                    <View style={styles.counterNumberContainer}>
                        <Text style={styles.counterNumber}>0</Text>
                    </View>
                </View>
                <View style={styles.counter}>
                    <Text style={[styles.counterText, {color: '#8284FA'}]}>Concluídas</Text>
                    <View style={styles.counterNumberContainer}>
                        <Text style={styles.counterNumber}>0</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
