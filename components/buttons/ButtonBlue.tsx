type Props = {
  className: string
  text: string
}
const ButtonBlue = ({className, text}: Props) => {
  return (
    <div className="template--button">
      <button
        className={`
          button button--gradient button--small after:bg-gradient-to-b ${className}
          after:from-[#218dcc] after:to-[#064b74]
        `}>
        <span className="text">{text}</span>
        <span
          className="highlight before:bg-gradient-to-b before:to-[#08476b] before:via-[#116799] before:from-[#08476b]"
        />
      </button>
    </div>
  )
}

export default ButtonBlue