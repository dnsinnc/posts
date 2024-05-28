import './customButton.css'


interface CustomButtonProps {
   children: string,
   onClick: React.MouseEventHandler<HTMLButtonElement>
}



function CustomButton({ children, onClick }: CustomButtonProps) {
   return (
      <>
         <button className='custom-button' onClick={onClick} >
            {children}
         </button></>
   );
}

export default CustomButton;