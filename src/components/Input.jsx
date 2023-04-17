import '../style/Input.scss';

export default function Input({label, error, name, placeholder, register, regName }) {
  return (
    <div className='input-container'>
    <label className={error ? 'input-container__label input-container__label--error' : 'input-container__label'} >
      {label}
    </label>
    <input type="number" name={name} placeholder={placeholder} {...register(`${regName}`)} className={error ? 'input-container__input input-container__input--error' : 'input-container__input'}/>
     <p className='input-container__error'>{error}</p>
    </div>
  )
}