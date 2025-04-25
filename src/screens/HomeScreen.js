import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function HomeScreen() {
  const stories = [
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
    'https://cdn-icons-png.freepik.com/512/6230/6230762.png',
  ];

  return (
    <ScrollView style={styles.container}>
      <View></View>
      <Text style={styles.title}>Connected</Text>
      <ScrollView horizontal style={styles.storiesContainer}>
        {stories.map((story, index) => (
          <View key={index} style={styles.story}>
            <Image source={{uri: story}} style={styles.storyImage} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.postContainer}>
        <View style={styles.userContainer}>
          <Image
            source={{
              uri: 'https://ideausher.com/wp-content/uploads/2022/07/covr-image-50_result.webp',
            }}
            style={styles.smallImage}
          />

          <Text style={styles.username}>First Username</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
          }}
          style={styles.mainImage}
        />
        <Text style={styles.caption}>
          Yesterday I painted this to express my gratitude towards people...
        </Text>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.userContainer}>
          <Image
            source={{
              uri: 'https://ideausher.com/wp-content/uploads/2022/07/covr-image-50_result.webp',
            }}
            style={styles.smallImage}
          />

          <Text style={styles.username}>Second Username</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?cs=srgb&dl=pexels-fauxels-3182773.jpg&fm=jpg',
          }}
          style={styles.mainImage}
        />
        <Text style={styles.caption}>
          This is my second post, showcasing more of my work...
        </Text>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.userContainer}>
          <Image
            source={{
              uri: 'https://ideausher.com/wp-content/uploads/2022/07/covr-image-50_result.webp',
            }}
            style={styles.smallImage}
          />

          <Text style={styles.username}>Third Username</Text>
        </View>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/software-development-data-digital-programs-system-technology-concept-software-development-data-digital-programs-system-technology-114631832.jpg',
          }}
          style={styles.mainImage}
        />
        <Text style={styles.caption}>
          Here’s another post. I hope you all are enjoying my art!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  storiesContainer: {flexDirection: 'row', marginBottom: 16},
  story: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 10,
  },
  storyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  postContainer: {marginBottom: 20},
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  smallImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 2,
  },
  mainImage: {
    width: '100%',
    height: 400,
    borderRadius: 16,
    marginBottom: 12,
  },
  caption: {
    marginTop: 8,
  },
});
