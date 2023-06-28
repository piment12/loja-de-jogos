import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: "space-between",
 
    },

    titulo: {
        color: '#025757',
        fontSize: 50,
        fontWeight: 900,
        marginTop: 50,
        fontWeight: 600,
    },

    rodape: {
        color: 'black',
        fontSize: 14,
        alignItems: 'center',
    },

    bloco: {
        width: 400,
        backgroundColor: '#404343',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',

    },

    esq: {
        width: 150,
    },

    dir: {
        width: 240,
        marginLeft: 0,
        
    },

    imagem:{
        height: 160,
        width: 110,
        padding: 20,
        borderRadius: 10,
    },

    imagem2:{
        height: 300,
        width: 210,
        padding: 60

    },

    

    nome:{
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 1000,
        color: 'white'
    },

    compre:{
        paddingLeft: 70,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
        fontWeight: 600,
        paddingVertical: 10,
        width: 200

    },

    tamanho:{
        padding: 5,
        fontSize: 15,
        color: 'white'
    },

    tipo:{
        padding: 7,
        fontSize: 20,
        color: 'white'

    },

    input:{
        marginBottom: 10,
        marginRight: 50,
        backgroundColor: "red",
        padding: 20,
        width: 350,
        flexDirection: "row",
    },

    pesquisa:{
        padding: 50,
      
    },

    containe2: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: 'white',
        alignItems: "center",
        height: 605,
        margin: 15
    },
    
    texto2: {
        fontSize: 50,
        fontWeight: 'bold', 
    },

    descricao: {
        textAlign: "justify",
        fontSize: 17
    },

    buscar: {
        backgroundColor: '#000e1e',
        margin: 10,
        color: 'white',
    },

    textNome:{
        alignItems: "center",
        backgroundColor: 'gray',
        fontSize: 20,
        flex: 1,
        justifyContent: "center",
    },

    button:{
        
    },



});

export default styles;