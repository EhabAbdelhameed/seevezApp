import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../../../../theme/appColors'
import { RenderSvgIcon } from '../../../../../Components/atoms/svg'
import { Close } from 'assets/Svgs'

const SkillsCard = ({
    title,
    data
}: {
    title?: string;
    data?: any[];
}) => {

    return (
        <View style={styles.CardContainer}>
            <View style={styles.secContainer}>
                <View style={styles.Row}>
                    <Text style={styles.Title}>{title}</Text>
                    <View style={styles.Row2}>
                        <RenderSvgIcon icon='PLUSFOLLOW' style={{ marginRight: 10 }} width={20} height={20} color={appColors.primary} />
                        <RenderSvgIcon icon='PEN' width={20} height={20} color={appColors.primary} />
                    </View>
                </View>
                <View style={styles.con}>
                    {
                        data?.map((item) => (
                            <View style={styles.smallCardContainer}>
                                <Text style={styles.smallCardText}>{item}</Text>
                                <Close />
                            </View>
                        ))
                    }

                </View>
            </View>

            <View style={styles.devider} />
            <Text style={styles.seeAll}>See all</Text>
        </View>
    )
}

export default SkillsCard

const styles = StyleSheet.create({
    CardContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: appColors.white,
        borderRadius: 25,
        marginTop: 15
    },
    secContainer: {
        width: '100%',
        backgroundColor: appColors.lightGrey2,
        borderRadius: 25,
        padding: 5,
        paddingTop: 10
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    Row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        color: appColors.black,
    },
    smallCardContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderColor: appColors.lightPurple,
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: appColors.bg,
        marginRight: 10,
        marginBottom: 10,
    },
    con: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    smallCardText: {
        fontSize: 12,
        fontWeight: '400',
        color: appColors.blue2,
        marginRight: 5
    },
    devider: {
        height: 1,
        width: '95%',
        backgroundColor: '#E8E8E8',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center'
    },
    seeAll: {
        fontSize: 18,
        fontWeight: '600',
        color: appColors.primary,
        textAlign: 'center'
    }
})