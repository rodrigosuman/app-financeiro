import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Animated, Alert} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {deleteObject} from '~/services/realm';

import {
  Container,
  RegistryTitle,
  RegistryDate,
  RegistryValue,
  Header,
  RegistryDescription,
  Footer,
  Tags,
  Tag,
  Content,
} from './styles';
import {Item} from 'native-base';

function IconCategoria({receita}) {
  let icon = <></>;

  if (receita) {
    icon = <Icon name="arrow-upward" color="#0DAB76" size={16} />;
  } else {
    icon = <Icon name="arrow-downward" color="#FF3C38" size={16} />;
  }

  return icon;
}

function CategoriaDescricao({descricao}) {
  return <>{descricao}, </>;
}

export default function Lancamento({data, callBack, navigation}) {
  const {tipo, pago} = data;
  const translateX = new Animated.Value(0);
  const {navigate} = navigation;
  let offset = 0;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {id} = data;
      const {translationX} = event.nativeEvent;

      offset += translationX;

      if (translationX >= 50) {
        opened = true;
        Alert.alert(
          'Alerta',
          'Deseja deletar essa transação?',
          [
            {
              text: 'Não',
              onPress: () => {
                translateX.setValue(0);
                translateX.setOffset(0);
                offset = 0;
              },
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => deleteObject('lancamentos', id, callBack),
            },
          ],
          {cancelable: false},
        );
      } else {
        translateX.setValue(offset);
        translateX.setOffset(0);
        offset = 0;

        console.tron.log('VOLTOU');
      }

      Animated.timing(translateX, {
        toValue: opened ? 120 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 120 : 0;
        translateX.setOffset(offset);
        translateX.setValue(0);
      });
    }
  }

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}>
      <Container
        style={[
          {
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [-120, 0, 120], //dados de entrada para a função
                  outputRange: [-10, 0, 120], //dados de saida na tela
                  extrapolate: 'clamp', //não deixa estrapolar os valor acima
                }),
              },
            ],
          },
        ]}>
        <Tags>
          <Tag>
            {!pago ? (
              <IconSimpleLineIcons
                color="#FA7921"
                name="exclamation"
                size={16}
              />
            ) : (
              <Icon color="#6BD425" name="check" size={16} />
            )}
          </Tag>

          <Tag>
            <Icon
              onPress={() =>
                navigate('NovoLancamento', {
                  receita: data.tipo.receita,
                  callBack: callBack,
                  insert: false,
                  lancamento: data,
                })
              }
              name="edit"
              color="#2BD9FE"
              size={20}
            />
          </Tag>
        </Tags>

        <Header>
          <Content>
            <RegistryTitle>{data.descricao}</RegistryTitle>
          </Content>

          <Content
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <RegistryValue> R$ {data.valor.toFixed(2)} </RegistryValue>
            <Tag>{tipo ? <IconCategoria receita={tipo.receita} /> : <></>}</Tag>
          </Content>
        </Header>

        <Footer>
          <RegistryDescription>
            <CategoriaDescricao descricao={tipo ? tipo.descricao : <></>} />
          </RegistryDescription>
          <RegistryDescription>
            <RegistryDate>
              {moment(data.data).format('DD/MM/YYYY')}
            </RegistryDate>
          </RegistryDescription>
        </Footer>
      </Container>
    </PanGestureHandler>
  );
}
