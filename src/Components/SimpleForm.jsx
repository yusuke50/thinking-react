import { useForm } from 'react-hook-form';

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const age = watch('age');
  const validateAge = (value) => {
    if (value >= 18 && value < 60) {
      return 'You are young.';
    } else if (value >= 60 && value < 99) {
      return 'You are elder.';
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-12 w-100'>
      <div className='grid grid-cols-1 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
            Name
          </label>
          <div className='mt-2'>
            <input
              id='name'
              name='name'
              type='text'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              {...register('name', { required: true })}
            />
          </div>
          <div className='mt-1'>{errors.name && <span>This field is required</span>}</div>
        </div>

        <div className='sm:col-span-3'>
          <label htmlFor='age' className='block text-sm font-medium leading-6 text-gray-900'>
            Age
          </label>
          <div className='mt-2'>
            <input
              id='age'
              name='age'
              type='number'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              {...register('age', {
                min: { value: 18, message: 'Your age must be at least 18.' },
                max: { value: 99, message: 'Age must be between 18 and 99' },
              })}
            />
          </div>
          <div className='mt-1'>
            {errors.age ? <span>{errors.age.message}</span> : <span>{validateAge(age)}</span>}
          </div>
        </div>
      </div>

      <input type='submit' />
    </form>
  );
};

export default SimpleForm;
