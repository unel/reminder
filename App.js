import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {types} from 'mobx-state-tree';

const ReminderCategory = types.model("ReminderCategory", {
  title: types.string,
  remindOptions: types.map({
    notificationType: types.string
  })
})

const Reminder = types.model("Reminder", {
  title: types.string,
  category: types.reference(ReminderCategory)
});

const Store = types.model({
  reminders: types.array(Reminder)
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  }
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!!</Text>
      </View>
    );
  }
}
