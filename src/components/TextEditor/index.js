import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorContainer,
  TextEditorCard,
  TextEditorImgCard,
  Title,
  TextEditorImg,
  TextCard,
  IconsCard,
  IconButtonCard,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  Separator,
  Textarea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underLine: false}

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  render() {
    const {bold, italic, underLine} = this.state

    return (
      <TextEditorContainer>
        <TextEditorCard>
          <TextEditorImgCard>
            <Title>Text Editor</Title>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImgCard>
          <TextCard>
            <IconsCard>
              <IconButtonCard>
                <BoldButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  bold={bold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </IconButtonCard>
              <IconButtonCard>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italic={italic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </IconButtonCard>
              <IconButtonCard>
                <UnderLineButton
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                  underLine={underLine}
                >
                  <AiOutlineUnderline size={25} />
                </UnderLineButton>
              </IconButtonCard>
            </IconsCard>
            <Separator />
            <Textarea bold={bold} italic={italic} underLine={underLine} />
          </TextCard>
        </TextEditorCard>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
