import React from "react";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function List(){
  const [initialElements, changeEl] = useState([
    { id: "0", text: "Object 1" },
    { id: "1", text: "Object 2" },
  ]);
 
  const [incr,set_incr]=useState(2)

const add=()=>{
  let newArray = [...initialElements, { id: incr, text: 'new '+ (incr+1) }];
  set_incr(incr+1);
  changeEl(newArray);
  set_list(newArray);
  console.log(initialElements)
}

const [search_list, set_list]=useState(initialElements);
const search=(event)=>{
  let txt = event.toLowerCase();
  let update=initialElements;

 update=update.filter((item)=>{
 let text= item.text.toLowerCase();
   return text.indexOf(txt)>-1;
 }
 );
  set_list(update);
  console.log(initialElements);
}

  return(
    <View>
    {/* head */}
      <View style={styles.header}>
        <TextInput placeholder="Search"
        
        onChangeText={search}
          style={styles.search}
        />
        <TouchableOpacity onPress={add}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      
      </View>

      {/* body */}
      <View style={styles.list_box}>
        <FlatList
          data={search_list}
          renderItem={item => (<Text style={styles.list}>{item.item.text}</Text>)}
          keyExtractor={item => item.id}

        />
      </View>

    </View>
  )
}

const styles=StyleSheet.create(
  {
    header: {
      backgroundColor: '#ffff00',
      flex: 1,
      flexDirection:'row',
      padding:4,
      justifyContent:"center"

        },
        search: {
          padding:10,
          backgroundColor:'#fff',
          border:0,
          utlineStyle:'none',
          width:250,
          borderRadius: 4,
        },
        btn:{
          textAlign:"center",
          fontSize:30,
          marginLeft:10,
        },
        list:{
          backgroundColor:'#f1f1f1',
          margin:3,
          padding:8

        },
        list_box:{
          padding:10
        }
  }
)
