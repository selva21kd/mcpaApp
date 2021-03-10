import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from "react-redux";
import * as RNLocalize from "react-native-localize";
import auth from '@react-native-firebase/auth';

import { selectAppLanguage } from "../../Services/LanguageSelection/actions";
import { ROUTE_NAMES } from "../../Constant/HelperConst/HelperConstant";
import styles from './style';
import { setI18nConfig } from '../../Utils/Translator';
import { AppTracker } from "../../Utils/AppTracker";

const LanguageSelection = ({ navigation }) => {
    const dispatch = useDispatch();
    const [lang, setLang] = useState('tm');
    let sampleData = [{ "key": "tamil", "name": "தமிழ்", "languageTag": "tm" }, { "key": "english", "name": "English", "languageTag": "en" }];

    useEffect(() => {
        setI18nConfig(lang)
        RNLocalize.addEventListener("change", handleLocalizationChange);
        return () => {
            RNLocalize.removeEventListener("change", handleLocalizationChange);
        }
    }, [lang]);

    const handleLocalizationChange = () => {
        setI18nConfig(lang);
        this.forceUpdate();
    };

    const handleLangSelection = async (selectedLang) => {
        let language = await dispatch(selectAppLanguage(selectedLang));
        setLang(selectedLang.languageTag);
        auth().languageCode = selectedLang.languageTag;
        AppTracker(['firebase', 'languageSelection', {
            code: selectedLang.languageTag,
            name: selectedLang.name,
            key: selectedLang.key
        }]);
        if (language) navigation.navigate(ROUTE_NAMES.USER_LOGIN)
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/illustrations/multilingual/language.jpg')} resizeMode="stretch" style={styles.imgStyle} />
            <View style={styles.mainContainer}>
                {/* <View> */}
                <Text style={styles.mainHeading}>மொழியை தேர்ந்தெடுங்கள் / Choose Your Language</Text>
                {
                    sampleData.map(lang => <TouchableOpacity style={styles.btn_menu} key={'lang_' + lang.key} onPress={() => handleLangSelection(lang)}>
                        <View style={styles.btn_langSelection}>
                            <Text style={styles.lbl_btn}>{lang.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )

                }
                {/* </View> */}

            </View>
        </View>
    )
    // return (
    //     <LottieView source={require('../../Assets/illustrations/christmas.json')} autoPlay loop  style={{width: "100%", height: "50%", backgroundColor: 'black'}}/>
    // )
}

export default LanguageSelection



