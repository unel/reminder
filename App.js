import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {types} from 'mobx-state-tree';
import {observer} from 'mobx-react';

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

@observer
class RemindersList extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <View style={[styles.container, {flex: 3, borderColor: 'red', borderStyle: 'solid', borderWidth: 1}]}>
        <Text style={styles.text}>kokoko</Text>
        {store.reminders.map(reminder => (
          <Text style={styles.text}>{reminder.title}</Text>
        ))}
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();

    this._store = Store.create({
      reminders: [
        {title: "rm1", category: {title: "a", remindOptions: {notificationType: "z"}}},
        {title: "rm2", category: {title: "b", remindOptions: {notificationType: "z"}}}
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Open up App.js to start working on your app!!</Text>
        </View>
        <RemindersList store={store}/>
      </View>
    );
  }
}
