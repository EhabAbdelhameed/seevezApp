import { View, Text, Image, ImageRequireSource, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from '../styles';
import { Modalize } from 'react-native-modalize';
import JumpModal from './JumpModal';


const jobSeeker = {
    title: "Sign up as a job seeker",
    question: "",
    answers: [{
        answer: "Employed",
        selected: false
    },
    {
        answer: "Unemployed",
        selected: true
    },
    {
        answer: "Internship",
        selected: false
    },
    {
        answer: "Freelancer",
        selected: false
    }

    ]
}
const creator = {
    title: "Sign up as a recruiter",
    question: "Are you a company or a freelance recruiter ?",
    answers: [{
        answer: "Company",
        selected: false
    },
    {
        answer: "Freelancer recruiter",
        selected: true
    }]
}

const RectangleBtn = ({
    img,
    title1,
    title2,
    nav,

}:
    {
        img: ImageRequireSource;
        title1: string;
        title2: string;
        nav?: any
    }) => {
    const ModalRef = useRef<Modalize>(null)
    const [data, setData] = useState(creator)
    return (
        <>
            <TouchableOpacity style={styles.rectangleContainer}
                onPress={() => {
                    title2.toLowerCase().includes('recruiter') ?
                        setData(creator) : setData(jobSeeker)
                        setTimeout(() => {
                            ModalRef.current?.open()                            
                        }, 100);
                }}
            >
                <Image
                    source={img}
                    style={styles.imgRectangle}
                    resizeMode='stretch'
                />
                <Text style={styles.rectangleText}>{title1}</Text>
                <Text style={[styles.rectangleText, { marginTop: 1 }]}>{title2}</Text>
            </TouchableOpacity>
            <JumpModal
                ModalRef={ModalRef}
                setData={setData}
                data={data}

            />
        </>
    )

}

export default RectangleBtn