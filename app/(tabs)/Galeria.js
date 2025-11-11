import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';

// 📸 Corrigido: caminho relativo partindo de app/(tabs)/Galeria.js
const initialPhotos = [
  { id: '1', uri: require('../../assets/images/img1.jpg') },
  { id: '2', uri: require('../../assets/images/img2.jpg') },
  { id: '3', uri: require('../../assets/images/img3.jpg') },
  { id: '4', uri: require('../../assets/images/img4.jpg') },
  { id: '5', uri: require('../../assets/images/img5.jpg') },
  { id: '6', uri: require('../../assets/images/img6.jpg') },
];

export default function Galeria({ photos = initialPhotos }) {
  const [items, setItems] = useState(photos);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function openViewer(item) {
    setSelected(item);
    setModalVisible(true);
  }

  function closeViewer() {
    setModalVisible(false);
    setSelected(null);
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => openViewer(item)}
        style={{ flex: 1, margin: 6, alignItems: 'center' }}
      >
        <Image
          source={item.uri} // ✅ agora funciona com require()
          style={{
            width: 120,
            height: 120,
            borderRadius: 12,
            backgroundColor: '#e2e8f0',
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#00b4e0' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Mural de Fotos</Text>
        <Text style={{ color: '#374151' }}>{items.length} fotos</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* Modal de visualização */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeViewer}
        transparent={false}
      >
        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <View
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Pressable onPress={closeViewer} style={{ padding: 8 }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Fechar</Text>
            </Pressable>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              {selected ? `Foto ${selected.id}` : ''}
            </Text>
            <View style={{ width: 48 }} />
          </View>

          <ScrollView
            maximumZoomScale={4}
            minimumZoomScale={1}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            {selected && (
              <Image
                source={selected.uri}
                style={{
                  width: '100%',
                  height: 500,
                  resizeMode: 'contain',
                }}
              />
            )}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
