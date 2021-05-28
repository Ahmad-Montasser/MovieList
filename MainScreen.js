import React from 'react';
import { StyleSheet, Text, View,  FlatList, ActivityIndicator } from 'react-native';
import MovieItem from './components/MovieItem';
import Spinner from 'react-native-loading-spinner-overlay';
class MainScreen extends React.Component {
  pageNumber = 0;
    getMoviesFromApiAsync = async () => {
      try {
        
        this.pageNumber++;
        if(this.pageNumber === 1)
         this.setState({ isLoadingForFirstTime: true });
        else
         this.setState({ isLoading: true });
          
      console.log(this.pageNumber);
      let response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=0c8208481f8a24f87730242d869c1d05&page='+this.pageNumber
      );
      let json = await response.json();
      let newMovieList = this.state.movieList.concat(json.results);
        this.setState({ movieList: newMovieList });
        if(this.pageNumber === 1)
                 this.setState({ isLoadingForFirstTime: false });

        else
                 this.setState({ isLoading: false });

        
        
    } catch (error) {
      console.error(error);
    }
    };
    componentDidMount() {
        this.getMoviesFromApiAsync();
    }
    constructor() {
        super();
        this.state = {
          movieList: [],
          isLoading: false,
          isLoadingForFirstTime:false,
        };
    }
    render() {
        return (
          <View style={styles.container}>
            <Spinner
          visible={this.state.isLoadingForFirstTime}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
            />
            <FlatList
              onEndReachedThreshold={1}
              onEndReached={() => {
                this.getMoviesFromApiAsync();
              }}
              style={styles.flatList}
        data={this.state.movieList}
        keyExtractor={item => item.id+''}
        renderItem={movieData => 
        {
          return <MovieItem
            title={movieData.item.title}
            overview={movieData.item.overview}
            date={movieData.item.release_date}
            imagePath={movieData.item.poster_path}
          />
        }
        }
            />
            <ActivityIndicator size="small" color="#2596be" animating={this.state.isLoading} />
            
      </View>
  );
    }
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   flatList:{
     width: '100%',
     height: '100%'
  },
   spinnerTextStyle: {
    color: '#fff'
  },
 });
export default MainScreen;