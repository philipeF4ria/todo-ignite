import { 
    View, 
    Text, 
    Image, 
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';

import { Task } from '../../components/Task';

import { styles } from './styles';

import logo from '../../../assets/images/logo/logo.png';
import plus from '../../../assets/images/icons/plus.png';
import clipboard from '../../../assets/images/icons/clipboard.png';

type ITask = {
    id: string;
    name: string;
    isDone: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [taskName, setTaskName] = useState<string>('');
    
    const todoCount = tasks.reduce((accumulator, task) => {
        if (task.isDone) {
            accumulator.done++;
        }

        accumulator.total++;

        return accumulator;
    }, {
        total: 0,
        done: 0,
    });

    function handleCreateTask() {
        setTasks(prevState => [...prevState, {
            id: uuid.v4().toString(),
            name: taskName,
            isDone: false,
        }]);

        setTaskName('');
    }
   
    function handleToggleTaskDone(id: string) {
        const updateTask = tasks.map(task => {
            if (task.id === id) {
                task.isDone = !task.isDone;
            }

            return task;
        });

        setTasks([...updateTask]);
    }

    function handleRemoveTask(id: string, name: string) {
        Alert.alert('Remover', `Remover a tarefa ${name}`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id)),
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ]);
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
                    value={taskName}
                    onChangeText={setTaskName}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleCreateTask}
                >
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
                            <Text style={styles.counterNumber}>{todoCount.total}</Text>
                        </View>
                    </View>
                    <View style={styles.counter}>
                        <Text style={[styles.counterText, {color: '#8284FA'}]}>Concluídas</Text>
                        <View style={styles.counterNumberContainer}>
                            <Text style={styles.counterNumber}>{todoCount.done}</Text>
                        </View>
                    </View>
                </View>
                <FlatList 
                    data={tasks}
                    renderItem={({ item }) => (
                        <Task 
                            text={item.name} 
                            handleToggleTaskDone={() => handleToggleTaskDone(item.id)}
                            isDone={item.isDone}
                            handleRemoveTask={() => handleRemoveTask(item.id, item.name)}
                        />
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
