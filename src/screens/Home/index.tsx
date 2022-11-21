import { View, Text, Image } from 'react-native';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

import { styles } from './styles';

// import clipboard from '../../../assets/images/icons/clipboard.png';

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
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
                <Task />
            </View>
        </View>
    );
}
