import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({navigation}) {
  const stories = [
    {image: '', name: 'You'},
    {
      image:
        'https://photosraja.com/wp-content/uploads/2024/09/instagram-profile-pictures-1.webp',
      name: 'Alen',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUCb1pxZ8llaUNO1oI914QdJ82Bs9DXaWDQ&s',
      name: 'Alex',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4xT3jBhuvY5GK-KhSYvXuL9EjdWNQTBJWQ&s',
      name: 'Sara',
    },
    {
      image:
        'https://marketplace.canva.com/EAFRB6kAm4c/1/0/1600w/canva-black-modern-beauty-instagram-profile-picture-bCc0eCjeAgc.jpg',
      name: 'ABC',
    },
    {
      image:
        'https://wallpapers.com/images/hd/instagram-profile-pictures-7z4qm2xro1kk3xik.jpg',
      name: 'DEF',
    },
    {
      image:
        'https://i.pinimg.com/236x/b8/13/e0/b813e0a433b348f2ff5b974d5b14a699.jpg',
      name: 'JKL',
    },
  ];

  const posts = [
    {
      username: 'Alen',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTb_ocJn7nghcfKOy75Ir57W10EdMpeTvsw&s',
      mainImage:
        'https://thumbs.dreamstime.com/b/landscape-nature-view-background-view-window-landscape-nature-view-background-view-window-wonderful-landscape-121459679.jpg',
      caption:
        "Yesterday I've painted this picture to express my gratitude towards people who always like my posts.",
      commentsCount: 20,
      likesCount: 300,
    },
    {
      username: 'Alex',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJNVY8A9UMDUlg9WfY4NGe5sLyA1t5mW4Ng&s',
      mainImage: 'https://i.ytimg.com/vi/oKGPtAW-Cn0/hqdefault.jpg',
      caption: 'Nature lover 🌿',
      commentsCount: 150,
      likesCount: 400,
    },
    {
      username: 'Sara',
      profilePic:
        'https://www.shutterstock.com/image-photo/portrait-smile-man-on-wood-260nw-2440362587.jpg',
      mainImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/when-to-stop-posting-online-185854207-16x9_0.jpg?VersionId=QZlF4uHjYPZ8HCY.tqkSA3dy7Nfp83wp',
      caption: 'Work Mode On',
      commentsCount: 15,
      likesCount: 250,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Connected</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}>
          <MaterialIcons name="notifications-none" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Stories Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}>
       {stories.map((story, index) => (
  <View key={index} style={styles.storyItem}>
    <View style={[
      styles.storyOuterCircle,
      story.name === 'You' && {
        backgroundColor: '#fff',
        borderColor: '#ccc',   // light grey border
        borderWidth: 1,
      }
    ]}>
      <View style={[
        styles.storyInnerCircle,
        story.name === 'You' && {
          backgroundColor: '#f0f0f0',
          borderColor: '#ccc',  // light grey border
          borderWidth: 1,
        }
      ]}>
        {story.name === 'You' ? (
          <>
            <TouchableOpacity style={styles.plusButtonCenter}>
              <Icon name="plus" size={30} color="gray" />
            </TouchableOpacity>
          </>
        ) : (
          <Image source={{uri: story.image}} style={styles.storyImage} />
        )}
      </View>
    </View>
    <Text style={styles.storyName} numberOfLines={1}>
      {story.name}
    </Text>
  </View>
))}

      </ScrollView>

      {/* Posts Section */}
      {posts.map((post, index) => (
        <View key={index} style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.userContainer}>
              <Image
                source={{uri: post.profilePic}}
                style={styles.profileImage}
              />
              <Text style={styles.username}>{post.username}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="dots-three-horizontal" size={20} color="#555" />
            </TouchableOpacity>
          </View>

          <Image source={{uri: post.mainImage}} style={styles.mainImage} />

          <Text style={styles.caption}>{post.caption}</Text>

          <View style={styles.interactionRow}>
            <View style={styles.commentContainer}>
              <FontAwesome name="comment-o" size={20} color="#000" />
              <Text style={styles.commentText}>
                {post.commentsCount} comments
              </Text>
            </View>
            <View style={styles.likeContainer}>
              <Text style={styles.likeText}>
                You & {post.likesCount} others
              </Text>
              <FontAwesome
                name="heart"
                size={20}
                color="#de3163"
                style={{marginLeft: 6}}
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  storiesContainer: {
    marginBottom: 20,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 12,
  },
  storyOuterCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#a5b4fc', // Blue outer
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyInnerCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#fff', // White inner
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  plusButtonCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 31, // same as inner circle radius
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  storyImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    resizeMode: 'cover',
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  interactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#555',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 13,
    color: '#555',
  },
});
