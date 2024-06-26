import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import CustomButton from "../components/customButton"
import CustomTextInput from "../components/customTextInput"

const EditNote = ({ setCurrentPage, editData, iD, noteList }) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
        const noteToEdit = noteList.find(note => note.id === iD)
        if (noteToEdit) {
            setTitle(noteToEdit.title)
            setDesc(noteToEdit.desc)
        }
    }, [iD])

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Update Note</Text>
            <CustomTextInput
                text={title}
                onChange={setTitle}
                label="Judul"
                placeholder="Judul"
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput
                text={desc}
                onChange={setDesc}
                label="Deskripsi"
                placeholder="Deskripsi"
                multiline
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="#fff"
                    text="Simpan"
                    width="100%"
                    onPress={() => editData(iD, title, desc)}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDD"
                    color="#203239"
                    text="Kembali ke Home"
                    width="100%"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
})

export default EditNote