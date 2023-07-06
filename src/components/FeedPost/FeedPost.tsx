import React from 'react'
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors'

import {styles} from './styles'
import fonts from '../../theme/fonts'

const FeedPost = () => {
  return (
    <SafeAreaView>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>pinazza.js</Text>
          <Entypo
            name="dots-three-vertical"
            size={16}
            style={styles.threeDots}
          />
        </View>
        {/* Content */}
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
          }}
          style={styles.image}
        />
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <AntDesign
              name={'hearto'}
              size={24}
              color={colors.black}
              style={styles.icon}
            />
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={colors.black}
              style={styles.icon}
            />
            <Feather
              name="send"
              size={24}
              color={colors.black}
              style={styles.icon}
            />
            <Feather
              name="bookmark"
              size={24}
              color={colors.black}
              style={{marginLeft: 'auto'}}
            />
          </View>
          {/* Likes */}
          <Text>
            Liked by <Text style={styles.link}>lgrinevivius</Text> and{' '}
            <Text style={styles.link}>66 others</Text>
          </Text>
          {/* Post Description */}
          <Text>
            <Text style={styles.link}>pinazza</Text> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos culpa nostrum, beatae
            reprehenderit recusandae consequuntur repellat consectetur,
            accusantium ab commodi atque quidem exercitationem?
          </Text>
          {/* Comments */}
          <Text style={{color: colors.gray}}>View all 16 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.link}>Castiiz</Text> Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </Text>
            <AntDesign
              name={'hearto'}
              size={16}
              color={colors.black}
              style={styles.icon}
            />
          </View>
          {/* Posted Date */}
          <Text style={{color: colors.gray}}>06 July, 2023</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FeedPost
