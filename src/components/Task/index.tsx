import { View, Text, TouchableOpacity } from 'react-native';
import { Circle, CheckCircle, Trash } from 'phosphor-react-native';

import { styles } from './styles';

type ITaskProps = {
    text: string;
    isDone: boolean;
    handleToggleTaskDone: () => void;
}

export function Task({ text, isDone, handleToggleTaskDone }: ITaskProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleTaskDone}>
                {
                    isDone === false ? 
                    (<Circle color="#4EA8DE" size={24}/>) : 
                    (<CheckCircle color="#5E60CE" size={24}/>)
                }
            </TouchableOpacity>
            <View style={styles.taskTextContainer}>
                <Text style={[
                    styles.taskText,
                    isDone === true ? {textDecorationLine: 'line-through'} : undefined
                ]}>{text}</Text>
            </View>
            <Trash color="#808080" size={24} style={styles.trashIcon}/>
        </View>
    );
}
