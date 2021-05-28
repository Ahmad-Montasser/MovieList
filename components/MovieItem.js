import React,{useState} from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
const baseURL = 'https://image.tmdb.org/t/p/original';

const MovieItem = props => {
    return (
            <View style={styles.container}>
            <View style={styles.itemData}>
                <Text style={styles.titleStyle}>{props.title}</Text>
                <Text style={styles.bodyStyle}>{props.overview}</Text>
                <Text style={styles.bodyStyle}>{props.date}</Text>
            </View>
            <Image
                style={styles.poster} 
                source={{uri: baseURL + props.imagePath, }}
               />
        </View>
    );
};
const styles = StyleSheet.create({
    itemData: {
    justifyContent:'space-between',
    flex:1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    },
    bodyStyle: {
        fontSize: 14,
        fontWeight:'normal'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight:'bold'
    },
    container: {
    flex:1,
    flexDirection:'row',
        
        width:'100%',
    height:'100%'
    },
    poster: {
    marginVertical: 10,
    backgroundColor: '#ccc',
    flex: 1,
    width: null,
    height: null,
        resizeMode: 'contain',
    borderColor: 'black',
    borderWidth: 1,
}
});

export default MovieItem;