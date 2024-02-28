import React, {useState} from 'react';
import { Button, Text, View } from "react-native";
import {Table, Row, Rows} from 'react-native-table-component';
const ThirdPage = () => {
  const tableHead = ['Header 1', 'Header 2', 'Header 3'];
  const tableData = [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
    ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'],
  ];
  const [state, setState] = useState(false);

  const changeSt = () => {
    state === true ?
      setState(false) : setState(true)
  }
  return (
    <View
      style={{flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
      {state === true ?
        <Table borderStyle={{borderWidth: 2, borderColor: 'gray'}}>
          <Row
            data={tableHead}
            style={{height: 40, backgroundColor: '#f1f8ff'}}
            textStyle={{textAlign: 'center', fontWeight: 'bold'}}
          />
          <Rows
            data={tableData}
            style={{height: 80}}
            textStyle={{textAlign: 'center'}}
          />
        </Table>
        :
        <View><Text>no table</Text></View>
      }
      <Button onPress={changeSt} title="click!" color="#841584" />
    </View>
  );
};

export default ThirdPage;
