import { View, Text } from 'react-native';
import { Circle, Trash } from 'phosphor-react-native';

import { styles } from './styles';

type ITaskProps = {
    text: string;
}

export function Task({ text }: ITaskProps) {
    return (
        <View style={styles.container}>
            <Circle color="#4EA8DE" size={24}/>
            <View style={styles.taskTextContainer}>
                <Text style={styles.taskText}>{text}</Text>
            </View>
            <Trash color="#808080" size={24} style={styles.trashIcon}/>
        </View>
    );
}
