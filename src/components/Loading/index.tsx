import './index.scss'

const Loading = () => {
  return (
    <div className={`h-full w-full flex items-center justify-center`}>
      <div className="loader-container">
        <div className="loader-child"></div>
        <div className="loader-child"></div>
        <div className="loader-child"></div>
      </div>
    </div>
  )
}

export default Loading
