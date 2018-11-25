import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    welcomeTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'gloria',
    },

    welcomeTitleTarefa: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'gloria',
        color: '#b23601',
    },

    formContainerTarefa:{
        position: 'relative',
        bottom: 0,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        borderRightWidth: 6,
        borderColor: '#b23601',
        borderStyle: 'solid',
    },

    welcomeTitleLembrete: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'gloria',
        color: '#4c7e5e',
    },

    formContainerLembrete:{
        position: 'relative',
        bottom: 0,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        borderRightWidth: 6,
        borderColor: '#4c7e5e',
        borderStyle: 'solid',
    },

    welcomeTitleSimples: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'gloria',
        color: '#012a7c',
    },

    formContainerSimples:{
        position: 'relative',
        bottom: 0,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        borderRightWidth: 6,
        borderColor: '#012a7c',
        borderStyle: 'solid',
    },

    fontContainer:{
        fontFamily: 'patrickH',
    },
    
    fontTags:{
        fontFamily: 'patrickH',
        color: 'black',
    },

    formContainer: {
        position: 'relative',
        bottom: 0,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
    },

    modalContent: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    title:{
        fontFamily: 'gloria',
        fontSize: 16,
    },

    footer:{
        flexDirection: 'row',
    },

    headerContainer: {
        top: 0,
        right: 0,
        left: 0,
        padding: 10,
        width: '100%',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          android: {
            elevation: 10,
          },
        }),
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    footerContainer:{
        bottom: 0,
        padding: 12,
        width: '100%',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          android: {
            elevation: 10,
          },
        }),
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    add:{
        backgroundColor: '#0fa400',
    },

    cancel:{
        backgroundColor: '#e25a00',
    },

    tags:{
        backgroundColor: 'white',
    },
});