import React, { useRef } from 'react'
import { ChatTeardropDots } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { theme } from '../../theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@gorhom/bottom-sheet'

import { styles } from './styles'
import { Options } from '../Options'

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          weight="bold"
          size={24}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Options />
      </BottomSheet>
    </GestureHandlerRootView>
  )
}