import { 
    View, 
    Text, 
    Image, 
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useState } from 'react';

import { Task } from '../../components/Task';

import { styles } from './styles';

import logo from '../../../assets/images/logo/logo.png';
import plus from '../../../assets/images/icons/plus.png';
import clipboard from '../../../assets/images/icons/clipboard.png';

type ITask = {
    id: string;
    name: string;
    isFinished: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [taskName, setTaskName] = useState<string>('');

    function handleCreateTask() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                    onChangeText={setTaskName}
                />
                <TouchableOpacity style={styles.button} >
                    <Image source={plus}/>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={[
                        styles.countersContainer, 
                        tasks.length > 0 ? {borderBottomWidth: 0} : undefined
                    ]}>
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
                    data={tasks}
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
