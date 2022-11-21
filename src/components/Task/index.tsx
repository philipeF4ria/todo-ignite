import { View, Text } from 'react-native';
import { Circle, Trash } from 'phosphor-react-native';

import { styles } from './styles';

export function Task() {
    return (
        <View style={styles.container}>
            <Circle color="#4EA8DE" size={24}/>
            <View style={styles.taskTextContainer}>
                <Text style={styles.taskText}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
            </View>
            <Trash color="#808080" size={24} style={styles.trashIcon}/>
        </View>
    );
}
