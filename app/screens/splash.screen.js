import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Text } from 'native-base';


export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

render() {
return (
  <Container>
  <Header>
    <Left>
      <Button transparent>
        <Icon name='arrow-back' />
      </Button>
    </Left>
    <Body>
      <Title>Header</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Right>
  </Header>

        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>

</Container>

)
}
}