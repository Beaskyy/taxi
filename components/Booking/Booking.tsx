
import AutocompleteAddress from './AutocompleteAddress'

const Booking = () => {
  // const screenHeight = window.innerHeight;
  return (
    <div className='p-5'>
      <h2 className='text-[20px] font-semibold'>Booking</h2>
      <div className='border border-1 p-5 rounded-md h-[75vh]'>
      <AutocompleteAddress />
      </div>
    </div>
  )
}

export default Booking