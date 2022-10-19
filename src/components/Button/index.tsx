import * as S from "./styles"

interface ButtonProps {
  type: "submit" | "button"
  color: string
  children?: React.ReactNode
}

const Button = ({color, type, children}:ButtonProps) => {
  return (
    <S.Button type={type} color={color}>
      {children}
    </S.Button>
  )
}

export default Button