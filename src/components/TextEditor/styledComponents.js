import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #25262c;
  height: 100vh;
`
export const TextEditorCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #1b1c22;
  padding: 20px;
  width: 80%;
`
export const TextEditorImgCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 30px;
`
export const Title = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-family: 'Roboto';
`
export const TextEditorImg = styled.img`
  height: 250px;
  width: 80%;
`
export const TextCard = styled.div`
  border: 1px solid #334155;
  border-radius: 15px;
  width: 45%;
`
export const IconsCard = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const IconButtonCard = styled.li`
  list-style-type: none;
`

export const BoldButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled(BoldButton)`
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`

export const UnderLineButton = styled(BoldButton)`
  color: ${props => (props.underLine ? '#faff00' : '#f1f5f9')};
`

export const Separator = styled.hr`
  border: 1px solid #334155;
  width: 100%;
`
export const Textarea = styled.textarea`
  height: 330px;
  width: 100%;
  outline: none;
  border: none;
  color: #f1f5f9;
  padding: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  background-color: transparent;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underLine ? 'underline' : 'normal')};
`
