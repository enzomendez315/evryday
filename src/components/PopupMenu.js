import React, { useCallback, memo } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, FlatList, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS } from '../theme/theme';

const DEBUG = true;

const EmptyHeader = () => (
  <></>
)

const PopupContentFlatList = ({ data, closePopup, ItemComponent, onPress }) => {
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <>
          <ItemComponent
            item={item}
            onPress={() => {
              closePopup();
              onPress(item);
            }}
          />
        </>
      );
    },
    [closePopup, onPress]
  );
  return (
    <>
      <View style={styles.popupContentContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent=<Text>Loading</Text>
        />
      </View>
    </>
  );
};

// Creates a popup on screen that closes when the user clicks outside of the container.
const PopupComponent = ({
  isVisible,
  setIsVisible,
  data,
  ItemComponent,
  onPress,
  Content = PopupContentFlatList,
  Header = EmptyHeader,
  title,
  stylePrefix = 'center',
}) => {
  const closePopup = useCallback(() => {
    isVisible && setIsVisible(false);
  }, [isVisible, setIsVisible]);
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setIsVisible(false)}>
      <TouchableWithoutFeedback onPress={closePopup}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles[stylePrefix + 'PopupOverlay']}>
            <TouchableWithoutFeedback>
              <View style={styles[stylePrefix + 'Popup']}>
                <Header
                  title={title}
                  closePopup={closePopup} />
                <Content
                  data={data}
                  closePopup={closePopup}
                  ItemComponent={ItemComponent}
                  onPress={onPress}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export const NavMenuPopupComponent = ({
  isVisible,
  setIsVisible,
  data
}) => {

  const NavPopupItem = memo(
    ({ item, onPress }) => (
      <TouchableOpacity
        onPress={() => {
          onPress(item)
        }}
        style={styles.menuRow}>
        <Text style={styles.rowLabel}>{item.name}</Text>
      </TouchableOpacity>
    ),
    (prevProps, nextProps) => {
      return prevProps.item.id === nextProps.item.id;
    }
  );

  const navMenuOnPress = (item) => {
    DEBUG && console.log(item.name, 'pressed');
    setIsVisible(false);
    item.onPress();
  }

  return (
    <PopupComponent
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      data={data}
      ItemComponent={NavPopupItem}
      onPress={navMenuOnPress}
      stylePrefix='rightSide'
    />
  );
}

export default PopupComponent;

const styles = StyleSheet.create({
  rightSidePopupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: 60,
    marginRight: 0,
    marginLeft: 'auto',
  },
  rightSidePopup: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '90%',
  },
  centerPopupOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centerPopup: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    maxHeight: '70%',
    width: '90%'
  },
  popupContentContainer: {
    flex: -1,
    width: '100%',
    maxHeight: '100%',
    gap: 5
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: COLORS.backgroundBlue,
    borderRadius: 8,
    marginBottom: 6,
    marginTop: 6,
    paddingLeft: 50,
    paddingRight: 50,
  }
});