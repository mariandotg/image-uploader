interface ButtonProps {
  onClickHandler: () => void
  children: React.ReactNode
}

type ButtonComponent = (props: ButtonProps) => JSX.Element

const Button: ButtonComponent = ({ onClickHandler, children }: ButtonProps) =>
    <button className='button-primary' onClick={onClickHandler}>{children}</button>

export default Button
