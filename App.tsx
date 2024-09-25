import { TamaguiProvider, View } from '@tamagui/core'

import config from './tamagui.config' // your configuration
import { Button, Portal, PortalProvider, Text } from 'tamagui'
import { useState } from 'react'

function Portal1() {
  return (
    <Portal>
      <View mt={100}>
        <Text>portal1 content</Text>
      </View>
    </Portal>
  )
}

function Portal2() {
  return (
    <Portal>
      <View mt={200}>
        <Text>portal2 content</Text>
      </View>
    </Portal>
  )
}

function Demo() {
  const [toggle, setToggle] = useState(false)

  return (
    <View pt={400}>
      <Text>toggle value: {String(toggle)}</Text>
      <Button mt={10} onPress={() => setToggle(!toggle)}>
        toggle
      </Button>
      {toggle ? <Portal1 /> : <Portal2 />}
    </View>
  )
}

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <PortalProvider shouldAddRootHost>
        <Demo />
      </PortalProvider>
    </TamaguiProvider>
  )
}
