import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageScreen = () => {
  const [selectedTab, setSelectedTab] = useState('messages');

  const messagesData = [
    {
      id: '1',
      name: 'mario5',
      message: 'How are you?',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUCb1pxZ8llaUNO1oI914QdJ82Bs9DXaWDQ&s',
      type: 'missed',
      unreadCount: 2,
    },
    {
      id: '2',
      name: 'lea.98',
      message: 'See you soon!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4xT3jBhuvY5GK-KhSYvXuL9EjdWNQTBJWQ&s',
      type: 'outgoing',
      unreadCount: 10,
    },
    {
      id: '3',
      name: 'gabriel.g',
      message: 'Good morning! ',
      image:
        'https://wallpapers.com/images/hd/instagram-profile-pictures-7z4qm2xro1kk3xik.jpg',
      type: 'incoming',
      unreadCount: 1,
    },
  ];

  const storiesData = [
    {id: 'new', name: 'New', image: '', isNew: false},
    {
      id: '1',
      name: 'mario5',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUCb1pxZ8llaUNO1oI914QdJ82Bs9DXaWDQ&s',
      isNew: true,
    },
    {
      id: '2',
      name: 'lea.98',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4xT3jBhuvY5GK-KhSYvXuL9EjdWNQTBJWQ&s',
      isNew: true,
    },
    {
      id: '3',
      name: 'loco_cafe',
      image:
        'https://wallpapers.com/images/hd/instagram-profile-pictures-7z4qm2xro1kk3xik.jpg',
      isNew: false,
    },
    {
      id: '4',
      name: 'gabriel.g',
      image:
        'https://i.pinimg.com/236x/b8/13/e0/b813e0a433b348f2ff5b974d5b14a699.jpg',
      isNew: true,
    },
    {
      id: '5',
      name: 'Alen',
      image:
        'https://i.pinimg.com/236x/b8/13/e0/b813e0a433b348f2ff5b974d5b14a699.jpg',
      isNew: true,
    },
    {
      id: '6',
      name: 'Rabel',
      image:
        'https://i.pinimg.com/236x/b8/13/e0/b813e0a433b348f2ff5b974d5b14a699.jpg',
      isNew: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#999"
          style={{marginRight: 8}}
        />
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.storiesContainer}>
        <FlatList
          data={storiesData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={[styles.storyItem, item.id == 'new' && {marginLeft: 15}]}>
              {item.id == 'new' ? (
                <TouchableOpacity style={styles.newStoryCircle}>
                  <Ionicons name="add" size={24} color="#000" />
                </TouchableOpacity>
              ) : (
                <View>
                  <Image source={{uri: item.image}} style={styles.storyImage} />
                  {item.isNew && <View style={styles.activeDot} />}
                </View>
              )}
              <Text style={styles.storyName}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.tabSwitch}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'messages'
              ? styles.activeLeftTab
              : styles.inactiveLeftTab,
          ]}
          onPress={() => setSelectedTab('messages')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'messages'
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}>
            Messages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'calls'
              ? styles.activeRightTab
              : styles.inactiveRightTab,
          ]}
          onPress={() => setSelectedTab('calls')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'calls'
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}>
            Calls
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={messagesData}
        keyExtractor={item => item.id}
        style={{marginTop: 10}}
        renderItem={({item}) => (
          <View style={styles.messageCard}>
            <Image source={{uri: item.image}} style={styles.userImage} />
            <View style={{flex: 1, marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                {selectedTab === 'messages' && item.unreadCount > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unreadCount}</Text>
                  </View>
                )}
              </View>
              {selectedTab === 'messages' ? (
                <Text style={{color: '#666', fontSize: 12}}>
                  {item.message}
                </Text>
              ) : (
                <Text
                  style={{
                    color: item.type == 'missed' ? 'red' : '#666',
                    fontSize: 12,
                  }}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)} call
                </Text>
              )}
            </View>
            {selectedTab == 'calls' && (
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="call-outline"
                  size={20}
                  color="#000"
                  style={{marginRight: 10}}
                />
                <Ionicons name="videocam-outline" size={20} color="#000" />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom:15
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
  searchContainer: {
    marginTop: 25,
    marginHorizontal: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  storiesContainer: {
    marginTop: 15,
    marginBottom:15
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  newStoryCircle: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  storyName: {
    fontSize: 12,
    marginTop: 5,
    color: '#000',
  },
  tabSwitch: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  tabText: {
    fontSize: 14,
  },
  activeLeftTab: {
    backgroundColor: '#fff',
  },
  inactiveLeftTab: {
    backgroundColor: '#000',
  },
  activeRightTab: {
    backgroundColor: '#fff',
  },
  inactiveRightTab: {
    backgroundColor: '#000',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#fff',
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 15,        
    marginVertical: 5,        
    borderRadius: 10,          
    paddingHorizontal: 15,
    paddingVertical: 10,
},
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 18,
    height: 18,
  },
  unreadText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
