import React from 'react';
import {View, FlatList} from 'react-native';
import MenuHeader from '../hocs/MenuHeader';
import {
  fontSize,
  fontWeight,
  screenHeight,
  screenWidth,
} from '../theme/common-style';
import {theme} from '../theme';
import ProductBox from '../hocs/ProductBox';

const products = [
  {
    id: 1,
    productName: 'Product 1',
    price: 1500,
    quantity: 1,
    weight: 1,
    stock: 5,
  },
  {
    id: 2,
    productName: 'Product 2',
    price: 1575,
    quantity: 1,
    weight: 1,
    stock: 5,
  },
  {
    id: 3,
    productName: 'Product 3',
    price: 1625,
    quantity: 1,
    weight: 1,
    stock: 5,
  },
  {
    id: 4,
    productName: 'Product 4',
    price: 1675,
    quantity: 1,
    weight: 1,
    stock: 5,
  },
  {
    id: 5,
    productName: 'Product 5',
    price: 1750,
    quantity: 1,
    weight: 1,
    stock: 5,
  },
];

const Home = props => {
  const renderFlatlist = ({item, index}) => {
    return (
      <View key={index} style={{margin: 12}}>
        <ProductBox
          inputButtonContainerColor={theme.colors.primary}
          inputButtonIconColor={theme.colors.white}
          item={item}
          navigation={props.navigation}
          width={0.44 * screenWidth}
          imageContainerHeight={0.25 * screenWidth}
          imageWidth={0.23 * screenWidth}
          imageHeight={0.21 * screenWidth}
          image={require('../assets/images/productImage.png')}
          title={item.productName}
          price={item.price}
          inputButtonBorderWidth={1}
          inputButtonBorderBottomRightRadius={20}
          inputButtonPaddingHorizontal={5}
          inputButtonBorderColor={theme.colors.primary}
          inputButtonsBackgroundColor={theme.colors.white}
        />
      </View>
    );
  };

  return (
    <>
      <MenuHeader
        backgroundColor={theme.colors.primary}
        headerTitle={'Home'}
        headerTitleColor={theme.colors.white}
        headerTitleSize={fontSize.title_30}
        headerTitleWeight={fontWeight[500]}
        backButton={false}
        backButtonColor={'white'}
        backButtonSize={25}
        cartIcon={true}
        onPressHeaderCartIcon={() => props.navigation.navigate('Cart')}
        onBackButtonPress={() => props.navigation.goBack()}
      />

      <View style={{marginTop: 20}}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={renderFlatlist}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 0.18 * screenHeight}}
        />
      </View>
    </>
  );
};

export default Home;
