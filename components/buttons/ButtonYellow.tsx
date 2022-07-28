type Props = {
  className: string
  text: string
}

const ButtonYellow = ({className, text}: Props) => {
  return (
    <div className="template--button">
      <button
        className={`
          button button--gradient button--small after:bg-gradient-to-b ${className}
          after:from-[#f3ff4a] after:to-[#899205]
        `}>
        <span className="text">{text}</span>
        <span
          className="highlight before:bg-gradient-to-b before:from-[#a2ac15] before:via-[#c9d42c] before:to-[#a2ac15]"
        />
      </button>
    </div>
  )
}

export default ButtonYellow