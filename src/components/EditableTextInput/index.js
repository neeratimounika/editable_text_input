import {Component} from 'react'
import styled from 'styled-components'

export default class EditableTextInput extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  getText = e => {
    this.setState({text: e.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InlineBlock>
            {isEditable ? (
              <Input value={text} type="text" onChange={this.getText} />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </InlineBlock>
        </Container>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 250px;
  width: 400px;
  color: #ffffff;
`
const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: ;
`
const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 10px;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #d946ef;
  color: #fff;
  padding: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
`

const InlineBlock = styled.div``

const InlineText = styled.p`
  display: inline;
  margin-right: 10px;
  font-size: 20px;
  font-weight: 500;
`
