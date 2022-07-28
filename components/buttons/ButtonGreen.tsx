type Props = {
  className: string
  text: string
}

const ButtonGreen = ({className, text}: Props) => {
  return (
    <div className="template--button">
      <button
        className={`
          button button--gradient button--small after:bg-gradient-to-b ${className}
          after:from-[#32c76b] after:to-[#0eb34d]
        `}>
        <span className="text">{text}</span>
        <span
          className="highlight before:bg-gradient-to-b before:from-[#038a37] before:via-[#0eb34d] before:to-[#038a37]"
        />
      </button>
    </div>
  )
}

export default ButtonGreen