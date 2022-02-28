
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function App() {
  const [initialElements, changeEl] = useState([
    { id: "0", text: "Object 1" },
    { id: "1", text: "Object 2" },
  ]);

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(2);

  const addElement = () => {
    var newArray = [...initialElements, { id: idx, text: "Object " + (idx + 1) }];
    incr(idx + 1);
    console.log(initialElements.length);
    setExampleState(newArray);
    changeEl(newArray);
  }

  return (




<View>
  <View style={styles.title}>
    <View style={styles.box}>
          <TextInput placeholder='Search'
            style={styles.search}
          />
          <View>
            <TouchableOpacity
              onPress={addElement}
            >
              <Text style={styles.btn_txt}>+</Text>
            </TouchableOpacity>
          </View>
    </View>
  </View>
    <View>
      <FlatList
        data={exampleState}
        renderItem={item => (<Text style={styles.list}>{item.item.text}</Text>)} 
        keyExtractor={item => item.id}
        
      />
    </View>
</View>


  );
}

const styles= StyleSheet.create(
  {
    title: {
      width:'100%',
      backgroundColor:'powderblue',
      padding:5,
      alignItems:'center'
    },
    search: {
      backgroundColor:'#fff',
      color:'#000',
      width:'100%',
      padding:10,
      borderRadius:2,
      marginRight: 10,
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      marginRight: 20,
      
    },
    btn_txt:{
      fontSize:30,
    },
    list: {
      backgroundColor: '#fff0f0',
      padding: 5,
      marginTop:3,
      fontSize:18
    },

  }
)

