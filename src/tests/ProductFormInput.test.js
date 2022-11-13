import { render, fireEvent } from '@testing-library/react'
import ProductFormInput from '../components/ProductFormInput'

describe (ProductFormInput, () => {
    it ('Value should start with 1', () => {
        const { getByTestId } = render(<ProductFormInput form_count={1} />)
        const value = Number(getByTestId('inputqty').textContent) 
        expect(value).toEqual(1)
        })

    it ('if increment button is pressed value should icrement by 1', () => {
        const { getByTestId } = render(<ProductFormInput form_count={1} />)
        const button = getByTestId('inc-button')

        fireEvent.click(button)
        const value = Number(getByTestId('inputqty').textContent) 
        
        expect(value).toEqual(2)
        })
    }) 


/*         
const button = getByRole('button', {name: '+'})
fireEvent.click(button)
 */

  