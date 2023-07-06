import {StyleSheet} from 'react-native'
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'

export const styles = StyleSheet.create({
  post: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  threeDots: {
    marginLeft: 'auto'
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  footer: {
    padding: 5
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  icon: {
    marginHorizontal: 5
  },
  link: {
    fontWeight: fonts.weight.bold
  },
  commentText: {
    flex: 1
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
