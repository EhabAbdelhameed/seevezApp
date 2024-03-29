import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { RNModal } from '../../../../ui'
import { RenderSvgIcon } from '../../../../Components/atoms/svg';
import styles from '../styles';
import { appColors } from '../../../../theme/appColors';
import { appSizes } from '../../../../theme/appSizes';
import Button from '../../../../Components/molecules/Button';
import { useNavigation } from '@react-navigation/native';


const JumpModal = (
    {
        ModalRef,
        data,
        setData
    }: {
        ModalRef: any;
        data: {
            title: string;
            question: string;
            answers: {
                answer: string;
                selected: boolean
            }[]
        },
        setData: (str: any) => void;
    }
) => {
    const[buttonIndex,setButtonIndex]=React.useState(0)
    const navigation = useNavigation<any>()
    const header = () => {
        return (
            <>
                <View style={styles.ModalHeaderContanier}>
                    <RenderSvgIcon
                        icon='HEADERMODALLINE'
                        width={90}
                    />
                    <Text style={[styles.rectangleText, {
                        marginTop: 0,
                        color: appColors.black,
                        alignSelf: "flex-start"
                    }]}>{data?.title}</Text>
                </View>
            </>
        )
    }
    return (
        <RNModal
            ref={ModalRef}
            renderModalHeader={header}
            // height={appSizes.height * .5}
        >
            <View style={styles.ModalContanier}>
                {data?.question.length ? <Text style={[styles.questionText, { marginBottom: 10 }]}>{data?.question}</Text> : null}
                {data?.answers.map(({ answer, selected }, index) => (
                    <View style={styles.rowAnswer}>
                        <Text style={[styles.questionText,
                        {
                            marginTop: 0
                        }]}>{answer}</Text>
                        <TouchableOpacity onPress={()=>{
                           setButtonIndex(index)
                        }}>
                        <View style={styles.Circle}>
                            {buttonIndex==index?
                           <View
                                style={styles?.innerCircle}
                            />:null}
                        </View>
                        </TouchableOpacity>
                    </View>
                ))}
                <Button text="Done" onPress={() => {
                    ModalRef.current?.close()
                    navigation.navigate("SignupWithSocail",{work_type:data?.answers[buttonIndex].answer,title:data?.title})
                }}
                    style={styles.btn}
                />
            </View>
        </RNModal>
    )
}

export default JumpModal