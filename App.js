import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import Add from './components/Add';
import AddNote from './components/AddNote';




export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const executeSearch = (search) => {
    console.log(search);
    const searchArray = DATA.filter((item) => item.lastName.startsWith(search) || item.firstName.startsWith(search));
    setItems(searchArray);
  }

  const renderItem = ({ item }) => (
    <Text key={item.id}>{item.lastName} {item.firstName}</Text>
  );

  const select = (id) => {
    console.log(id);
    setSelectedId(id)
  }

  return (

    < SafeAreaView style={styles.container} >
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems} />
      {selectedId && <AddNote items={items} setItems={setItems} selectedId={selectedId} />}
      <FlatList
        style={styles.list}
        data={items}
        extraData={selectedId}
        renderItem={({ item }) => (
          <Row person={item} selectedId={selectedId} select={select} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  }
});
