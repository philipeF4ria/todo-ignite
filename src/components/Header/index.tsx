import { View, Image } from 'react-native';

import { styles } from './styles';

import { Form } from '../Form';

import logo from '../../../assets/images/logo/logo.png';

export function Header() {
    return (
        <>
            <View style={styles.container}>
                <Image source={logo}/>
            </View>
            <Form />
        </>
    );
}
