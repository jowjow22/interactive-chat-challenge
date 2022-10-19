import CommenArea from "./components/CommentArea"
import Button from "@components/Button"
import * as S from './styles'
import Rafa from "@assets/rafaelNoBitches.png"

const CreateComment = () => {
  return (
    <S.StyledSection>
      <S.userImage src={Rafa} alt="user" />
      <CommenArea placeholder="Add a comment..." />
      <Button type="button" color="#6a35b8">Send</Button>
    </S.StyledSection>
  )
}

export default CreateComment