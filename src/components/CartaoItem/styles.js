import { StyleSheet } from "react-native"

const stylesCard = StyleSheet.create({
    caixaExt: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 10,
        borderColor: '#0f1',
        borderRadius: 25,
        padding: 10,
        margin: 50,
        marginBottom: 25,
      },
    image: {
        width: 120,
        height: 120,
        margin: 10,
        borderRadius: 5,
      },
    nomeItem: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
    descript: {
        fontSize: 16,
      },
    botaoTroca: {
        borderWidth: 1,
        borderRadius: 50,
        margin: 5,
        padding: 10,
        
    },
});

export default stylesCard;