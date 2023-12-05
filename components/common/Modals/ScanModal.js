import { Modal, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ScanModal({ isVisible, children, onClose }) {


  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Results</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}


        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Likely Gluten Free!</Text>
          <Image style={styles.preview} source={require("./Daiya.png")} />
        </View>

        <View style={styles.line} />

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Product Info</Text>
          <Text style={styles.infoText}> Ingredients: </Text>
          <Text style={styles.infoText}> GFCO cert:</Text>
          <Text style={styles.infoText}> Product link:</Text>
          <Text style={styles.infoText}> Recent recalls:</Text>
          <Text style={styles.infoText}> Contact info: </Text>
        </View>
        
      </View>
      
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '70%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '12%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10
  },
  preview: {
    height: 150,
    width: 150
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: "80%",
    marginHorizontal: '10%',
  },
  infoTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
    width: "100%",
    marginHorizontal: -200
  },
  line: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    width: '80%', // Adjust the width as needed
    alignSelf: 'center',
  },
});
