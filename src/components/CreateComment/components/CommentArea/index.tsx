import * as S from './styles'
import { TextareaHTMLAttributes } from 'react'

const CommenArea = (props: TextareaHTMLAttributes<any>) => {
  return (
    <S.TextArea {...props} />
  )
}

export default CommenArea
