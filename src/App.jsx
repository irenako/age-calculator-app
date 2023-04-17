import { useState } from 'react'
import './style/App.scss'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from './components/Input'
import Button from './components/Button'
import Result from './components/Result'

function App() {
  const [year, setYear] = useState(0)
  const [month, setMonth] = useState(0)
  const [days, setDays] = useState(0)

  const schema = yup.object().shape({
  year: yup.number('Not valid').max(new Date().getFullYear(), 'Not valid').min(1900, 'Not valid').required("This field is required").typeError('Not valid'),
  month: yup.number('Not valid').max(12, 'Not valid').min(1, 'Not valid').required("This field is required").typeError('Not valid'),
  date: yup.number('Not valid').max(31, 'Not valid').min(1, 'Not valid').required("This field is required").typeError('Not valid')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const submitForm = (data) => {
    const currentDate = new Date();
    const birthDate = new Date(data.year, data.month, data.date);

    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();
    let ageDay = currentDate.getDate() - birthDate.getDate();

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    if(ageDay < 0) {
        ageDay += daysInMonth(birthDate.getMonth(), birthDate.getFullYear());
        ageMonth -= 1;

    }
    if(ageMonth < 0) {
        ageMonth += 12;
        ageYear -= 1;
    }

    setYear(ageYear)
    setMonth(ageMonth)
    setDays(ageDay)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(submitForm)} className='container__form'>
        <div className='form__inputs-container'>
        <Input name='date' placeholder="DD" label='Day' register={register} regName='date' error={errors.date?.message}/>
        <Input name='month' placeholder="MM" label='Month' register={register} regName='month' error={errors.month?.message}/>
        <Input name='year' placeholder="YYYY" label='Year' register={register} regName='year' error={errors.year?.message}/>
        </div>

        <div className='form__button-container'>
        <hr />
        <Button />
        </div>
      </form>

      <Result years={year} month={month} days={days}/>
    </div>
  )
}

export default App
