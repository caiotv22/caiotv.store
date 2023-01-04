export default function Input(value) {
  return (
    <>
      <div className='mb-6'>
        <label htmlFor={value.id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          {value.labelTitle}
        </label>
        <input
          type='text'
          id={value.id}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name={value.id}
          placeholder={value.placeHolderVal}
          onChange={(e) => value.setInput(e.target.value)}
          defaultValue={value.defaultVal}
          maxLength={value.maxLengthVal}
        />
      </div>
    </>
  );
}
