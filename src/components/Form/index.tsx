import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles'

import plus from '../../../assets/images/icons/plus.png';

export function Form() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor='#808080'
            />
            <TouchableOpacity style={styles.button}>
                <Image source={plus}/>
            </TouchableOpacity>
        </View>
    );
}
