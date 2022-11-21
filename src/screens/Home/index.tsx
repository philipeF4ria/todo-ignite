import { View, Text, Image, FlatList } from 'react-native';
import { useState } from 'react';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

import { styles } from './styles';

import clipboard from '../../../assets/images/icons/clipboard.png';

type ITask = {
    id: string;
    name: string;
    isFinished: boolean;
}

export function Home() {
    const [task, setTask] = useState<ITask[]>([
        {
            id: '1',
            name: 'Estudar React Native',
            isFinished: false,
        },
        {
            id: '2',
            name: 'Estudar NodeJS',
            isFinished: false,
        },
    ]);

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
                <FlatList 
                    data={task}
                    renderItem={({ item }) => (
                        <Task text={item.name}/>
                    )}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListContainer}>
                            <Image source={clipboard} />
                            <Text style={[styles.emptyListText, {fontWeight: 'bold', marginTop: 16}]}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
