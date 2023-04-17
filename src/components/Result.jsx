import '../style/Result.scss'
export default function Result({years, month, days}) {
  return (
    <div className='result-container'>
      <div className='result-container__result'>{years} <p className='result-container__result--static'>years</p></div>
      <div className='result-container__result'>{month} <p className='result-container__result--static'>month</p></div>
      <div className='result-container__result'>{days} <p className='result-container__result--static'>days</p></div>
    </div>
  )
}